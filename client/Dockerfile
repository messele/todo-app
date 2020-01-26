FROM node:12.2.0-alpine

WORKDIR /app
COPY package.json /app/package.json
COPY src /app/src
COPY public /app/public
ENV PATH /app/node_modules/./bin:$PATH

RUN npm install --silent

EXPOSE 3000
# Start app
ENTRYPOINT ["npm","start"]


