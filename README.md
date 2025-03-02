# Turborepo Tailwind Template

[![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build)
[![Biome](https://img.shields.io/badge/Biome-60A5FA.svg?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev)

A modern, high-performance monorepo template powered by Bun and Turborepo, featuring shared Tailwind configuration for consistent styling across all applications.

## ✨ Features

- ⚡️ **Bun** - Ultra-fast package management and runtime
- 📦 **Turborepo** - Efficient monorepo management with intelligent build caching
- 🎨 **Shared Tailwind** - Consistent styling across all applications
- 🔧 **Biome** - Modern linting and formatting for consistent code style
- 🚀 **Optimized Build System** - Advanced caching for faster builds
- 📱 **Type Safety** - Full TypeScript support across all packages

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shutock/twurbun.git
cd twurbun
```

2. Install dependencies:
```bash
bun install
```

3. Start development server:
```bash
bun dev
```

## 📁 Project Structure

```
├── apps/             # Application packages
│   ├── _template/    # Template app with basic setup
│   └── root/         # Root application
├── configs/          # Shared configurations
│   ├── tailwind/     # Shared Tailwind config
│   └── typescript/   # Shared TypeScript config
├── packages/         # Shared packages
│   ├── ui/           # Shared UI components
│   └── utils/        # Shared utilities
├── .npmrc            # NPM configuration
├── biome.json        # Biome configuration
└── turbo.json        # Turborepo configuration
```

## 🛠️ Available Commands

- `bun dev` - Start development servers for all applications
- `bun run build` - Build all applications and packages

## 🔧 Using the Template

1. **Configure Tailwind**
   - Modify shared styles in `configs/tailwind/styles.css`
   - Customize theme in `tailwind.config.ts`

2. **Add New Applications**
   - Copy `apps/_template/` to create new apps
   - Update application-specific configurations

3. **Extend Shared Packages**
   - Add reusable components to `packages/ui/`
   - Create utility functions in `packages/utils/`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Bun](https://bun.sh), [Turborepo](https://turbo.build), and [Tailwind CSS](https://tailwindcss.com).