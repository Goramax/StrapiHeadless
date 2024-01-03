FROM node as build-stage

WORKDIR /app

COPY ./front/package.json /app/package.json
COPY ./front/package-lock.json /app/package-lock.json

RUN npm install

COPY ./front /app

FROM nginx as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]