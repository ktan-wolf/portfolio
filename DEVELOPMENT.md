# Development

This guide provides instructions on how to set up and run the project locally.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/ktan-wolf/portfolio your-portfolio
cd your-portfolio
```

### 2. Install dependencies

```bash
pnpm i
```

### 3. Configure Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then, update the necessary environment variables inside `.env.local`.

### 4. Run the development server

```bash
pnpm dev
```

The application should now be available at http://localhost:1408

## Building for Production

```bash
pnpm build
```

After building, start the application with:

```bash
NODE_ENV=production pnpm start
```

## Registry

This project utilizes **shadcn Registry**, which allows you to manage and distribute custom components, hooks, pages, and other files across multiple React projects. By hosting a registry, you can reuse UI components easily without manually copying code between projects.

### Registry configuration

Documentation: [shadcn Registry Docs](https://ui.shadcn.com/docs/registry)

Source files:

- `./registry.json`
- `./src/registry`

Before using the registry, run the following command to build and generate the registry JSON files:

```bash
pnpm registry:build
```

When running the `npx shadcn@latest add <registry-url>` command, the selected component will be automatically downloaded and integrated into your project.
