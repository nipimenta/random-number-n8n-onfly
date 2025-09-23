FROM node:22-alpine

WORKDIR /build

COPY build.sh .
COPY package.json package-lock.json ./
RUN npm ci

COPY gulpfile.js tsconfig.json ./
COPY nodes ./nodes

CMD [ "sh", "./build.sh" ]