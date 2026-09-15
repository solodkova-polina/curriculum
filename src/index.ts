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
          profile: {
            include: {
              skills: true,
              languages: true,
            },
          },
          cvs: {
            include: {
              skills: true,
              languages: true,
              projects: true,
            },
          },
          position: true,
          department: true,
        },
      });
    },

    user: async (_: any, { userId }: { userId: string }) => {
      return await prisma.user.findUnique({
        where: { id: userId },
        include: {
          profile: {
            include: {
              skills: true,
              languages: true,
            },
          },
          cvs: {
            include: {
              skills: true,
              languages: true,
              projects: true,
            },
          },
          position: true,
          department: true,
        },
      });
    },

    skillCategories: async () => {
      return await prisma.skillCategory.findMany({
        include: { children: true, parent: true },
      });
    },

    skills: async () => {
      return await prisma.skill.findMany({
        include: { category: true },
      });
    },

    projects: async () => {
      return await prisma.project.findMany();
    },

    profile: async (_: any, { userId }: { userId: string }) => {
      return await prisma.profile.findUnique({
        where: { user_id: userId },
        include: { skills: true, languages: true },
      });
    },

    positions: async () => {
      return await prisma.position.findMany();
    },

    departments: async () => {
      return await prisma.department.findMany();
    },

    languages: async () => {
      return await prisma.language.findMany();
    },

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
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Сервер успешно запущен: ${url}`);
}

main();