# 專案結構與執行原則

## 專案執行原則

### 1. CSS 檔案更新規則
- 當提供新的 CSS 檔案時，**直接替換**同類別的舊檔案
- 不保留舊版本，以新檔案為準
- 確保所有引用路徑正確更新

### 2. 版本號管理
- 每增加一個組件，版本號 **+0.0.1**
- 版本格式：v主版本.次版本.修訂版本
- 當前版本：v1.0.1
- 更新時需同步修改：
  - VERSION 檔案
  - package.json
  - 所有 HTML 中的版本標記

### 3. 組件分類原則
- **核心組件** (`components/core/`)：按鈕、卡片、徽章、狀態系統
- **表單組件** (`components/forms/`)：輸入框、選擇框、下拉選單
- **導航組件** (`components/navigation/`)：標籤頁、搜尋欄、導航列
- **佈局組件** (`components/layout/`)：網格系統、間距、層次陰影

## 目錄結構 (v1.x)

```
tzu-chi-design-system/
├── components/                    # 組件庫
│   ├── core/                     # 核心組件
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── badges.css
│   │   └── states.css
│   ├── forms/                    # 表單組件
│   │   ├── text-input.css
│   │   ├── radio-checkbox.css
│   │   └── dropdowns.css
│   ├── navigation/               # 導航組件
│   │   ├── tabs.css
│   │   └── search-bar.css
│   └── layout/                   # 佈局組件
│       ├── grid-system.css
│       └── elevation.css
│
├── themes/                       # 主題系統
│   ├── variables.css            # CSS 變數定義
│   └── dark-theme.css           # Dark Mode 主題
│
├── base/                        # 基礎樣式
│   ├── reset.css               # CSS Reset
│   ├── typography.css          # 文字排版
│   └── grid-system.css         # 網格系統
│
├── showcase/                    # 展示頁面
│   ├── components.html         # 組件展示
│   ├── templates.html          # 模板範例
│   └── playground.html         # 互動測試區
│
├── docs/                        # 文檔
│   ├── getting-started.html    # 快速開始
│   ├── installation.html       # 安裝指南
│   └── customization.html      # 客製化指南
│
├── assets/                      # 資源檔案
│   ├── js/                     # JavaScript
│   │   ├── theme-switcher.js  # 主題切換器
│   │   └── components.js       # 組件互動
│   └── icons/                  # 圖標資源
│       └── sdgs/              # SDGS 圖標
│
├── templates/                   # 頁面模板
│   ├── starter-template.html   # 入門模板
│   ├── admin-template.html     # 管理後台模板
│   └── *.zip                   # 模板壓縮包
│
├── tzu-chi-design-system-v1.0.1.css  # 主 CSS 檔案
├── tzu-chi-design-system.min.css     # 壓縮版 CSS
├── index.html                        # 首頁
├── quick-start.html                  # 快速開始頁
├── cdn-usage.html                    # CDN 使用說明
├── VERSION                           # 版本號檔案
├── package.json                      # NPM 設定
├── README.md                         # 專案說明
├── CHANGELOG.md                      # 更新日誌
├── TODO.md                          # 待辦事項
├── LICENSE                          # 授權文件
├── netlify.toml                     # Netlify 設定
└── _config.yml                      # GitHub Pages 設定
```

## 開發流程

### 新增組件流程
1. 在對應分類資料夾創建 CSS 檔案
2. 更新主 CSS 檔案的 `@import` 語句
3. 在 `showcase/components.html` 加入展示
4. 更新版本號（+0.0.1）
5. 更新 CHANGELOG.md
6. 生成壓縮版 CSS
7. 提交並推送到 GitHub

### 替換組件流程
1. 直接覆蓋對應的 CSS 檔案
2. 確認所有引用正確
3. 更新展示頁面（如有需要）
4. 更新版本號（+0.0.1）
5. 更新 CHANGELOG.md
6. 生成壓縮版 CSS
7. 提交並推送到 GitHub

## 版本規劃

### v1.x - Dark Mode 版本
- 專注於 CIS Dark Mode 設計規範
- 建立完整的組件庫
- 所有組件基於暗色主題

### v2.x - Light Mode 加入（未來）
- 新增 Light Mode 主題
- 雙主題切換功能
- 主題客製化支援

### v3.x - 完整設計系統（未來）
- 設計 tokens 系統
- 進階組件
- 框架整合支援

## 注意事項

1. **檔案命名**：使用小寫字母和連字號（kebab-case）
2. **CSS 類別**：所有類別使用 `cis-` 前綴
3. **版本控制**：每次更新都要記錄在 CHANGELOG.md
4. **相容性**：確保在主流瀏覽器中正常運作
5. **文檔同步**：組件更新時同步更新文檔

## 聯絡資訊

- 專案維護：慈濟設計系統團隊
- GitHub：https://github.com/phoenix581228/tzu-chi-design-system
- 問題回報：請使用 GitHub Issues