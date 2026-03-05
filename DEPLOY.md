# 🦞 游戏门户部署指南

## 方式一：Vercel（推荐，最快）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 进入项目目录
cd game-pipeline

# 3. 部署（按提示操作）
vercel
```

或直接拖拽 `public` 文件夹到 https://vercel.com/drop

---

## 方式二：GitHub Pages

```bash
# 1. 创建 GitHub 仓库
# 2. 推送代码
git init
git add .
git commit -m "feat: 5款HTML5游戏"
git branch -M main
git remote add origin https://github.com/你的用户名/game-pipeline.git
git push -u origin main

# 3. 启用 Pages
# 仓库 → Settings → Pages → Source: Deploy from main branch
```

---

## 方式三：Cloudflare Pages（免费快速）

1. 访问 https://pages.cloudflare.com
2. 连接 GitHub
3. 选择仓库
4. 构建命令留空
5. 输出目录: `public`

---

## 当前状态

- ✅ 5款游戏已完成
- ✅ 移动端适配
- ✅ 纯静态，无需服务器
