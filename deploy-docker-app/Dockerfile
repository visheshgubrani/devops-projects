FROM node:latest 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

EXPOSE 4080

CMD ["npm", "run", "start"]
