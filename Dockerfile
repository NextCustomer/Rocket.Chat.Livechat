FROM nginx:stable-alpine
COPY /build/index.html /usr/share/nginx/html
COPY /build/ /usr/share/nginx/html/livechat/
COPY /nginx.conf /etc/nginx/conf.d/default.conf
