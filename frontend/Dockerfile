FROM node:13

WORKDIR /pinfo/

# Install dependencies
COPY package.json yarn.lock /pinfo/

RUN npm install

# Add rest of the client code
COPY . /pinfo/

EXPOSE 3000

CMD npm start
