package controllers

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/emmyduruc/moltrytodo/models"
	"github.com/emmyduruc/moltrytodo/utils"
	"github.com/gofiber/fiber/v2"
)

func Signup(c *fiber.Ctx) error {
	user := new(models.User)
	err := c.BodyParser(user)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}
	hash, err := utils.Hash(user.Password)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "error hashing password",
		})
	}
	user.Password = string(hash)
	database.DB.Db.Create(&user)

	return c.Status(201).JSON(user)
}
