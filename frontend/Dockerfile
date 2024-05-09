FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN

COPY . .

ENV HOST=0.0.0.0

CMD ["npm", "run", "build"]