FROM node:12.12-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.17-alpine
LABEL maintainer="You"
COPY --from=builder /app/public /usr/share/nginx/html
EXPOSE 80
