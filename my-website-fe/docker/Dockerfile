# Aşama 1: Next.js uygulamasını oluşturma
FROM node:18 AS build-stage
WORKDIR /app

# Gerekli dosyaları kopyalayın ve bağımlılıkları yükleyin
COPY package.json package-lock.json ./
RUN npm install

# Uygulama dosyalarını kopyalayın ve uygulamayı oluşturun
COPY . .
RUN npm run build

# Aşama 2: Uygulamayı çalıştırma
FROM node:18-alpine AS production-stage
WORKDIR /app

# Yapı dosyalarını ve bağımlılıkları kopyalayın
COPY --from=build-stage /app /app

EXPOSE 3000

CMD ["npm", "run", "start"]
