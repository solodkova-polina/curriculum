import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('⏳ Очистка старых данных...');
  
  // Очистка таблиц перед сидом
  await prisma.cvProject.deleteMany();
  await prisma.cvLanguage.deleteMany();
  await prisma.cvSkill.deleteMany();
  await prisma.cv.deleteMany();
  await prisma.profileLanguage.deleteMany();
  await prisma.profileSkill.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.project.deleteMany();
  await prisma.language.deleteMany();
  await prisma.position.deleteMany();
  await prisma.department.deleteMany();

  console.log('🌱 Наполнение базовых справочников...');

  // 1. Отделы
  const depFrontend = await prisma.department.create({
    data: { name: 'Frontend Department' },
  });
  const depBackend = await prisma.department.create({
    data: { name: 'Backend Department' },
  });

  // 2. Должности
  const posSeniorDev = await prisma.position.create({
    data: { name: 'Senior Frontend Developer' },
  });
  const posLeadDev = await prisma.position.create({
    data: { name: 'Tech Lead' },
  });

  // 3. Категории навыков и навыки
  const catWeb = await prisma.skillCategory.create({
    data: {
      name: 'Web Technologies',
      order: 1,
    },
  });

  const skillReact = await prisma.skill.create({
    data: { name: 'React', category_id: catWeb.id },
  });
  const skillTS = await prisma.skill.create({
    data: { name: 'TypeScript', category_id: catWeb.id },
  });

  // 4. Языки
  await prisma.language.createMany({
    data: [
      { name: 'English', native_name: 'English', iso2: 'en' },
      { name: 'Russian', native_name: 'Русский', iso2: 'ru' },
    ],
  });

  // 5. Проекты
  const projectEcom = await prisma.project.create({
    data: {
      name: 'E-Commerce Platform',
      internal_name: 'project-shop-v2',
      domain: 'Retail',
      start_date: '2023-01-15',
      end_date: '2024-06-30',
      description: 'Масштабный интернет-магазин с поддержкой микрофронтендов.',
    },
  });

  console.log('👤 Создание пользователей и профилей...');

  // 6. Пользователь + Профиль + CV
  const user = await prisma.user.create({
    data: {
      email: 'alex.dev@example.com',
      role: 'Employee',
      department_name: depFrontend.name,
      position_name: posSeniorDev.name,
      department_id: depFrontend.id,
      position_id: posSeniorDev.id,
      profile: {
        create: {
          first_name: 'Алексей',
          last_name: 'Смирнов',
          full_name: 'Алексей Смирнов',
          avatar: 'https://i.pravatar.cc/150?u=alex',
          skills: {
            create: [
              { name: 'React', categoryId: catWeb.id, mastery: 'Master' },
              { name: 'TypeScript', categoryId: catWeb.id, mastery: 'Expert' },
            ],
          },
          languages: {
            create: [
              { name: 'English', proficiency: 'C1' },
              { name: 'Russian', proficiency: 'Native' },
            ],
          },
        },
      },
      cvs: {
        create: [
          {
            name: 'Frontend Developer CV 2026',
            education: 'МГТУ им. Н.Э. Баумана (Информатика)',
            description: 'Опытный фронтенд-разработчик с глубоким знанием React и GraphQL.',
            skills: {
              create: [
                { name: 'React', categoryId: catWeb.id, mastery: 'Master' },
                { name: 'TypeScript', categoryId: catWeb.id, mastery: 'Expert' },
              ],
            },
            languages: {
              create: [
                { name: 'English', proficiency: 'C1' },
              ],
            },
            projects: {
              create: [
                {
                  name: projectEcom.name,
                  internal_name: projectEcom.internal_name,
                  domain: projectEcom.domain,
                  start_date: projectEcom.start_date,
                  end_date: projectEcom.end_date,
                  description: projectEcom.description,
                  project_id: projectEcom.id,
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('✅ База данных успешно заполнена тестовыми данными!');
}

main()
  .catch((e) => {
    console.error('❌ Ошибка сидинга:', e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });