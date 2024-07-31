FROM node:18 AS build-stage
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

# Nginx ile Ters Proxy Aşaması
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/.next /usr/share/nginx/html/.next
COPY --from=build-stage /app/public /usr/share/nginx/html/public

CMD ["nginx", "-g", "daemon off;"]
