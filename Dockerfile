FROM node:18.17.0-alpine3.18

RUN addgroup dutydealer && adduser -S -G dutydealer dutydealer
USER dutydealer

WORKDIR /duty-dealer
COPY --chown=dutydealer:dutydealer package*.json .
RUN npm install
COPY . .

EXPOSE 3000 7000
