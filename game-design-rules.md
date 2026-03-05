# 游戏设计规则

## 技术标准
- 纯 HTML5/CSS3/JavaScript（无框架）
- 单文件或简单文件结构
- 移动端优先响应式设计
- 支持离线运行（Service Worker可选）

## 命名规范
- 文件夹: `game-[id]/`
- HTML: `index.html`
- CSS: `style.css` (可选，内联也可)
- JS: `game.js` (可选，内联也可)

## 游戏列表注册
每个游戏必须在 `public/js/games-list.json` 中注册：
```json
{
  "id": "game-001",
  "title": "游戏名称",
  "description": "简短描述",
  "ageRange": "3-6",
  "thumbnail": "thumbnail.png",
  "url": "games/game-001/"
}
```

## 代码规范
- 使用 const/let，禁用 var
- 使用 ES6+ 语法
- CSS 使用 Flexbox/Grid
- 图片使用 SVG 或 Data URI
- 音效使用 Web Audio API

## 性能要求
- 首屏加载 < 2秒
- 60fps 流畅运行
- 内存占用 < 100MB
