import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
import fs from 'node:fs';
import path from 'node:path';

const prisma = new PrismaClient();
const typeDefs = fs.readFileSync(path.join(__dirname, '../schema.graphql'), 'utf8');

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        include: {
          profile: { include: { skills: true, languages: true } },
          cvs: { include: { skills: true, languages: true, projects: true } },
          position: true,
          department: true,
        },
      });
    },
    user: async (_: any, { userId }: { userId: string }) => {
      return await prisma.user.findUnique({
        where: { id: userId },
        include: {
          profile: { include: { skills: true, languages: true } },
          cvs: { include: { skills: true, languages: true, projects: true } },
          position: true,
          department: true,
        },
      });
    },
    skillCategories: async () => await prisma.skillCategory.findMany({ include: { children: true, parent: true } }),
    skills: async () => await prisma.skill.findMany({ include: { category: true } }),
    projects: async () => await prisma.project.findMany(),
    profile: async (_: any, { userId }: { userId: string }) => {
      return await prisma.profile.findUnique({
        where: { user_id: userId },
        include: { skills: true, languages: true },
      });
    },
    positions: async () => await prisma.position.findMany(),
    departments: async () => await prisma.department.findMany(),
    languages: async () => await prisma.language.findMany(),
    cvs: async () => {
      return await prisma.cv.findMany({
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },
    cv: async (_: any, { cvId }: { cvId: string }) => {
      return await prisma.cv.findUnique({
        where: { id: cvId },
        include: {
          user: { include: { profile: true, position: true } },
          skills: true,
          languages: true,
          projects: true,
        },
      });
    },
  },

  Mutation: {
    // ------------------------------------
    // Auth & User Mutations
    // ------------------------------------
    signup: async (_: any, { auth }: { auth: any }) => {
      const user = await prisma.user.create({
        data: {
          email: auth.email,
          password_hash: auth.password_hash,
          profile: {
            create: {
              first_name: auth.email.split('@')[0],
              last_name: 'User',
              full_name: `${auth.email.split('@')[0]} User`,
            },
          },
        },
        include: { profile: true },
      });

      return {
        user,
        access_token: `mock_access_token_${user.id}`,
        refresh_token: `mock_refresh_token_${user.id}`,
      };
    },

    forgotPassword: async (_: any, { auth }: { auth: { email: string } }) => {
      console.log(`Password reset requested for: ${auth.email}`);
      return true;
    },

    updateUser: async (_: any, { user }: { user: any }) => {
      return await prisma.user.update({
        where: { id: user.userId },
        data: {
          role: user.role || undefined,
          department_name: user.department_name || undefined,
          position_name: user.position_name || undefined,
          department_id: user.department_id || undefined,
          position_id: user.position_id || undefined,
        },
        include: { profile: true, cvs: true, position: true, department: true },
      });
    },

    // ------------------------------------
    // Profile Mutations
    // ------------------------------------
    updateProfile: async (_: any, { profile }: { profile: any }) => {
      const target = await prisma.profile.findUnique({ where: { user_id: profile.userId } });
      if (!target) throw new Error('Profile not found');

      const firstName = profile.first_name ?? target.first_name;
      const lastName = profile.last_name ?? target.last_name;

      return await prisma.profile.update({
        where: { id: target.id },
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`,
          avatar: profile.avatar || undefined,
        },
        include: { skills: true, languages: true },
      });
    },

    uploadAvatar: async (_: any, { avatar }: { avatar: any }) => {
      await prisma.profile.update({
        where: { user_id: avatar.userId },
        data: { avatar: avatar.base64 },
      });
      return avatar.base64;
    },

    addProfileLanguage: async (_: any, { language }: { language: any }) => {
      const profile = await prisma.profile.findUnique({ where: { user_id: language.userId } });
      if (!profile) throw new Error('Profile not found');

      await prisma.profileLanguage.create({
        data: { profile_id: profile.id, name: language.name, proficiency: language.proficiency },
      });

      return await prisma.profile.findUnique({
        where: { id: profile.id },
        include: { skills: true, languages: true },
      });
    },

    updateProfileLanguage: async (_: any, { language }: { language: any }) => {
      const profile = await prisma.profile.findUnique({ where: { user_id: language.userId } });
      if (!profile) throw new Error('Profile not found');

      await prisma.profileLanguage.updateMany({
        where: { profile_id: profile.id, name: language.name },
        data: { proficiency: language.proficiency },
      });

      return await prisma.profile.findUnique({
        where: { id: profile.id },
        include: { skills: true, languages: true },
      });
    },

    deleteProfileLanguage: async (_: any, { language }: { language: any }) => {
      const profile = await prisma.profile.findUnique({ where: { user_id: language.userId } });
      if (!profile) throw new Error('Profile not found');

      await prisma.profileLanguage.deleteMany({
        where: { profile_id: profile.id, name: language.name },
      });

      return await prisma.profile.findUnique({
        where: { id: profile.id },
        include: { skills: true, languages: true },
      });
    },

    addProfileSkill: async (_: any, { skill }: { skill: any }) => {
      const profile = await prisma.profile.findUnique({ where: { user_id: skill.userId } });
      if (!profile) throw new Error('Profile not found');

      await prisma.profileSkill.create({
        data: { profile_id: profile.id, name: skill.name, categoryId: skill.categoryId, mastery: skill.mastery },
      });

      return await prisma.profile.findUnique({
        where: { id: profile.id },
        include: { skills: true, languages: true },
      });
    },

    updateProfileSkill: async (_: any, { skill }: { skill: any }) => {
      const profile = await prisma.profile.findUnique({ where: { user_id: skill.userId } });
      if (!profile) throw new Error('Profile not found');

      await prisma.profileSkill.updateMany({
        where: { profile_id: profile.id, name: skill.name },
        data: { mastery: skill.mastery, categoryId: skill.categoryId },
      });

      return await prisma.profile.findUnique({
        where: { id: profile.id },
        include: { skills: true, languages: true },
      });
    },

    deleteProfileSkill: async (_: any, { skill }: { skill: any }) => {
      const profile = await prisma.profile.findUnique({ where: { user_id: skill.userId } });
      if (!profile) throw new Error('Profile not found');

      await prisma.profileSkill.deleteMany({
        where: { profile_id: profile.id, name: skill.name },
      });

      return await prisma.profile.findUnique({
        where: { id: profile.id },
        include: { skills: true, languages: true },
      });
    },

    // ------------------------------------
    // CV Mutations
    // ------------------------------------
    createCv: async (_: any, { cv }: { cv: any }) => {
      return await prisma.cv.create({
        data: { name: cv.name, education: cv.education, description: cv.description, user_id: cv.userId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    deleteCv: async (_: any, { cv }: { cv: any }) => {
      const res = await prisma.cv.deleteMany({ where: { id: cv.cvId } });
      return { affected: res.count };
    },

    addCvProject: async (_: any, { project }: { project: any }) => {
      const dbProject = await prisma.project.findUnique({ where: { id: project.projectId } });
      if (!dbProject) throw new Error('Project not found');

      await prisma.cvProject.create({
        data: {
          cv_id: project.cvId,
          project_id: dbProject.id,
          name: dbProject.name,
          internal_name: dbProject.internal_name,
          domain: dbProject.domain,
          description: dbProject.description,
          start_date: dbProject.start_date,
          end_date: dbProject.end_date,
        },
      });

      return await prisma.cv.findUnique({
        where: { id: project.cvId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    updateCvProject: async (_: any, { project }: { project: any }) => {
      await prisma.cvProject.updateMany({
        where: { cv_id: project.cvId, project_id: project.projectId },
        data: {
          start_date: project.start_date || undefined,
          end_date: project.end_date || undefined,
        },
      });

      return await prisma.cv.findUnique({
        where: { id: project.cvId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    removeCvProject: async (_: any, { project }: { project: any }) => {
      await prisma.cvProject.deleteMany({
        where: { cv_id: project.cvId, project_id: project.projectId },
      });

      return await prisma.cv.findUnique({
        where: { id: project.cvId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    addCvSkill: async (_: any, { skill }: { skill: any }) => {
      await prisma.cvSkill.create({
        data: { cv_id: skill.cvId, name: skill.name, categoryId: skill.categoryId, mastery: skill.mastery },
      });

      return await prisma.cv.findUnique({
        where: { id: skill.cvId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    updateCvSkill: async (_: any, { skill }: { skill: any }) => {
      await prisma.cvSkill.updateMany({
        where: { cv_id: skill.cvId, name: skill.name },
        data: { mastery: skill.mastery },
      });

      return await prisma.cv.findUnique({
        where: { id: skill.cvId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    deleteCvSkill: async (_: any, { skill }: { skill: any }) => {
      await prisma.cvSkill.deleteMany({
        where: { cv_id: skill.cvId, name: skill.name },
      });

      return await prisma.cv.findUnique({
        where: { id: skill.cvId },
        include: { user: true, skills: true, languages: true, projects: true },
      });
    },

    // ------------------------------------
    // Global Dictionaries (Skills & Languages)
    // ------------------------------------
    createLanguage: async (_: any, { language }: { language: any }) => {
      return await prisma.language.create({ data: language });
    },

    updateLanguage: async (_: any, { language }: { language: any }) => {
      return await prisma.language.update({
        where: { id: language.id },
        data: {
          name: language.name || undefined,
          native_name: language.native_name || undefined,
          iso2: language.iso2 || undefined,
        },
      });
    },

    deleteLanguage: async (_: any, { language }: { language: any }) => {
      const target = await prisma.language.findUnique({ where: { id: language.id } });
      if (!target) throw new Error('Language not found');
      await prisma.language.delete({ where: { id: language.id } });
      return target;
    },

    createSkill: async (_: any, { skill }: { skill: any }) => {
      return await prisma.skill.create({
        data: { name: skill.name, category_id: skill.categoryId },
        include: { category: true },
      });
    },

    updateSkill: async (_: any, { skill }: { skill: any }) => {
      return await prisma.skill.update({
        where: { id: skill.id },
        data: {
          name: skill.name || undefined,
          category_id: skill.categoryId || undefined,
        },
        include: { category: true },
      });
    },

    deleteSkill: async (_: any, { skill }: { skill: any }) => {
      const res = await prisma.skill.deleteMany({ where: { id: skill.skillId } });
      return { affected: res.count };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function main() {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀 Сервер со всеми мутациями запущен: ${url}`);
}

main();