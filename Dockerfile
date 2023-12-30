FROM node:20-alpine

WORKDIR /src
COPY package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
