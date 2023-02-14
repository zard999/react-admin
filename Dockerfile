# node镜像
FROM node:14-alpine3.12
FROM nginx:1.23.2-alpine

# 在容器中创建一个目录
RUN mkdir -p /usr/src/app

#  设置工作目录
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

# 下载依赖
RUN npm i

# 执行构建
RUN npm run build:pro

# 复制dist到容器的nginx的html目录
COPY dist /usr/share/nginx/html
# 复制nginx配置文件到容器的nginx的conf.d目录
COPY nginx /etc/nginx/conf.d
