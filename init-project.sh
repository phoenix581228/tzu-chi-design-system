#!/bin/bash

echo "🎨 初始化慈濟設計系統專案"
echo "=========================="

# 初始化 Git
echo "1. 初始化 Git repository..."
git init

# 創建必要的目錄結構
echo "2. 創建專案目錄結構..."
mkdir -p src/{css/{base,components,utilities,variables},js}
mkdir -p docs
mkdir -p examples/{basic,templates,integrations}
mkdir -p tests/{unit,visual}
mkdir -p scripts
mkdir -p .github/{workflows,ISSUE_TEMPLATE}

# 移動現有檔案到正確位置
echo "3. 整理檔案結構..."
# CSS 檔案已經在根目錄，這是正確的

# 添加所有檔案到 Git
echo "4. 添加檔案到 Git..."
git add .

# 創建初始提交
echo "5. 創建初始提交..."
git commit -m "Initial commit: Tzu Chi Design System v1.0.0

- 從 Local_LLM_WebUI 專案中分離出設計系統
- 建立獨立的專案結構
- 包含完整的設計系統檔案和文檔"

echo ""
echo "✅ 專案初始化完成！"
echo ""
echo "下一步："
echo "1. 在 GitHub 創建新的 repository: tzu-chi-design-system"
echo "2. 執行以下命令連接遠端："
echo "   git remote add origin https://github.com/phoenix581228/tzu-chi-design-system.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 在 GitHub repository 設定中啟用 GitHub Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: / (root)"
echo ""
echo "專案結構已準備就緒！"