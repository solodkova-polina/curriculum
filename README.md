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
Клонируйте репозиторий и установите пакеты:

```powershell
npm install


## Инициалзация базы данныхи генерация типов 

# 1. Применить схему и создать SQLite файл dev.db
./node_modules/.bin/prisma db push

# 2. Сгенерировать TypeScript-типы из GraphQL-схемы
npx graphql-codegen

## Наполнение БД данными
./node_modules/.bin/prisma db seed

-- пример тестового запроса 

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
