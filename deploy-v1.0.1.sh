#!/bin/bash

echo "🎨 慈濟設計系統 v1.0.1 部署腳本"
echo "================================"

# 初始化 Git（如果還沒有）
if [ ! -d ".git" ]; then
    echo "初始化 Git 儲存庫..."
    git init
    git remote add origin https://github.com/phoenix581228/tzu-chi-design-system.git
fi

# 確保所有檔案都被追蹤
echo "添加所有檔案..."
git add -A

# 更新 index.html 為新版本
echo "更新主頁面..."
cp index-v1.0.1.html index.html

# 創建 CHANGELOG
echo "更新 CHANGELOG..."
cat > CHANGELOG.md << EOF
# 更新日誌

## [1.0.1] - 2025-06-18

### 新增
- 完整的 CIS (慈濟大入口網) Dark Mode 設計系統
- 基於 CSS 變數的主題架構
- 響應式 12 欄網格系統
- 全新元件庫：
  - 按鈕系統（多種變體和狀態）
  - 卡片系統（支援多種佈局）
  - 徽章系統（含 SDGS 色彩）
  - 表單元件（輸入框、單選框、複選框、開關）
  - 搜尋欄（含下拉建議）
  - 下拉選單（支援多方向展開）
- 完整的文字排版系統
- CSS Reset 和基礎樣式

### 改進
- 模組化的 CSS 架構
- 更好的可維護性
- 預留 Light Mode 擴充空間

## [1.0.0] - 2025-06-17

### 初始版本
- 基礎設計系統框架
- 色彩系統
- 基本元件
EOF

# 創建版本標記檔案
echo "v1.0.1" > VERSION

# 提交更改
echo "提交更改..."
git add -A
git commit -m "Release v1.0.1: CIS Dark Mode Design System

- 完整的 Dark Mode 設計系統實作
- 基於慈濟大入口網設計規範
- 模組化 CSS 架構
- 響應式元件庫"

# 創建版本標籤
git tag -a v1.0.1 -m "Version 1.0.1: CIS Dark Mode Design System"

# 推送到 GitHub
echo "推送到 GitHub..."
git push -u origin main --force
git push --tags

echo ""
echo "✅ 部署完成！"
echo ""
echo "📎 GitHub Pages URL:"
echo "   https://phoenix581228.github.io/tzu-chi-design-system/"
echo ""
echo "📌 版本資訊:"
echo "   - 版本號：v1.0.1"
echo "   - 發布日期：2025-06-18"
echo "   - 主要更新：CIS Dark Mode 設計系統"