FROM node:8.12.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 
RUN npm install http-server
RUN npm install -g parcel-bundler
COPY . .
CMD ["npm", "run", "dev"]
