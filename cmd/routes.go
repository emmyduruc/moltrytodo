package main

import (
	"github.com/emmyduruc/moltrytodo/handlers"
	"github.com/gofiber/fiber/v2"
)

func routes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, My friend lets set up your TODO! 🚀")
	})

	app.Get("/users", handlers.ListUsers)

	app.Post("/users", handlers.CreateUsers)

}
