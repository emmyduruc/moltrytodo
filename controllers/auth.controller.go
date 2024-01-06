package controllers

import (
	"fmt"

	"github.com/emmyduruc/moltrytodo/auth"
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

func Login(c *fiber.Ctx) error {
	user := new(models.User)
	err := c.BodyParser(user)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}
	var dbUser models.User
	database.DB.Db.Where("email = ?", user.Email).First(&dbUser)
	if dbUser.ID == 0 || dbUser.Email == "" {
		return c.Status(404).JSON(fiber.Map{
			"message": "user not found",
		})
	}
	if err := utils.VerifyPassword(dbUser.Password, user.Password); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "incorrect password",
		})
	}

	acessToken, refreshToken, err := auth.CreateToken(dbUser.ID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "error generating token",
		})
	}
	// cookie := new(fiber.Cookie)
	// cookie.Name = "jwt"
	// cookie.Value = token
	// cookie.Expires = auth.CookieExpireTime()
	// c.Cookie(cookie)

	return c.Status(200).JSON(fiber.Map{
		"message":      fmt.Sprintf("Hi %s you have successfully login", dbUser.FirstName),
		"acessToken":   acessToken,
		"refreshToken": refreshToken,
	})
}

func ChangePassword(c *fiber.Ctx) error {
	user := new(models.User)
	err := c.BodyParser(user)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "error parsing json",
		})

	}
	var dbUser models.User
	database.DB.Db.Where("email = ?", user.Email).First(&dbUser)
	if dbUser.ID == 0 {
		return c.Status(404).JSON(fiber.Map{
			"message": "user not found",
		})
	}
	hash, err := utils.Hash(user.Password)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "error hashing password",
		})
	}
	dbUser.Password = string(hash)
	database.DB.Db.Save(&dbUser)
	return c.Status(200).JSON(fiber.Map{
		"message": fmt.Sprintf("Hi %s you have successfully changed your password", dbUser.FirstName),
	})
}
