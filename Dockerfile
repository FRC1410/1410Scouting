# Image name rowane/1410-scouting-container:latest

# Push
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t rowane/1410-scouting-container:latest --push . (This is gonna take a while)

# Pull
# docker pull rowane/1410-scouting-container
# docker buildx imagetools inspect rowane/1410-scouting-container:latest
# Get name of platform desired
# docker run -dp [Your Port Here]:3000 [Paste Name Here] (-d flag not necessary on servers)
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]