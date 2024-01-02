package main

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.ConnectDb()
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, My friend lets set up your TODO! 🚀")
	})

	app.Listen(":3000")
}
