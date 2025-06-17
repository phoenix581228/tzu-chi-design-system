# 慈濟設計系統 (Tzu Chi Design System)

基於 Material Design Dark Theme 的企業級 UI 設計系統。

## 版本

v1.0.0

## 快速開始

### 1. 引入 CSS

```html
<link rel="stylesheet" href="path/to/tzu-chi-design-system.css">
```

### 2. 使用 CSS 變數

```css
.my-component {
  background-color: var(--tzuchi-bg-surface);
  color: var(--tzuchi-text-primary);
  border-radius: var(--tzuchi-radius-lg);
}
```

### 3. 使用預定義類別

```html
<button class="tzuchi-btn tzuchi-btn-primary">
  主要按鈕
</button>

<div class="tzuchi-card">
  <div class="tzuchi-card-body">
    卡片內容
  </div>
</div>
```

## 設計原則

### 色彩系統

- **主色調**：深藍色 (#1B2D58) - 代表慈濟的穩重與專業
- **輔助色**：青綠色 (#5DC5C4) - 象徵生命力與希望
- **深色主題**：採用 Material Design 深色主題規範，減少眼睛疲勞

### 文字層級

- 清晰的文字層級結構
- 三級文字顏色：主要、次要、輔助
- 符合 WCAG 2.1 AA 級對比度標準

### 元件設計

- 統一的圓角處理 (4px, 8px, 16px)
- 微妙的陰影效果
- 平滑的過渡動畫 (200ms)

## 核心元件

### 1. 按鈕 (Buttons)

```html
<!-- 主要按鈕 -->
<button class="tzuchi-btn tzuchi-btn-primary">主要操作</button>

<!-- 次要按鈕 -->
<button class="tzuchi-btn tzuchi-btn-secondary">次要操作</button>

<!-- 輪廓按鈕 -->
<button class="tzuchi-btn tzuchi-btn-outline">輪廓按鈕</button>

<!-- 尺寸變化 -->
<button class="tzuchi-btn tzuchi-btn-primary tzuchi-btn-sm">小按鈕</button>
<button class="tzuchi-btn tzuchi-btn-primary tzuchi-btn-lg">大按鈕</button>
```

### 2. 卡片 (Cards)

```html
<div class="tzuchi-card">
  <div class="tzuchi-card-header">
    <h3 class="tzuchi-card-title">卡片標題</h3>
    <p class="tzuchi-card-subtitle">副標題</p>
  </div>
  <div class="tzuchi-card-body">
    內容區域
  </div>
  <div class="tzuchi-card-footer">
    <button class="tzuchi-btn tzuchi-btn-primary">操作</button>
  </div>
</div>
```

### 3. 表單 (Forms)

```html
<div class="tzuchi-form-group">
  <label class="tzuchi-label">標籤</label>
  <input type="text" class="tzuchi-input" placeholder="請輸入">
  <span class="tzuchi-helper-text">輔助說明文字</span>
</div>
```

### 4. 開關 (Switches)

```html
<label class="tzuchi-switch">
  <input type="checkbox">
  <span class="tzuchi-switch-slider"></span>
</label>
```

## CSS 變數一覽

### 顏色變數

```css
--tzuchi-primary: #1B2D58;
--tzuchi-primary-light: #587291;
--tzuchi-secondary: #4C5364;
--tzuchi-accent: #5DC5C4;

--tzuchi-bg-primary: #0F1419;
--tzuchi-bg-surface: #1A1F2E;
--tzuchi-bg-elevated: #22293B;

--tzuchi-text-primary: #E7E9EA;
--tzuchi-text-secondary: #8B98A5;
--tzuchi-text-tertiary: #536471;
```

### 間距變數

```css
--tzuchi-spacing-xs: 0.25rem;
--tzuchi-spacing-sm: 0.5rem;
--tzuchi-spacing-md: 1rem;
--tzuchi-spacing-lg: 1.5rem;
--tzuchi-spacing-xl: 2rem;
```

### 圓角變數

```css
--tzuchi-radius-sm: 0.25rem;
--tzuchi-radius-md: 0.5rem;
--tzuchi-radius-lg: 1rem;
--tzuchi-radius-full: 9999px;
```

## 實用工具類

### 文字對齊
- `.tzuchi-text-left`
- `.tzuchi-text-center`
- `.tzuchi-text-right`

### 顏色
- `.tzuchi-text-primary`
- `.tzuchi-text-secondary`
- `.tzuchi-text-success`
- `.tzuchi-text-error`

### 間距
- `.tzuchi-m-{size}` - margin
- `.tzuchi-p-{size}` - padding

### 陰影
- `.tzuchi-shadow-sm`
- `.tzuchi-shadow-md`
- `.tzuchi-shadow-lg`

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 整合到專案

### React/Vue 專案

1. 將 CSS 檔案放入 `src/styles/` 目錄
2. 在主要入口檔案引入：

```javascript
import './styles/tzu-chi-design-system.css';
```

### Tailwind CSS 整合

可以在 `tailwind.config.js` 中引入變數：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        tzuchi: {
          primary: 'var(--tzuchi-primary)',
          secondary: 'var(--tzuchi-secondary)',
          // ...
        }
      }
    }
  }
}
```

## 版權與授權

© 2024 慈濟大模型專案。保留所有權利。