package main

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.ConnectDb()
	app := fiber.New()

	routes(app)

	app.Listen(":3000")
}
