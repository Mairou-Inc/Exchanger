FROM nginx

# CMD ["npm", "run", "build"]

COPY dist/ /usr/share/nginx/html


RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf