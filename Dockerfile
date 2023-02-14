FROM nginx:1.23.2-alpine

# 复制dist到容器的nginx的html目录
COPY dist /usr/share/nginx/html
# 复制nginx配置文件到容器的nginx的conf.d目录
COPY nginx /etc/nginx/conf.d
