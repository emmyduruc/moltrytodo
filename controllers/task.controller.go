package controllers

import (
	database "github.com/emmyduruc/moltrytodo/db"
	"github.com/emmyduruc/moltrytodo/models"
	"github.com/gofiber/fiber/v2"
)

func CreateTask(c *fiber.Ctx) error {
	task := new(models.Task)
	err := c.BodyParser(task)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}
	database.DB.Db.Create(&task)

	return c.Status(201).JSON(task)
}

func ListTasks(c *fiber.Ctx) error {
	tasks := []models.Task{}
	database.DB.Db.Find(&tasks)

	return c.Status(200).JSON(tasks)
}

func GetTask(c *fiber.Ctx) error {
	id := c.Params("id")
	task := models.Task{}
	err := database.DB.Db.Find(&task, id)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{
			"message": "task not found"})
	}

	return c.Status(200).JSON(task)
}

func UpdateTask(c *fiber.Ctx) error {
	id := c.Params("id")
	task := models.Task{}
	err := database.DB.Db.Find(&task, id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "task not found",
		})

	}

	if err := c.BodyParser(&task); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})
	}

	database.DB.Db.Save(&task)

	return c.Status(200).JSON(task)
}

func DeleteTask(c *fiber.Ctx) error {
	id := c.Params("id")
	task := models.Task{}
	err := database.DB.Db.Find(&task, id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "task not found",
		})

	}

	database.DB.Db.Delete(&task)

	return c.Status(200).JSON(fiber.Map{
		"message": "task deleted",
	})
}

func GetTasksByCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	tasks := []models.Task{}
	database.DB.Db.Where("category_id = ?", id).Find(&tasks)

	return c.Status(200).JSON(tasks)
}

func GetTasksByUser(c *fiber.Ctx) error {
	id := c.Params("id")
	tasks := []models.Task{}
	database.DB.Db.Where("user_id = ?", id).Find(&tasks)

	return c.Status(200).JSON(tasks)
}

func GetTasksByUserAndCategory(c *fiber.Ctx) error {
	user_id := c.Params("user_id")
	category_id := c.Params("category_id")
	tasks := []models.Task{}
	database.DB.Db.Where("user_id = ? AND category_id = ?", user_id, category_id).Find(&tasks)

	return c.Status(200).JSON(tasks)
}

func CreateSubtask(c *fiber.Ctx) error {
	subtask := new(models.Subtask)
	err := c.BodyParser(subtask)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}
	database.DB.Db.Create(&subtask)

	return c.Status(201).JSON(subtask)
}

func ListSubtasks(c *fiber.Ctx) error {
	subtasks := []models.Subtask{}
	database.DB.Db.Find(&subtasks)

	return c.Status(200).JSON(subtasks)
}

func GetSubtask(c *fiber.Ctx) error {
	id := c.Params("id")
	subtask := models.Subtask{}
	err := database.DB.Db.Find(&subtask, id)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{
			"message": "subtask not found"})
	}

	return c.Status(200).JSON(subtask)
}

func UpdateSubtask(c *fiber.Ctx) error {
	id := c.Params("id")
	subtask := models.Subtask{}
	err := database.DB.Db.Find(&subtask, id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "subtask not found",
		})

	}

	if err := c.BodyParser(&subtask); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})
	}

	database.DB.Db.Save(&subtask)

	return c.Status(200).JSON(subtask)
}

func DeleteSubtask(c *fiber.Ctx) error {
	id := c.Params("id")
	subtask := models.Subtask{}
	err := database.DB.Db.Find(&subtask, id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "subtask not found",
		})

	}

	database.DB.Db.Delete(&subtask)

	return c.Status(200).JSON(fiber.Map{
		"message": "subtask deleted",
	})
}
