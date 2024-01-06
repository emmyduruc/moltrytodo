package middleware

import (
	"net/http"

	"github.com/emmyduruc/moltrytodo/auth"
	"github.com/gofiber/fiber/v2"
)

func SetMiddlewareJSON(ctx *fiber.Ctx) error {
	ctx.Set("Content-Type", "application/json")
	return ctx.Next()
}

func AuthmiddlewareSetter(ctx *fiber.Ctx) error {
	err := auth.ValidatingToken(ctx)
	if err != nil {
		return ctx.Status(http.StatusUnauthorized).JSON(fiber.Map{
			"message": err.Error(),
		})
	}
	return ctx.Next()
}
