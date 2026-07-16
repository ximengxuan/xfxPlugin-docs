// .vitepress/config.mts
import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: false,
  vpHome: true,
  loading: false, // 启用 Loading 动画，为 false 则关闭 Loading 动画
  sidebarTrigger: false,
  author: {
    name: "飞云",
    link: "http://feiyunjs.com", // 点击作者名称后跳转的链接
  },
  vitePlugins: {
    autoFrontmatter: true,
    permalink: true,   // 实现永久链接
    permalinkOption: {
      ignoreList: [""], // 忽略的目录，支持正则表达式
    },
    sidebarOption: {
      ignoreList: ["assets"], // 生成侧边栏时，忽略的文件/文件夹列表，支持正则表达式
    },
  },
  
});

// VitePress 配置
export default defineConfig({
  extends: teekConfig,   // 将主题配置合并到 VitePress 配置里
  // GitHub Pages 部署基路径，仓库名为 xfxPlugin-docs
  // 如果使用自定义域名则改为 '/'
  base: '/xfxPlugin-docs/',
  title: "xfxPlugin 小飞侠插件",
  description: "安卓脚本开发增强接口",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Api', link: '/pages/about' },
      { text: 'YOLO', link: '/pages/yolo' },
      { text: 'floatLog', link: '/pages/floatLog' },
      { text: 'MQTT', link: '/pages/mqtt' },
      { text: 'FFMPEG', link: '/pages/ffmpeg' },
      { text: 'TTS', link: '/pages/tts' },
      // { text: 'SQLITE', link: '/pages/sqlite' },
      { text: 'MMKV', link: '/pages/mmkv' },
      { text: 'MYSQL', link: '/pages/mysql' },
    ],
    search: {
      provider: 'local'   // 开启本地搜索（显示搜索框）
    }
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    lineNumbers: true,  // 启用代码区域行号
  },
});