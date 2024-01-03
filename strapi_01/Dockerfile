FROM node

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]