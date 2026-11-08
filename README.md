# 固始县永和高级中学 · 学校信息站

非官方、个人学习用途的学校资料整理站。Astro 静态站，6 个页面 + 404 页，桌面端与移动端适配。

- 线上：<https://永和高中.love>（punycode `xn--fiq18monwfu6b.love`）
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

- 自定义域名：`xn--fiq18monwfu6b.love`（`public/CNAME`）
- `astro.config.mjs` 的 `site` 决定 canonical / sitemap 使用的域名
- 页面：`/` `/about/` `/campus/` `/news/` `/admissions/` `/contact/` `/404.html`
- SEO：`public/robots.txt`、`public/sitemap.xml`

## 内容边界

- 只使用公开可查资料；2026 招生简章因微信验证码未取得具体数字，招生页仅 FAQ 与到校信息。
- 抖音内容仅采集画面，无音频转写；视频描述基于实际采样画面与页面文案。
- 校门/校园插画为示意图并在页面标注，非实拍照片。
- 本站不冒充学校官方站点。
