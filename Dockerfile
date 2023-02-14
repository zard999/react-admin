FROM nginx:1.23.2-alpine
FROM node:16.13.0-alpine3.14

# 下载依赖
RUN npm i

# 执行构建
RUN npm run build

# 复制dist到容器的nginx的html目录
COPY dist /usr/share/nginx/html
# 复制nginx配置文件到容器的nginx的conf.d目录
COPY nginx /etc/nginx/conf.d
