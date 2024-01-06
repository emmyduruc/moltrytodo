package routes

import (
	"github.com/emmyduruc/moltrytodo/controllers"
	"github.com/emmyduruc/moltrytodo/middleware"
	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, My friend lets set up your TODO! 🚀")
	})
	app.Use(middleware.SetMiddlewareJSON)

	usersGroup := app.Group("/users")

	usersGroup.Get("/", controllers.ListUsers)

	authGroup := app.Group("/auth")

	authGroup.Post("/signup", controllers.Signup)
	authGroup.Post("/login", controllers.Login)
	authGroup.Post("/change-password", middleware.AuthmiddlewareSetter, controllers.ChangePassword)

	tasksGroup := app.Group("/tasks")

	tasksGroup.Post("/", controllers.CreateTask)
	tasksGroup.Get("/", controllers.ListTasks)
	tasksGroup.Get("/:id", controllers.GetTask)
	tasksGroup.Patch("/:id", controllers.UpdateTask)
	tasksGroup.Delete("/:id", controllers.DeleteTask)

	tasksGroup.Use(middleware.AuthmiddlewareSetter)
	subtasksGroup := app.Group("/subtasks")
	subtasksGroup.Get("/", controllers.CreateSubtask)
	subtasksGroup.Get("/:id", controllers.ListSubtasks)
	subtasksGroup.Get("/:id", controllers.GetSubtask)
	subtasksGroup.Get("/:id", controllers.UpdateSubtask)
	subtasksGroup.Get("/:id", controllers.DeleteSubtask)

}
