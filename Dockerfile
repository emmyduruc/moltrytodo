FROM golang:1.19.0

WORKDIR /usr/src/app

RUN go install github.com/cosmtrek/air@latest

RUN go get go.mongodb.org/mongo-driver/mongo


COPY . .
RUN go mod todo
