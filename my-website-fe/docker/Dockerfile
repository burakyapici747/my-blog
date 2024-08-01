# Aşama 1: Next.js uygulamasını oluşturma
FROM node:18 AS build-stage
WORKDIR /app

# Gerekli dosyaları kopyalayın ve bağımlılıkları yükleyin
COPY package.json package-lock.json ./
RUN npm install

# Uygulama dosyalarını kopyalayın ve uygulamayı oluşturun
COPY . .
RUN npm run build

# Aşama 2: Uygulamayı Nginx ile sunma
FROM nginx:alpine AS production-stage
WORKDIR /app

# Yapı dosyalarını Nginx'e kopyalayın
COPY --from=build-stage /app/.next /usr/share/nginx/html/.next
COPY --from=build-stage /app/public /usr/share/nginx/html/public

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
