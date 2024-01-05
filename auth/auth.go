package auth

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	jwt "github.com/golang-jwt/jwt"
)

func CreateToken(user_id uint32) (string, error) {
	token := jwt.New(jwt.SigningMethodEdDSA)
	claims, _ := token.Claims.(jwt.MapClaims)
	claims["authorized"] = true
	claims["user_id"] = user_id
	claims["exp"] = time.Now().Add(time.Hour * 1).Unix() //Token expires after 1 hour
	tokenString, err := token.SignedString([]byte(os.Getenv("API_SECRET")))

	if err != nil {
		return "", err
	}

	return tokenString, nil

}

func ValidatingToken(ctx *fiber.Ctx) error {
	tokenString := FetchToken(ctx)
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("API_SECRET")), nil
	})
	if err != nil {
		return err
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		Pretty(claims)
	}
	return nil
}

func FetchToken(ctx *fiber.Ctx) string {
	token := ctx.Get("Authorization")
	if token != "" {
		parts := strings.Split(token, " ")
		if len(parts) == 2 {
			return parts[1]
		}
	}
	return ""
}

func ExtractTokenID(ctx *fiber.Ctx) (uint32, error) {

	tokenString := FetchToken(ctx)
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("API_SECRET")), nil
	})
	if err != nil {
		return 0, err
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		uid, err := strconv.ParseUint(fmt.Sprintf("%.0f", claims["user_id"]), 10, 32)
		if err != nil {
			return 0, err
		}
		return uint32(uid), nil
	}
	return 0, nil
}

func Pretty(data interface{}) {
	b, err := json.MarshalIndent(data, "", " ")
	if err != nil {
		log.Println(err)
		return
	}

	fmt.Println(string(b))
}
