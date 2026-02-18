# 🛡️ GateKeeper

Automated end-to-end testing project for the **GateKeeper** web application using [Playwright](https://playwright.dev/). This project provides a robust testing framework with recorded test scenarios, multi-browser support, and enforced code quality through linting and conventional commit standards.

---

## 📦 Tech Stack & Dependencies

### Runtime

| Tool | Version | Badge |
|------|---------|-------|
| Node.js | 22.11.0 | ![Node.js](https://img.shields.io/badge/Node.js-22.11.0-339933?logo=node.js&logoColor=white) |
| npm | 10.9.0 | ![npm](https://img.shields.io/badge/npm-10.9.0-CB3837?logo=npm&logoColor=white) |

### Testing

| Module | Version | Badge |
|--------|---------|-------|
| `@playwright/test` | 1.58.2 | ![Playwright](https://img.shields.io/badge/Playwright-1.58.2-2EAD33?logo=playwright&logoColor=white) |

### Language

| Module | Version | Badge |
|--------|---------|-------|
| `typescript` | 5.9.3 | ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white) |

### Linting

| Module | Version | Badge |
|--------|---------|-------|
| `eslint` | 9.39.2 | ![ESLint](https://img.shields.io/badge/ESLint-9.39.2-4B32C3?logo=eslint&logoColor=white) |
| `@typescript-eslint/parser` | 8.56.0 | ![TS-ESLint](https://img.shields.io/badge/%40typescript--eslint%2Fparser-8.56.0-3178C6?logo=typescript&logoColor=white) |
| `@typescript-eslint/eslint-plugin` | 8.56.0 | ![TS-ESLint](https://img.shields.io/badge/%40typescript--eslint%2Feslint--plugin-8.56.0-3178C6?logo=typescript&logoColor=white) |

### Git Hooks & Commit Standards

| Module | Version | Badge |
|--------|---------|-------|
| `husky` | 9.1.7 | ![Husky](https://img.shields.io/badge/Husky-9.1.7-42b983?logo=git&logoColor=white) |
| `@commitlint/cli` | 20.4.1 | ![Commitlint](https://img.shields.io/badge/Commitlint-20.4.1-000000?logo=commitlint&logoColor=white) |
| `@commitlint/config-conventional` | 20.4.1 | ![Conventional](https://img.shields.io/badge/Conventional_Commits-20.4.1-FE5196?logo=conventionalcommits&logoColor=white) |

---

## 📁 Project Structure

```
gateKeeper/
├── .husky/
│   ├── commit-msg              # Validates commit messages (conventional commits)
│   ├── pre-commit              # Runs ESLint before each commit
│   └── pre-push                # Validates branch naming convention
├── tests/
│   ├── example.spec.ts         # Sample test
│   ├── fixtures/
│   │   └── base.ts             # Custom Playwright fixtures
│   └── pages/
│       ├── home.page.ts        # Page Object Model — Homepage
│       └── gateKeeper.ts       # Recorded test — GateKeeper order flow
├── commitlint.config.ts        # Commitlint rules
├── eslint.config.mjs           # ESLint configuration (flat config)
├── playwright.config.ts        # Playwright test configuration
├── tsconfig.json               # TypeScript compiler options
└── package.json                # Project metadata and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 22.x
- **npm** >= 10.x

### Installation

```bash
# Clone the repository
git clone git@github.com:yuzhangoscar/gateKeeper.git
cd gateKeeper

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 🧪 Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests across all browsers |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Open Playwright UI mode for interactive testing |
| `npm run test:chromium` | Run tests on Chromium only |
| `npm run test:firefox` | Run tests on Firefox only |
| `npm run test:webkit` | Run tests on WebKit (Safari) only |
| `npm run test:debug` | Run tests in debug mode |
| `npm run report` | Open the HTML test report |

---

## 🔍 Linting

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix
```

---

## 🔒 Git Hooks

This project uses **Husky** to enforce quality standards via Git hooks:

### 1. Pre-commit — Linting
Runs ESLint on all TypeScript files in `tests/` before allowing a commit.

### 2. Commit Message — Conventional Commits
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>: <description>

# Examples:
feat: add login page tests
fix: resolve flaky navigation timeout
test: add order creation smoke test
docs: update README with setup instructions
```

**Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

### 3. Pre-push — Branch Naming Convention
Branch names must follow the pattern:

```
feature/<description>
bugfix/<description>
hotfix/<description>
release/<description>
test/<description>
chore/<description>
docs/<description>
```

- Description must use **lowercase letters**, **numbers**, and **hyphens** only.
- Examples: `feature/login-page-tests`, `bugfix/fix-flaky-timeout`, `test/order-flow-e2e`

---

## 📊 Test Reports

After running tests, an HTML report is generated automatically. View it with:

```bash
npm run report
```

Reports are saved in the `playwright-report/` directory.

---

## 📄 License

ISC
