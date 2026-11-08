# 固始县永和高级中学 · 学校信息站

非官方、个人学习用途的学校资料整理站。Astro 静态站，7 个页面 + 404 页，桌面端与移动端适配。

- 线上：<https://永和高中.love>（页面 canonical/og:url/页脚均展示中文域名；punycode `xn--fiq18monwfu6b.love` 仅用于 DNS 与证书）
- 资料文档：上层目录 `../research/`（学校档案、抖音内容采集）
- 参考图：`../assets/reference/`

## 开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 部署

推送到 `main` 即触发 GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages。

- 自定义域名：`xn--fiq18monwfu6b.love`（`public/CNAME`，punycode 为 DNS 必需形式）
- `Base.astro` 中 canonical / og:url 用中文域名常量输出，`astro.config.mjs` 的 `site` 与 `public/sitemap.xml` 仍用 punycode 保证技术正确
- 页脚「复制本站地址」按钮复制 `https://永和高中.love`
- 页面：`/` `/about/` `/campus/` `/news/` `/honors/` `/admissions/` `/contact/` `/404.html`
- SEO：`public/robots.txt`、`public/sitemap.xml`

## 内容边界

- 只使用公开可查资料；2026 招生简章因微信验证码未取得具体数字，招生页仅 FAQ 与到校信息。
- 荣誉榜的 2026 录取名单整理自抖音公开的学校「录取速递（一）（三）」喜报画面，仅节选 12 位同学；视频结尾的复习生招生咨询电话未在站点公开；如涉隐私请联系删除。
- 抖音内容仅采集画面，无音频转写；视频描述基于实际采样画面与页面文案。
- 校门、知理楼、知行楼、运动场、春日花枝、校名题字、走廊均为学校师生提供的实拍照片（用户提供）；首页航拍照片（`aerial-gate.jpg`、`aerial-campus.jpg`）截取自公开抖音视频（@printf，2026-07-03），仅用于本站展示。另 1 张食堂用餐照片（`canteen-dining.jpg`）截取自学校官方抖音视频（@永和高中，2026-06-10）。首页首屏为 8 张实拍轮播（`/photos/hero-gate.jpg`、`aerial-gate.jpg`、`zhili.jpg`、`corridor.jpg`、`track.jpg`、`aerial-campus.jpg`、`canteen-dining.jpg`、`blossom.jpg`），自动切换 + 左右箭头 + 圆点切换 + 手机左右滑动 + 键盘方向键，`prefers-reduced-motion` 时停止自动播放。
- 本站不冒充学校官方站点。

