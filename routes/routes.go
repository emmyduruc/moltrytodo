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
	authGroup.Post("/change-password", controllers.ChangePassword)

	tasksGroup := app.Group("/tasks")

	tasksGroup.Post("/", controllers.CreateTask)
	tasksGroup.Get("/", controllers.ListTasks)
	tasksGroup.Get("/:id", controllers.GetTask)
	tasksGroup.Patch("/:id", controllers.UpdateTask)
	tasksGroup.Delete("/:id", controllers.DeleteTask)
	tasksGroup.Get("/user/:id", controllers.CreateSubtask)
	tasksGroup.Get("/user/:id", controllers.ListSubtasks)
	tasksGroup.Get("/user/:id", controllers.GetSubtask)
	tasksGroup.Get("/user/:id", controllers.UpdateSubtask)
	tasksGroup.Get("/user/:id", controllers.DeleteSubtask)

}
