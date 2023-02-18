<p align="center">
  <a href="">
    <img width="88" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>
<h1 align="center">React Admin 🔥 (under development)</h1>

<div align="center">Common template for the middle and background management system</div>

English | [简体中文](./README.cn.md)

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

[Online presentation](http://42.192.151.130)

### 一、Introduce 📖

🚀🚀🚀 React Admin, a background management framework based on React18, Electron (optional), Vite4, React-Router v6, Ant-Design5, Mobx6&&AHooks, React-Hooks, TypeScript.

### 二、Git Warehouse address (Welcome Star⭐)

- Gitee：https://gitee.com/zard1967/react-admin

- GitHub：https://github.com/zard999/react-admin

### 三、🔨🔨🔨 Project function

- 🚀 Use the latest technology to find development：React18、ELectron、React-Router v6、Mobx6、AHooks、TypeScript、Vite4
- 🚀 Vite4 was adopted as the project development and packaging tool (Gzip packaging, cross-domain proxy, packaging preview tool...).
- 🚀 The entire project integrates TypeScript (totally for learning 🤣)
- 🚀 Use mobx for state management, integrate Mox-react development, and use Mox-persist -store to implement persistent storage
- 🚀 Use TypeScript to wrap Axios twice (global error interception, common request encapsulation, global request Loading, unrepeat requests...).
- 🚀 Antd component size switch, dark and gray and weak mode
- 🚀 Route permission interception (404 page) and page button permission configuration using custom high - level components
- 🚀 Supports React-Router v6 route lazy loading configuration, menu accordion mode, unlimited menu, multi-tab, and breadcrumb navigation
- 🚀 Using Prettier to format code uniformly, integrating Eslint and Stylelint code validation specifications (project specifications configuration)
- 🚀 Commit information using husky, lint-staged, commitlint, commitizen, cz-git specifications (project specifications configuration)

### 四、📦 Fast start

- **Install：**

```sh
cd react-admin

yarn || npm install

yarn dev || npm run dev

# npm install fails to install nodejs. Upgrade nodejs to a higher level than 16, or try the following command：
npm install --registry=https://registry.npm.taobao.org
```

- **Build：**

```text
# Development environment
yarn build:dev

# Test environment
yarn build:test

# Production environment
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
# eslint Detection code
yarn lint:eslint

# prettier Formatting code
yarn lint:prettier

# stylelint Formatting style
yarn lint:stylelint
```

- **commit：**

```text
# Commit code (the lint: Lint-staged command automatically executes)
yarn commit
```

### 五、📦 docker and Docker-compose deployment

1. docker build -t react-admin:v1 .

> mac m1 is packaged and running：docker buildx build -t react-admin:v1 --platform linux/amd64 .
> You may need to add a prefix **DOCKER_BUILDKIT=0**

2. docker run -d -p 80:80 --name react-admin react-admin:v1

3. docker-compose is deployed together in another project
   > https://github.com/zard999/cost-egg
