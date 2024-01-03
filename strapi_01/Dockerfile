FROM node

WORKDIR /app

COPY ./strapi_01/package.json /app/package.json
COPY ./strapi_01/package-lock.json /app/package-lock.json

RUN npm install

COPY ./strapi_01 /app

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]