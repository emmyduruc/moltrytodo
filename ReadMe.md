# docker compose run --service-port web bash expose prts to the local machine

# go mod init https://github.com/emmyduruc/moltrytodo

# go get github.com/gofiber/fiber/v2

# go mod tidy

<!-- for hot reload -->

# RUN go install github.com/cosmtrek/air@latest

<!-- Installs go orm done inside the container-->

# go get gorm.io/gorm

# gorm.io/driver/postgres

<!-- start app environment -->

# open terminal run: docker compose up

# docker container ls

# copy the container id of the postgres:alpine

# to see the list of the containers run: docker inspect #ContainerId

# copy the iPAddress of the container

# start the pgAdmin on your browser via: localhost/8888

# login with the PGADMIN_DEFAULT_EMAIL and PASSWORD in the docker-compose.yml file

# create a new server

1. choosse any name for the entry "Name"
2. click on "Connection"
3. enter the ipAddress you copied earlier into the Hostname/address
4. port should be 5432
5. maintainance db should be postgres
6. "username" & "password" should be same with the one in the docker-compose.yml fle
