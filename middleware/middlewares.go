package middleware

import (
	"encoding/json"
	"fmt"
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

func JSON(w http.ResponseWriter, statusCode int, data interface{}) {
	w.WriteHeader(statusCode)
	err := json.NewEncoder(w).Encode(data)
	if err != nil {
		fmt.Fprintf(w, "%s", err.Error())
	}
}

func ERROR(w http.ResponseWriter, statusCode int, err error) {
	if err != nil {
		JSON(w, statusCode, struct {
			Error string `json:"error"`
		}{
			Error: err.Error(),
		})
		return
	}
	JSON(w, http.StatusBadRequest, nil)
}
