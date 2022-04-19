FROM node:14 AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.20.1

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]