# syntax = docker/dockerfile:1

ARG NODE_VERSION=22.21.1
FROM node:${NODE_VERSION}-slim

LABEL fly_launch_runtime="Node.js/Prisma"

WORKDIR /app
ENV NODE_ENV="production"

COPY package-lock.json package.json ./
RUN npm ci --omit=dev

COPY dist ./dist
COPY prisma ./prisma

CMD [ "npm", "run", "start" ]
