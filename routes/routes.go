package routes

import (
	"github.com/emmyduruc/moltrytodo/controllers"
	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, My friend lets set up your TODO! 🚀")
	})

	usersGroup := app.Group("/users")

	usersGroup.Get("/", controllers.ListUsers)

	authGroup := app.Group("/auth")

	authGroup.Post("/signup", controllers.Signup)
	authGroup.Post("/login", controllers.Login)

}
