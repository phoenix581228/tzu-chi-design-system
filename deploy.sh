#!/bin/bash
# 慈濟設計系統部署腳本

echo "🎨 慈濟設計系統部署工具"
echo "========================"

# 檢查必要檔案
echo "檢查檔案完整性..."
required_files=("index.html" "tzu-chi-design-system.css" "tzu-chi-design-system.min.css" "demo.css" "README.md")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ 缺少檔案: $file"
        exit 1
    fi
done
echo "✅ 檔案檢查完成"

# 顯示部署選項
echo ""
echo "請選擇部署方式："
echo "1) 打包為 ZIP 檔案"
echo "2) 複製到指定目錄"
echo "3) 生成 Docker 部署檔案"
echo "4) 部署到 GitHub Pages"
echo "5) 部署到 Netlify"
echo "6) 發布到 npm (CDN)"
echo "7) 退出"

read -p "請輸入選項 (1-7): " choice

case $choice in
    1)
        echo "正在創建 ZIP 檔案..."
        zip -r tzu-chi-design-system.zip . -x "*.git*" "*.DS_Store" "deploy.sh"
        echo "✅ 已創建 tzu-chi-design-system.zip"
        ;;
    2)
        read -p "請輸入目標目錄路徑: " target_dir
        if [ -d "$target_dir" ]; then
            cp -r . "$target_dir/tzu-chi-design-system"
            echo "✅ 已複製到 $target_dir/tzu-chi-design-system"
        else
            echo "❌ 目錄不存在: $target_dir"
        fi
        ;;
    3)
        echo "創建 Docker 配置..."
        cat > Dockerfile << EOF
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF
        cat > docker-compose.yml << EOF
version: '3'
services:
  design-system:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
EOF
        echo "✅ 已創建 Dockerfile 和 docker-compose.yml"
        echo "使用 'docker-compose up -d' 來啟動服務"
        ;;
    4)
        echo "部署到 GitHub Pages..."
        echo ""
        echo "請確保已經："
        echo "1. 在 GitHub 創建了儲存庫"
        echo "2. 將本地代碼推送到 GitHub"
        echo "3. 在儲存庫設置中啟用 GitHub Pages"
        echo ""
        echo "部署步驟："
        echo "git add ."
        echo "git commit -m 'Deploy Tzu Chi Design System'"
        echo "git push origin main"
        echo ""
        echo "GitHub Pages URL 將會是："
        echo "https://[username].github.io/[repository-name]/"
        ;;
    5)
        echo "部署到 Netlify..."
        echo ""
        echo "方法一：拖放部署"
        echo "1. 訪問 https://app.netlify.com/drop"
        echo "2. 將此資料夾拖放到網頁上"
        echo ""
        echo "方法二：Git 集成"
        echo "1. 將代碼推送到 GitHub/GitLab/Bitbucket"
        echo "2. 在 Netlify 連接儲存庫"
        echo "3. 使用 netlify.toml 配置自動部署"
        echo ""
        echo "方法三：CLI 部署"
        echo "npm install -g netlify-cli"
        echo "netlify deploy --prod --dir=."
        ;;
    6)
        echo "發布到 npm..."
        echo ""
        # 檢查是否已登入 npm
        if ! npm whoami &> /dev/null; then
            echo "請先登入 npm："
            echo "npm login"
            echo ""
        fi
        
        echo "發布步驟："
        echo "1. 確保 package.json 版本號正確"
        echo "2. 執行 npm publish"
        echo ""
        read -p "現在發布嗎？(y/n): " publish_now
        if [ "$publish_now" = "y" ]; then
            npm publish --access public
            echo ""
            echo "✅ 發布成功！"
            echo ""
            echo "CDN 連結："
            echo "• jsDelivr: https://cdn.jsdelivr.net/npm/tzu-chi-design-system@latest/"
            echo "• unpkg: https://unpkg.com/tzu-chi-design-system@latest/"
        fi
        ;;
    7)
        echo "退出部署工具"
        exit 0
        ;;
    *)
        echo "❌ 無效的選項"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署準備完成！"