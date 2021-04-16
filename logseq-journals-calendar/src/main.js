import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VCalendar from 'v-calendar'

/**
 * user model
 */
function createModel () {
  return {
    openCalendar () {
      logseq.showMainUI()
    },
  }
}

/**
 * app entry
 */
function main () {
  logseq.setMainUIInlineStyle({
    position: 'fixed',
    zIndex: 11,
  })

  const key = logseq.baseInfo.id

  logseq.provideStyle(`
    div[data-injected-ui=open-calendar-${key}] {
      display: flex;
      align-items: center;
      opacity: .55;
      font-weight: 500;
      position: relative;
      top: 0px;
      padding: 0 5px;
    }
    
    div[data-injected-ui=open-calendar-${key}]:hover {
      opacity: .9;
    }
  `)

  // external btns
  logseq.provideUI({
    key: 'open-calendar',
    path: '#search',
    template: `
      <a data-on-click="openCalendar" onclick="alert('abc')" style="opacity: .6; display: inline-flex; padding-left: 3px;">
        <i class="iconfont icon-Calendaralt2"></i>
      </a>
      <iframe src="https://google.com"></iframe>
    `,
  })

  // main UI
  createApp(App).use(VCalendar, {}).mount('#app')
}

// bootstrap
logseq.ready(createModel()).then(main)