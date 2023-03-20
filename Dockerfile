s# Image name rowane/1410-scouting-container:latest

# Push
# docker buildx create --use
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t rowane/1410-scouting-container:latest --push . (This is gonna take a while, include the . at the end)

# Pull
# docker buildx imagetools inspect rowane/1410-scouting-container:latest
# Get name of platform desired
# docker run -dp [Your Port Here]:3000 [Paste Name Here] (-d flag not necessary on servers, your port is the port that you want running the app on your host computer)
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
