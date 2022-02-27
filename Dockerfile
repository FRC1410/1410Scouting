# Image name rowane/1410-scouting-container:latest

# Push
# docker build -t rowane/1410-scouting-container:latest .
# docker push rowane/1410-scouting-container:latest

# Pull
# docker pull rowane/1410-scouting-container
# docker run -dp 3000:3000 rowane/1410-scouting-container (Port can be anything-you-want:3000, -d flag not necessary on servers)
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]