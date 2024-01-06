package controllers

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/emmyduruc/moltrytodo/models"
	"github.com/gofiber/fiber/v2"
)

func CreateCategory(c *fiber.Ctx) error {
	category := new(models.Category)
	err := c.BodyParser(category)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}

	if result := database.DB.Db.Create(&category); result.Error != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "error creating category.............................",
			"error":   result.Error.Error(),
		})
	} else {
		return c.Status(201).JSON(category)
	}

}

func ListCategories(c *fiber.Ctx) error {
	categories := []models.Category{}

	if result := database.DB.Db.Find(&categories); result.Error != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "error listing categories.............................",
			"error":   result.Error.Error(),
		})
	} else {
		return c.Status(200).JSON(categories)
	}
}

func GetCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	category := models.Category{}
	err := database.DB.Db.Find(&category, id)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{
			"message": "category not found"})
	}

	return c.Status(200).JSON(category)
}
