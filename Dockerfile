# dockerfile for production
FROM node:12.16.0 as build

ENV PROJECT_DIR "/srv/app"

WORKDIR ${PROJECT_DIR}

COPY src/ src/
COPY package*.json ./
COPY tsconfig.json tsconfig.json

RUN chown -R node:node ${PROJECT_DIR}

USER node

RUN npm install
RUN npm run build

RUN node:12.16.0 as production

WORKDIR ${PROJECT_DIR}

COPY --from=build /srv/app/dist/ .
COPY package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "src/index.js"]
