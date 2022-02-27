# 1410 Scouting Website
## Overview
Hi there!

Welcome to the 1410 scouting server! This is where we collect data in our matches for FRC team 1410, the Kraken using the [Nextjs](https://nextjs.org/) framework

This image is also hosted on [DockerHub](https://hub.docker.com/r/rowane/1410-scouting-container) and at our team website at [frc1410.org/scouting](https://frc1410.org/scouting)

Feel free to modify to your heart's content!

## Running
### Docker
1. Install docker
2. Run docker pull rowane/1410-scouting-container
3. Run docker run -dp [Your Port Here]:3000 rowane/1410-scouting-container (-d flag not necessary on servers)
4. Navigate to [localhost:[Your Port Here]](https://localhost:3000)

### GitHub
1. Install git
2. Install Nodejs
3. Run git clone https://github.com/RowanEklund/1410Scouting.git
4. Navigate to the project directory
5. Run npm run build
6. Run npm run start
7. Navigate to [localhost:3000](https://localhost:3000)

## Modifying
1. Install git
2. Run git clone https://github.com/RowanEklund/1410Scouting.git
3. Modify away! (Team number and scout name data is found in /public/config.json)