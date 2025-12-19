<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

// 语言配置
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' }
]

// 解析当前路径，提取版本和语言信息
const pathInfo = computed(() => {
  const path = route.path
  
  // 匹配 /v14/en/xxx 或 /v15/zh/xxx 等版本路径
  const versionMatch = path.match(/^\/(v\d+)\/(en|zh|zh-TW)(\/.*)?$/)
  if (versionMatch) {
    return {
      type: 'versioned',
      version: versionMatch[1],
      lang: versionMatch[2],
      rest: versionMatch[3] || '/'
    }
  }
  
  // 匹配 /user-cases/en/xxx 或 /brain-maps/zh/xxx 等非版本路径
  const sectionMatch = path.match(/^\/(user-cases|brain-maps)\/(en|zh|zh-TW)(\/.*)?$/)
  if (sectionMatch) {
    return {
      type: 'section',
      section: sectionMatch[1],
      lang: sectionMatch[2],
      rest: sectionMatch[3] || '/'
    }
  }
  
  return null
})

// 当前语言
const currentLang = computed(() => {
  return pathInfo.value?.lang || 'en'
})

// 生成切换语言的链接
function getLangLink(langCode: string): string {
  const info = pathInfo.value
  if (!info) return '/'
  
  if (info.type === 'versioned') {
    return `/${info.version}/${langCode}${info.rest}`
  } else if (info.type === 'section') {
    return `/${info.section}/${langCode}${info.rest}`
  }
  
  return '/'
}

// 是否显示语言切换器（仅在特定路径下显示）
const showSwitcher = computed(() => {
  return pathInfo.value !== null
})
</script>

<template>
  <div v-if="showSwitcher" class="lang-switcher">
    <div class="lang-dropdown">
      <button class="lang-btn">
        <span class="lang-icon">🌐</span>
        <span class="lang-current">{{ languages.find(l => l.code === currentLang)?.label }}</span>
        <span class="lang-arrow">▾</span>
      </button>
      <div class="lang-menu">
        <a
          v-for="lang in languages"
          :key="lang.code"
          :href="getLangLink(lang.code)"
          :class="['lang-item', { active: lang.code === currentLang }]"
        >
          {{ lang.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.lang-dropdown {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.lang-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.lang-icon {
  font-size: 16px;
}

.lang-arrow {
  font-size: 10px;
  opacity: 0.6;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 120px;
  padding: 4px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: all 0.2s ease;
  z-index: 100;
}

.lang-dropdown:hover .lang-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-item {
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s ease;
}

.lang-item:hover {
  background: var(--vp-c-bg-soft);
}

.lang-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
</style>

