# designAgent 公开展示页

这是纯静态网页：不含后端、账号凭据、API Key、飞书连接或访客上传功能。可直接部署到 GitHub Pages。

## 本地预览

直接双击 `index.html` 即可浏览；或使用任意静态文件服务器打开本目录。

## 发布到 GitHub Pages

1. 在 GitHub 新建公开仓库 `design-agent`。
2. 上传本目录中的所有文件和 `assets` 文件夹（不要上传上级目录的任何配置文件）。
3. 在仓库的 **Settings → Pages** 中，选择：
   - **Source**：`Deploy from a branch`
   - **Branch**：`main` / `root`
4. 保存后等待约 1–3 分钟。
5. 页面地址为：`https://tangee-lab.github.io/design-agent/`

## 更新内容

- 修改文字：编辑 `index.html`。
- 修改样式：编辑 `styles.css`。
- 替换展示图：覆盖 `assets` 中同名文件，保持文件名不变。
- 预设互动文案：编辑 `script.js` 中的 `examples`。

## 发布前检查

- 不上传 `feishu-registration.json`、二维码、Profile、日志、密钥或用户原图。
- 本目录已经只包含公开展示所需的 5 张图片和静态网页文件。
