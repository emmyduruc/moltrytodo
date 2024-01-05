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
	err := c.BodyParser(user)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}
	database.DB.Db.Create(&user)

	return c.Status(201).JSON(user)
}

func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	user := models.User{}
	err := database.DB.Db.Find(&user, id)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{
			"message": "user not found"})
	}

	return c.Status(200).JSON(user)
}

func UpdateUser(c *fiber.Ctx) error {
	id := c.Params("id")
	user := models.User{}
	err := database.DB.Db.Find(&user, id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "user not found",
		})

	}

	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})
	}

	database.DB.Db.Save(&user)

	return c.Status(200).JSON(user)
}

func DeleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	user := models.User{}
	err := database.DB.Db.Find(&user, id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "user not found",
		})

	}

	database.DB.Db.Delete(&user)

	return c.SendStatus(204)
}
