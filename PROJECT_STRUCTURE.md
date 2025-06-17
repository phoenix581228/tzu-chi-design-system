# 專案結構

```
tzu-chi-design-system/
├── src/                           # 源碼目錄
│   ├── css/                       # CSS 源檔案
│   │   ├── base/                  # 基礎樣式
│   │   ├── components/            # 元件樣式
│   │   ├── utilities/             # 工具類別
│   │   └── variables/             # CSS 變數
│   └── js/                        # JavaScript (未來擴充)
│
├── dist/                          # 編譯後的檔案
│   ├── tzu-chi-design-system.css
│   └── tzu-chi-design-system.min.css
│
├── docs/                          # 文檔
│   ├── getting-started.md         # 快速開始
│   ├── components.md              # 元件文檔
│   ├── utilities.md               # 工具類別文檔
│   └── customization.md           # 客製化指南
│
├── examples/                      # 使用範例
│   ├── basic/                     # 基礎範例
│   ├── templates/                 # 頁面模板
│   └── integrations/              # 框架整合範例
│
├── tests/                         # 測試檔案
│   ├── unit/                      # 單元測試
│   └── visual/                    # 視覺測試
│
├── scripts/                       # 建構腳本
│   ├── build.js                   # 建構腳本
│   ├── watch.js                   # 開發監聽
│   └── release.js                 # 發布腳本
│
├── .github/                       # GitHub 設定
│   ├── workflows/                 # GitHub Actions
│   └── ISSUE_TEMPLATE/            # Issue 模板
│
├── index.html                     # 文檔首頁
├── package.json                   # NPM 設定
├── README.md                      # 專案說明
├── CHANGELOG.md                   # 更新日誌
├── LICENSE                        # 授權文件
├── .gitignore                     # Git 忽略設定
└── _config.yml                    # GitHub Pages 設定
```

## 主要檔案說明

### 核心檔案
- `tzu-chi-design-system.css` - 開發版本（含註解）
- `tzu-chi-design-system.min.css` - 生產版本（壓縮）

### 文檔檔案
- `index.html` - 主要文檔和展示頁面
- `quick-start.html` - 快速開始指南
- `templates.html` - 模板展示頁面
- `cdn-usage.html` - CDN 使用指南

### 設定檔案
- `package.json` - NPM 套件設定
- `_config.yml` - GitHub Pages 設定
- `netlify.toml` - Netlify 部署設定

### 部署相關
- `deploy.sh` - 部署腳本
- `deploy-guide.md` - 部署指南