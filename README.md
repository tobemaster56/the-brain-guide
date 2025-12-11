# TheBrain Knowledgebase

> Connecting every moment of inspiration. TheBrain user-specific smart navigation.

A TheBrain 14 knowledgebase documentation site built on [VitePress](https://vitepress.dev/) to help users better understand and use TheBrain software.

English | **[简体中文](./README_zh.md)**

## Features

- 📖 **Complete User Guide** - Includes detailed instructions for using TheBrain 14 on Windows and macOS
- 🔍 **Full-Text Search** - Quickly find the content you need
- 📱 **Responsive Design** - Supports both desktop and mobile browsing
- 🌙 **Dark Mode** - Automatically adapts to system theme

## Quick Start

### Requirements

- Node.js 18+
- Package manager: [pnpm](https://pnpm.io/)

### Install Dependencies

```bash
# Using pnpm
pnpm install
```

### Local Development

```bash
# Start development server
pnpm dev
```

After starting, visit `http://localhost:5173` to view the documentation.

### Build for Production

```bash
# Build static site
pnpm build

# Preview build result
pnpm serve
# or
pnpm preview
```

## Project Structure

```
vitepress-project/
├── docs/                          # Documentation directory
│   ├── .vitepress/               # VitePress configuration
│   │   ├── config.ts             # Site configuration
│   │   └── theme/                # Theme customization
│   │       ├── index.ts          # Theme entry
│   │       └── style.css         # Custom styles
│   ├── en/                       # English documentation
│   │   └── user-guide.md         # English user guide
│   ├── zh/                       # Chinese documentation
│   │   └── user-guide.md         # Chinese user guide
│   ├── index.md                  # Homepage
│   └── thebrain14-user-guide-images/ # Guide image assets
├── .gitignore                    # Git ignore configuration
├── .markdownlint.json            # Markdown linting configuration
├── package.json                  # Project dependencies
├── pnpm-lock.yaml                # pnpm lock file
└── README.md                     # Project documentation
```

## Roadmap

- [x] Documentation site setup complete
- [ ] Split large English documents into smaller ones
- [ ] English documentation proofreading
- [ ] Complete Simplified Chinese and Traditional Chinese translations with AI assistance
- [ ] Collect and showcase interesting user cases

## Copyright

TheBrain User Guide content ©2024 TheBrain Technologies LP. All rights reserved.

TheBrain, PersonalBrain, Brain, Thought, etc. are trademarks or registered trademarks of TheBrain Technologies LP.
