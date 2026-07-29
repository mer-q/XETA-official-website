# 🚗 字特智能科技（XETA Intelligence）官方网站

[![Astro](https://img.shields.io/badge/Astro-5.0+-orange.svg)](https://astro.build/)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()

字特智能科技（上海）有限公司（XETA Intelligence Technology Co., Ltd.）官方企业网站源码。基于 Astro 静态化引擎重构，实现高清晰度、响应式、中英文双语支持及极致的页面加载性能。

---

## 🌟 核心业务与产品页面

本官网涵盖以下核心业务模块及专属产品子页面：

1. **📱 AI 赋能的智能座舱软件开发服务** (`/ai-cockpit/`)
   - ⚡ 精英团队 × AI 工具链 = 大团队产出（人效比提升 6 倍以上）
   - 包含插电混动 PHEV 车机改版实战案例、全流程 AI 软件交付流水线及需求-代码自动化工具链展示。
2. **🛡️ 欧洲车联网合规与安全运营一站式平台** (`/eu-compliance/`)
   - 🇪🇺 懂中欧 · 懂法律 · 懂技术 — 中国车企出海欧盟合规总集成商
   - 全面覆盖 UN R155/R156、GDPR、EU Data Act 及 EU AI Act 规制，提供 P1/P2/P3 三大套餐与 Managed VSOC 安全运营托管。
3. **🌐 中英文双语支持**
   - 🇨🇳 简体中文页面 (`/`, `/核心产品/`, `/数智化服务/`, `/资讯中心/`, `/关于我们/`)
   - 🇬🇧 英文版页面 (`/en/`, `/en/xeta-products/`, `/en/xeta-services/`, `/en/about-us/`)

---

## 🛠️ 技术栈 (Technology Stack)

* **核心框架**: [Astro 5.x](https://astro.build/)（静态生成 SSG）
* **结构语言**: Semantic HTML5 / JSX Syntax
* **样式系统**: Vanilla CSS / Flexbox / CSS Grid / Responsive Design
* **多语言支持**: Custom Native i18n Switcher
* **资源优化**: Native Image Optimization & Asset Bundling

---

## 📂 项目目录结构 (Directory Structure)

```text
XETA-official-website/
├── public/                     # 静态资源 (图片、字体、媒体库)
│   ├── images/                 # 新版高分辨率科技配图
│   │   └── products/           # 智能座舱 & 欧洲合规产品专属视效图
│   ├── uploads/                # Logo 与图标资源
│   └── wp-content/             # 历史主题静态库 (animate.css, style.css)
├── src/                        # 源代码目录
│   ├── components/             # 可复用 UI 组件 (Header, Footer, etc.)
│   ├── layouts/                # 页面布局模版
│   ├── pages/                  # 静态路由页面
│   │   ├── ai-cockpit/         # AI 座舱软件开发服务 (中文)
│   │   ├── eu-compliance/      # 欧洲车联网合规平台 (中文)
│   │   ├── en/                 # 英文版路由全集
│   │   │   ├── ai-cockpit/     # AI Cockpit Services (English)
│   │   │   └── eu-compliance/  # EU Compliance Platform (English)
│   │   └── index.astro         # 官网中文首页
│   └── styles/                 # 全局 CSS 样式表
├── AGENTS.md                   # AI 辅助开发与工作流规则说明
├── astro.config.mjs            # Astro 配置文件
└── package.json                # 项目依赖与运行脚本
```

---

## 🚀 本地开发与构建 (Getting Started)

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发服务器
```bash
npm run dev
```
启动后在浏览器中访问：`http://localhost:4321`

### 3. 构建生产环境静态网站
```bash
npx astro build
```
构建产物将自动生成于根目录的 `./dist/` 文件夹中。

### 4. 本地预览构建产物
```bash
npm run preview
```

---

## 🔒 维护规则与部署指引

根据项目规范（详见 `AGENTS.md`）：
- 每次针对官网主导航栏修改或推送代码至 GitHub 远程 `main` 分支前，须先进行本地构建验证，并获得确认后再执行 `git push`。

---

© 2025–2026 字特智能科技（上海）有限公司 版权所有 | 版权归 XETA Intelligence 所有。
