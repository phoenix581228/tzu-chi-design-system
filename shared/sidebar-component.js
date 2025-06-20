/**
 * 慈濟 CIS 系統 - 共用側邊欄組件
 * 統一管理所有頁面的導航結構
 */

// 側邊欄HTML結構
const sidebarHTML = `
<div class="sidebar-header">
    <img src="assets/tzu-chi-logo.svg" alt="慈濟慈善事業基金會" class="sidebar-logo">
    <div class="sidebar-title">慈濟 CIS 系統</div>
    <div class="sidebar-subtitle">v1.1.0 模塊化架構</div>
</div>

<div class="sidebar-nav">
    <div class="nav-section">
        <div class="nav-section-title">系統概覽</div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link" data-page="index">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                    首頁與使用說明
                </a>
            </li>
        </ul>
    </div>
    
    <div class="nav-section">
        <div class="nav-section-title">CI系統七部份</div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="part1-color-system.html" class="nav-link" data-page="part1-color-system">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
                    </svg>
                    Part 1 - Color System
                    <span class="nav-badge">主要</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="part2-variables.html" class="nav-link" data-page="part2-variables">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7M9 3V4H15V3H9M7 6V19H17V6H7M9 8V17H11V8H9M13 8V17H15V8H13"/>
                    </svg>
                    Part 2 - Pagination
                    <span class="nav-badge">組件</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="part3-base.html" class="nav-link" data-page="part3-base">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    Part 3 - Base Styles
                    <span class="nav-badge">基礎</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="part4-colors.html" class="nav-link" data-page="part4-colors">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                    Part 4 - Color Classes
                </a>
            </li>
            <li class="nav-item">
                <a href="part5-typography.html" class="nav-link" data-page="part5-typography">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 4v3h5.5v12h3V7H19V4z"/>
                    </svg>
                    Part 5 - Typography
                </a>
            </li>
            <li class="nav-item">
                <a href="part6-layout.html" class="nav-link" data-page="part6-layout">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
                    </svg>
                    Part 6 - Layout
                </a>
            </li>
            <li class="nav-item">
                <a href="part7-components.html" class="nav-link" data-page="part7-components">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6h-2.5l-1.5-1.5h-5L9.5 6H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                    </svg>
                    Part 7 - Components
                </a>
            </li>
        </ul>
    </div>
    
    <div class="nav-section">
        <div class="nav-section-title">資源文檔</div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="CSS_MODULES_GUIDE.md" class="nav-link" target="_blank">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    完整使用指南
                </a>
            </li>
            <li class="nav-item">
                <a href="https://github.com/phoenix581228/tzu-chi-design-system" class="nav-link" target="_blank">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.25-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    GitHub 倉庫
                </a>
            </li>
        </ul>
    </div>
</div>
`;

// 初始化側邊欄
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = sidebarHTML;
        
        // 設定當前頁面的 active 狀態
        setActiveNavLink();
    }
}

// 設定當前頁面的導航連結為 active 狀態
function setActiveNavLink() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

// 獲取當前頁面名稱
function getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    // 移除 .html 副檔名
    if (filename.endsWith('.html')) {
        return filename.slice(0, -5);
    }
    
    // 如果是根目錄或沒有檔名，返回 index
    if (!filename || filename === '/') {
        return 'index';
    }
    
    return filename;
}

// 側邊欄切換功能
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// 當頁面載入完成時初始化側邊欄
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
});

// 將 toggleSidebar 函數加到全域範圍，讓 HTML 可以呼叫
window.toggleSidebar = toggleSidebar;