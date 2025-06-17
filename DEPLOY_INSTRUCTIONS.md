# 部署說明 - 慈濟設計系統 v1.0.1

## 快速部署

1. **進入專案目錄**
   ```bash
   cd /Users/chih-hungtseng/projects/tzu-chi-design-system
   ```

2. **執行部署腳本**
   ```bash
   ./deploy-v1.0.1.sh
   ```

## 手動部署步驟

如果自動腳本無法執行，請按照以下步驟手動部署：

### 1. 初始化 Git（如果尚未初始化）
```bash
git init
git remote add origin https://github.com/phoenix581228/tzu-chi-design-system.git
```

### 2. 更新主頁面
```bash
cp index-v1.0.1.html index.html
```

### 3. 提交所有更改
```bash
git add -A
git commit -m "Release v1.0.1: CIS Dark Mode Design System"
```

### 4. 推送到 GitHub
```bash
git push -u origin main --force
```

### 5. 確認 GitHub Pages 設定
- 前往：https://github.com/phoenix581228/tzu-chi-design-system/settings/pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

## 驗證部署

部署完成後，請訪問以下網址確認更新：
- https://phoenix581228.github.io/tzu-chi-design-system/

## 版本資訊

- **版本號**: v1.0.1
- **發布日期**: 2025-06-18
- **主要更新**: CIS Dark Mode 設計系統
- **新增功能**:
  - 完整的元件庫
  - 響應式網格系統
  - 模組化 CSS 架構
  - SDGS 色彩支援

## 檔案結構

```
tzu-chi-design-system/
├── index.html (v1.0.1 主頁面)
├── index-v1.0.html (v1.0 備份)
├── index-v1.0.1.html (v1.0.1 原始檔)
├── tzu-chi-design-system-v1.0.1.css (主 CSS)
├── themes/
│   ├── variables.css
│   └── dark-theme.css
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── grid-system.css
└── components/
    ├── buttons.css
    ├── cards.css
    ├── badges.css
    ├── dropdowns.css
    ├── search-bar.css
    └── forms/
        ├── text-input.css
        └── radio-checkbox.css
```

## 注意事項

1. 確保有 GitHub 儲存庫的推送權限
2. 如果是首次部署，可能需要等待幾分鐘讓 GitHub Pages 生效
3. 清除瀏覽器快取以查看最新更新