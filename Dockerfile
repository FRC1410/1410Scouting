# Image name rowane/1410-scouting-container:latest

# Push
# docker build -t rowane/1410-scouting-container:latest .
# docker push rowane/1410-scouting-container:latest

# Pull
# docker pull rowane/1410-scouting-container
# docker run -dp [Your Port Here]:3000 rowane/1410-scouting-container (-d flag not necessary on servers)
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]