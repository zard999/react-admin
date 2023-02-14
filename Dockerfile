FROM nginx:1.23.2-alpine

# Copy the dist folder to the nginx folder
COPY dist /usr/share/nginx/html
COPY nginx /etc/nginx/conf.d
