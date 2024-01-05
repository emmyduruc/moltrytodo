package controllers

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/emmyduruc/moltrytodo/models"
	"github.com/gofiber/fiber/v2"
)

func ListUsers(c *fiber.Ctx) error {
	users := []models.User{}
	database.DB.Db.Find(&users)

	return c.Status(200).JSON(users)
}

func CreateUsers(c *fiber.Ctx) error {
	user := new(models.User)

	if err := c.BodyParser(user); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Review your input",
		})
	}

	database.DB.Db.Create(&user)

	return c.Status(201).JSON(user)
}
