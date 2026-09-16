# Curriculum / CV Management System (Backend)

Функциональный бэкенд для системы управления резюме, профилями сотрудников, навыками и проектами. Проект построен на стеке **Node.js + TypeScript**, использует **GraphQL** в качестве API-слоя и **Prisma ORM** с базой данных **SQLite**.

---

## 🛠 Технологический стек и архитектура

| Технология / Пакет | Зачем используется |
| :--- | :--- |
| **Node.js & TypeScript** | Базовая платформа и строго типизированный язык для надежной разработки. |
| **Apollo Server 4 (`@apollo/server`)** | Автономный GraphQL-сервер с поддержкой встроенной песочницы Apollo Sandbox. |
| **GraphQL (`graphql`)** | Язык запросов API, позволяющий клиенту гибко запрашивать только необходимые данные. |
| **GraphQL Code Generator** | Кодогенератор, создающий TypeScript-типы на основе GraphQL-схемы (`schema.graphql`). |
| **Prisma ORM 5.22.0** | Объектно-реляционное отображение для удобной и безопасной работы с базой данных. |
| **SQLite (`dev.db`)** | Легковесная реляционная база данных, хранящаяся в файле и не требующая отдельной установки сервера БД. |
| **ts-node / ts-node-dev** | Утилиты для выполнения и авто-перезапуска TypeScript-кода без ручной компиляции в JS. |

---

## 📂 Структура проекта

* `prisma/schema.prisma` — Схема базы данных Prisma (модели пользователей, профилей, резюме, навыков, языков и проектов).
* `prisma/seed.ts` — Скрипт для автоматического наполнения базы тестовыми данными.
* `schema.graphql` — Главная схема GraphQL (типы, входные данные и Query-запросы).
* `src/index.ts` — Точка входа приложения, инициализация Apollo Server и резолверы Prisma.
* `src/types/graphql.ts` — Сгенерированные TypeScript-типы для GraphQL.

---

## 🚀 Инструкция по запуску

### 1. Требования
* Установленный **Node.js** (версия 18+)
* Менеджер пакетов **npm**

---

### 2. Установка зависимостей
Клонируйте репозиторий и установите пакеты: <br>
 Выполнить в терминале команду: `npm install`

---

### 3. Настройка окружения 
Убедитесь, что в корне проекта создан файл .env: `DATABASE_URL="file:./dev.db"`

---

### 4. Инициализация БД и генерация типов
 * Применить схему и создать SQLite файл dev.db <br>
 Выполнить в терминале команду `./node_modules/.bin/prisma db push`

* Сгенерировать TypeScript-типы из GraphQL-схемы <br>
Выполнить в терминале команду `npx graphql-codegen`

---

### 5. Наполнение БД данными
Выполнить в терминале команду `./node_modules/.bin/prisma db seed`

---

### 6. Запуск сервера
Выполнить в терминале команду `npm run start`

*Доступные сервисы*:

GraphQL API & Sandbox: `http://localhost:4000/`

Prisma Studio (UI для БД): ./node_modules/.bin/prisma studio (http://localhost:5555)

Пример тестового запроса (для песочницы)
```graphql
query GetUsersData {
  users {
    id
    email
    role
    department_name
    position_name
    profile {
      full_name
      skills {
        name
        mastery
      }
    }
    cvs {
      name
      projects {
        name
        description
      }
    }
  }
}
```
Пример тестовой мутации (для песочницы)
```graphql
mutation CreateNewCv($cv: CreateCvInput!) {
  createCv(cv: $cv) {
    id
    name
    education
    description
    user {
      id
      email
      profile {
        full_name
      }
    }
  }
}
```
!! Вставьте этот JSON в нижнюю панель Variables в Apollo Sandbox!!
```json
{
  "cv": {
    "userId": "3b0ed60a-0d69-4511-9c53-c7ea21a7eabf",
    "name": "Fullstack Developer CV 2026",
    "education": "БГУИР (Компьютерные системы и сети)",
    "description": "Опытный специалист по разработке клиент-серверных приложений на React, Node.js и GraphQL."
  }
}
```
### Проброс публичной ссылки для Клиента 
1. Оставьте терминал с бэкендом запущенным.
2. В новом окне терминала запустите Localtunnel:
`npx localtunnel --port 4000`
3. Вы получите публичную ссылку вида: *https://metal-pigs-type.loca.lt*
4. Укажите эту ссылку на стороне фронтенд-клиента
