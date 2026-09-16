import process from 'node:process';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('⏳ Очистка старых данных...');
  
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

  console.log('🌱 Наполнение справочников (Отделы, Должности, Языки, Категории)...');

  // 1. Создаем 20 Отделов
  const departmentsData = Array.from({ length: 20 }, (_, i) => ({
    name: `Department ${i + 1} (${['Frontend', 'Backend', 'DevOps', 'QA', 'Mobile', 'Design', 'Analytics', 'HR'][i % 8]})`,
  }));
  await prisma.department.createMany({ data: departmentsData });
  const departments = await prisma.department.findMany();

  // 2. Создаем 20 Должностей
  const positionsData = [
    'Junior Frontend Dev', 'Middle Frontend Dev', 'Senior Frontend Dev', 'Lead Frontend Dev',
    'Junior Backend Dev', 'Middle Backend Dev', 'Senior Backend Dev', 'Lead Backend Dev',
    'DevOps Engineer', 'Senior DevOps', 'QA Engineer', 'Lead QA Automation',
    'UI/UX Designer', 'Lead Designer', 'Data Analyst', 'Product Owner',
    'Scrum Master', 'HR Business Partner', 'System Architect', 'CTO'
  ].map((name) => ({ name }));
  await prisma.position.createMany({ data: positionsData });
  const positions = await prisma.position.findMany();

  // 3. Создаем 20 Глобальных Языков
  const languagesList = [
    { name: 'English', native_name: 'English', iso2: 'en' },
    { name: 'Spanish', native_name: 'Español', iso2: 'es' },
    { name: 'German', native_name: 'Deutsch', iso2: 'de' },
    { name: 'French', native_name: 'Français', iso2: 'fr' },
    { name: 'Chinese', native_name: '中文', iso2: 'zh' },
    { name: 'Japanese', native_name: '日本語', iso2: 'ja' },
    { name: 'Italian', native_name: 'Italiano', iso2: 'it' },
    { name: 'Polish', native_name: 'Polski', iso2: 'pl' },
    { name: 'Russian', native_name: 'Русский', iso2: 'ru' },
    { name: 'Portuguese', native_name: 'Português', iso2: 'pt' },
    { name: 'Dutch', native_name: 'Nederlands', iso2: 'nl' },
    { name: 'Turkish', native_name: 'Türkçe', iso2: 'tr' },
    { name: 'Korean', native_name: '한국어', iso2: 'ko' },
    { name: 'Arabic', native_name: 'العربية', iso2: 'ar' },
    { name: 'Swedish', native_name: 'Svenska', iso2: 'sv' },
    { name: 'Finnish', native_name: 'Suomi', iso2: 'fi' },
    { name: 'Czech', native_name: 'Čeština', iso2: 'cs' },
    { name: 'Greek', native_name: 'Ελληνικά', iso2: 'el' },
    { name: 'Hindi', native_name: 'हिन्दी', iso2: 'hi' },
    { name: 'Ukrainian', native_name: 'Українська', iso2: 'uk' },
  ];
  await prisma.language.createMany({ data: languagesList });

  // 4. Создаем 20 Категорий Навыков
  const categoriesData = Array.from({ length: 20 }, (_, i) => ({
    name: `Category ${i + 1} (${['Core Web', 'Backend Frameworks', 'Cloud & Infra', 'Databases', 'Testing Tools', 'Mobile Frameworks'][i % 6]})`,
    order: i + 1,
  }));
  await prisma.skillCategory.createMany({ data: categoriesData });
  const categories = await prisma.skillCategory.findMany();

  // 5. Создаем 25 Глобальных Навыков
  const skillsList = [
    'React', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'Docker', 'Kubernetes',
    'Vue.js', 'Angular', 'Next.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Python',
    'Django', 'Go', 'Rust', 'Flutter', 'Swift', 'Kotlin', 'TailwindCSS', 'Jest',
    'Cypress', 'AWS', 'CI/CD'
  ].map((name, index) => ({
    name,
    category_id: categories[index % categories.length].id,
  }));
  await prisma.skill.createMany({ data: skillsList });

  // 6. Создаем 20 Проектов
  const projectsData = Array.from({ length: 20 }, (_, i) => ({
    name: `Project Alpha ${i + 1}`,
    internal_name: `proj_alpha_${i + 1}`,
    domain: ['FinTech', 'E-Commerce', 'Healthcare', 'EdTech', 'Logistics'][i % 5],
    start_date: `202${i % 4 + 1}-01-15`,
    end_date: `202${i % 4 + 2}-06-30`,
    description: `Масштабный корпоративный проект №${i + 1} для оптимизации бизнес-процессов.`,
  }));
  await prisma.project.createMany({ data: projectsData });
  const projects = await prisma.project.findMany();

  console.log('👤 Генерация 25 Пользователей, Профилей и Резюме...');

  const firstNames = ['Алексей', 'Мария', 'Дмитрий', 'Елена', 'Иван', 'Ольга', 'Сергей', 'Анна', 'Александр', 'Ирина'];
  const lastNames = ['Смирнов', 'Иванов', 'Кузнецов', 'Попов', 'Соколов', 'Лебедев', 'Козлов', 'Новиков', 'Морозов', 'Петров'];
  const masteries = ['Novice', 'Advanced', 'Competent', 'Expert', 'Master'];
  const proficiencies = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Native'];

  // 7. Создаем 25 Пользователей с Profile и CVs
  for (let i = 1; i <= 25; i++) {
    const fn = firstNames[i % firstNames.length];
    const ln = lastNames[i % lastNames.length];
    const dep = departments[i % departments.length];
    const pos = positions[i % positions.length];

    await prisma.user.create({
      data: {
        email: `user${i}@company.com`,
        role: i === 1 ? 'Admin' : 'Employee',
        department_name: dep.name,
        position_name: pos.name,
        department_id: dep.id,
        position_id: pos.id,
        profile: {
          create: {
            first_name: fn,
            last_name: ln,
            full_name: `${fn} ${ln}`,
            avatar: `https://i.pravatar.cc/150?u=user${i}`,
            skills: {
              create: [
                {
                  name: skillsList[(i * 2) % skillsList.length].name,
                  categoryId: categories[i % categories.length].id,
                  mastery: masteries[i % masteries.length],
                },
                {
                  name: skillsList[(i * 2 + 1) % skillsList.length].name,
                  categoryId: categories[(i + 1) % categories.length].id,
                  mastery: masteries[(i + 2) % masteries.length],
                },
              ],
            },
            languages: {
              create: [
                { name: languagesList[i % languagesList.length].name, proficiency: proficiencies[i % proficiencies.length] },
                { name: 'English', proficiency: proficiencies[(i + 3) % proficiencies.length] },
              ],
            },
          },
        },
        cvs: {
          create: [
            {
              name: `CV ${pos.name} - ${fn} ${ln}`,
              education: `Высшее техническое университет №${(i % 5) + 1}`,
              description: `Профессиональное резюме специалиста на позицию ${pos.name}.`,
              skills: {
                create: [
                  {
                    name: skillsList[(i * 2) % skillsList.length].name,
                    categoryId: categories[i % categories.length].id,
                    mastery: masteries[i % masteries.length],
                  },
                ],
              },
              languages: {
                create: [
                  { name: languagesList[i % languagesList.length].name, proficiency: proficiencies[i % proficiencies.length] },
                ],
              },
              projects: {
                create: [
                  {
                    name: projects[i % projects.length].name,
                    internal_name: projects[i % projects.length].internal_name,
                    domain: projects[i % projects.length].domain,
                    start_date: projects[i % projects.length].start_date,
                    end_date: projects[i % projects.length].end_date,
                    description: projects[i % projects.length].description,
                    project_id: projects[i % projects.length].id,
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }

  console.log('✅ Успешно заполнено: 25 пользователей, 25 профилей, 25 CV, 20 отделов, 20 должностей, 20 языков, 25 навыков и 20 проектов!');
}

main()
  .catch((e) => {
    console.error('❌ Ошибка сидинга:', e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });