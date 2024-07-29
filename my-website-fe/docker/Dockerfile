FROM node:18 AS build-stage
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Nginx ile Ters Proxy Aşaması
FROM nginx:alpine

COPY ./ngnix.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/.next /usr/share/nginx/html/.next
COPY --from=build-stage /app/public /usr/share/nginx/html/public

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
