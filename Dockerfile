FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm i yarn

COPY . . 

ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/app/public" ]

CMD ["yarn", "start"]
