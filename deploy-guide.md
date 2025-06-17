# 慈濟設計系統部署指南

## 部署選項

### 選項 1：靜態網頁伺服器部署

#### Apache
1. 將整個資料夾上傳到網頁根目錄
2. 確保 `.htaccess` 設定正確（如需要）

#### Nginx
```nginx
server {
    listen 80;
    server_name design.tzu-chi.org;
    root /var/www/tzu-chi-design-system;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # 設定 CSS 快取
    location ~* \.(css)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 選項 2：CDN 部署

#### 使用 GitHub Pages
1. 創建 GitHub repository
2. 上傳所有檔案
3. 啟用 GitHub Pages
4. 訪問：`https://[username].github.io/tzu-chi-design-system/`

#### 使用 Netlify
1. 拖放資料夾到 Netlify
2. 自動部署完成
3. 獲得 HTTPS URL

#### 使用 Vercel
```bash
npm i -g vercel
vercel --prod
```

### 選項 3：NPM 套件發布

```bash
npm login
npm publish
```

使用者可以通過以下方式安裝：
```bash
npm install tzu-chi-design-system
```

## 整合到專案

### HTML 引入
```html
<!-- 從 CDN -->
<link rel="stylesheet" href="https://design.tzu-chi.org/tzu-chi-design-system.css">

<!-- 本地引入 -->
<link rel="stylesheet" href="./assets/tzu-chi-design-system.css">
```

### CSS @import
```css
@import url('https://design.tzu-chi.org/tzu-chi-design-system.css');
```

### JavaScript 模組
```javascript
import 'tzu-chi-design-system/tzu-chi-design-system.css';
```

## 檔案結構

```
tzu-chi-design-system/
├── index.html                    # 文檔和示範頁面
├── tzu-chi-design-system.css    # 核心 CSS (開發版)
├── tzu-chi-design-system.min.css # 壓縮版 CSS
├── demo.css                     # 示範頁面樣式
├── README.md                    # 使用說明
├── package.json                 # NPM 套件資訊
└── deploy-guide.md             # 部署指南
```

## 效能優化建議

1. **使用壓縮版本**
   - 生產環境使用 `.min.css`
   - 可節省約 60% 檔案大小

2. **設定快取**
   - CSS 檔案設定長期快取
   - 使用版本號管理更新

3. **CDN 加速**
   - 使用 CDN 提升載入速度
   - 啟用 Gzip/Brotli 壓縮

## 版本管理

當更新設計系統時：
1. 更新 `package.json` 版本號
2. 更新文檔中的版本資訊
3. 發布新版本到 CDN/NPM

## 支援

如有問題，請聯繫：
- Email: design@tzu-chi.org
- GitHub Issues: https://github.com/tzu-chi/design-system/issues