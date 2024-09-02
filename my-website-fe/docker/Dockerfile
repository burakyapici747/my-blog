# Build stage
FROM node:18.17.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18.17.0-alpine
WORKDIR /app
COPY --from=builder /app/app/next.config.js ./app/next.config.js
COPY --from=builder /app/app/public ./app/public
COPY --from=builder /app/app/.next ./.next
COPY --from=builder /app/app/node_modules ./app/node_modules
COPY --from=builder /app/app/package.json ./package.json
COPY --from=builder /app/app/data ./data
COPY --from=builder /app/app ./app
# Test deneme

EXPOSE 3000

CMD ["npm", "start"]