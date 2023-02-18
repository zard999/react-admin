<p align="center">
  <a href="">
    <img width="88" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>
<h1 align="center">React Admin 🔥 (under development)</h1>

<div align="center">中后台管理系统通用模板</div>

简体中文 | [English](./README.md)

<div align="center">
<br />
<img alt="node" src="https://img.shields.io/badge/Node-%3E%3D16.x-green">
<img alt="antd" src="https://img.shields.io/badge/antd-v5.x-brightgreen" />
<img alt="antd" src="https://img.shields.io/badge/pro--components-^2.3.52-1890ff" />
<img alt="antd" src="https://img.shields.io/badge/react--router--rom-v6.x-brightgreen" />
<img alt="RTK" src="https://img.shields.io/badge/mobx-v6.x-brightgreen"/>
<img alt="RTK" src="https://img.shields.io/static/v1?label=&message=ahooks&color=yellow"/>
<img alt="RTK" src="https://img.shields.io/static/v1?label=&message=axios&color=informational"/>
<img alt="GitHub all releases" src="https://img.shields.io/github/downloads/strivelen/fine-admin/total">
</div>

[在线演示](http://42.192.151.130/)

### 一、介绍 📖

🚀🚀🚀 React Admin，基于 React18、Electron（可选）、Vite4、React-Router v6、Ant-Design5、Mobx6 && AHooks、React-Hooks、TypeScript 开源的一套后台管理框架。

### 二、Git 仓库地址 (欢迎 Star⭐)

- Gitee：https://gitee.com/zard1967/react-admin

- GitHub：https://github.com/zard999/react-admin

### 三、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：React18、ELectron、React-Router v6、Mobx6、AHooks、TypeScript、Vite4
- 🚀 采用 Vite4 作为项目开发、打包工具（配置了 Gzip 打包、跨域代理、打包预览工具……）
- 🚀 整个项目集成了 TypeScript （完全是为了想学习 🤣）
- 🚀 使用 Mobx 做状态管理，集成 mobx-react 开发，使用 mobx-persist-store 实现持久化存储
- 🚀 使用 TypeScript 对 Axios 整个二次封装 （全局错误拦截、常用请求封装、全局请求 Loading、取消重复请求……）
- 🚀 支持 Antd 组件大小切换、暗黑 && 灰色 && 色弱模式
- 🚀 使用 自定义高阶组件 进行路由权限拦截（404 页面）、页面按钮权限配置
- 🚀 支持 React-Router v6 路由懒加载配置、菜单手风琴模式、无限级菜单、多标签页、面包屑导航
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 四、📦 快速开始

- **Install：**

```sh
cd react-admin

yarn || npm install

yarn dev || npm run dev

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org
```

- **Build：**

```text
# 开发环境
yarn build:dev

# 测试环境
yarn build:test

# 生产环境
yarn build:pro
```

- **Build Electron：**

```text
# windows
yarn build:win32
yarn build:win64

# mac
yarn build:mac

```

- **Lint：**

```text
# eslint 检测代码
yarn lint:eslint

# prettier 格式化代码
yarn lint:prettier

# stylelint 格式化样式
yarn lint:stylelint
```

- **commit：**

```text
# 提交代码（会自动执行 lint:lint-staged 命令）
yarn commit
```

### 五、📦 docker 以及 docker-compose 部署

1. docker build -t react-admin:v1 .

> m1 打包运行：docker buildx build -t react-admin:v1 --platform linux/amd64 .
> 可能需要在加前缀 **DOCKER_BUILDKIT=0**

2. docker run -d -p 80:80 --name react-admin react-admin:v1

3. docker-compose 在另一个项目一起部署
   > https://github.com/zard999/cost-egg
