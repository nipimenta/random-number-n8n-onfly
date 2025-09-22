FROM node:22-alpine AS builder

WORKDIR /build

RUN mkdir credentials

COPY package.json package-lock.json ./
RUN npm ci

COPY gulpfile.js tsconfig.json ./
COPY nodes ./nodes
RUN npm run build

FROM docker.n8n.io/n8nio/n8n

COPY --from=builder /build/dist /home/node/.n8n/custom