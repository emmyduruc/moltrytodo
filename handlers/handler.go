package handlers

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
	users := new(models.User)
	if err := c.BodyParser(users); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	database.DB.Db.Create(&users)

	return c.Status(200).JSON(users)
}
