# 🤖 AGENTS.md — 字特智能官网 AI 维护与协同开发规则

本文件为 AI 助手在维护 `XETA-official-website` 仓库时的**强制性行为准则与项目规则**。

---

## 🚨 核心原则与限制 (Core Rules)

1. **二步确认原则 (Double Confirmation)**：
   - 每次对官网**主导航栏**修改、或准备将代码 **Push 到 GitHub `main` 远程分支**前，必须先在本地运行构建与预览验证，向用户汇报后，获得用户的**明确二次确认**方可执行 `git push`。
2. **像素级视觉保护 (Visual Protection)**：
   - 本项目保留了原 WP 主题调校好的 75KB 精密 CSS（`animate.css` & `global.css`）。**严禁擅自引入 Tailwind 或删除原有原生 CSS 样式库**，确保原官网视觉与动画效果 100% 不破坏。
3. **多语言双向镜像路由规则 (i18n Route Mirroring)**：
   - 任何涉及产品/服务子页面的新增与修改，必须保持中英文版本同步：
     - 中文路由：`/ai-cockpit/` (及中文别名 `/ai座舱软件开发服务/`)
     - 英文路由：`/en/ai-cockpit/`
     - 中文路由：`/eu-compliance/` (及中文别名 `/欧洲车联网合规平台/`)
     - 英文路由：`/en/eu-compliance/`

---

## 🛠️ 构建与部署验证命令 (Build & Preview)

- **本地开发服务**: `npm run dev` (端口 `http://localhost:4321`)
- **禁用 Telemetry 的构建命令**: `ASTRO_TELEMETRY_DISABLED=1 ./node_modules/.bin/astro build`
- **生产环境静态输出**: `./dist/`

---

## 📂 静态资源放置规范

- **高分辨率产品配图**: 统一存放在 `public/images/products/ai_cockpit/` 及 `public/images/products/compliance/`。
- **杜绝冗余文件**: 严禁向 `public/uploads/` 添加 WP 多余的低清裁切缩略图。

---

© 2025–2026 字特智能科技（上海）有限公司
