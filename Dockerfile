FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./
COPY sidekick-monorepo-internship-backend-0.0.1.tgz ./

RUN npm ci

COPY . .

RUN npx msw init public --save

ENV NODE_ENV=production
ENV NEXT_PUBLIC_SITE_URL=https://mavylow.github.io/Module_10_Next
ENV NEXT_PUBLIC_BASE_PATH=/Module_10_Next
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000


CMD ["npm", "start"]