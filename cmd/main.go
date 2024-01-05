package main

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/emmyduruc/moltrytodo/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.ConnectDb()
	app := fiber.New()

	routes.Routes(app)

	app.Listen(":3000")
}
