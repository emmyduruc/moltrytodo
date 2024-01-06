package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	FirstName string `json:"firstname" gorm:"text;not null;default:null"`
	LastName  string `json:"lastname" gorm:"text;not null;default:null"`
	Email     string `json:"email" gorm:"text;not null;default:null"`
	Password  string `json:"password" gorm:"text;not null;default:null"`
	Tasks     []Task `json:"tasks" gorm:"foreignKey:UserID"`
}

type Category struct {
	gorm.Model
	Name  string `json:"name" gorm:"text;not null;default:null"`
	Tag   string `json:"tag" gorm:"text;not null;default:null"`
	Color string `json:"color" gorm:"text;not null;default:null"`
	Icon  string `json:"icon" gorm:"text;not null;default:null"`
	Tasks []Task `json:"tasks" gorm:"foreignKey:CategoryID"`
}

type Task struct {
	gorm.Model
	CategoryID  uint      `json:"category_id" gorm:"integer;not null;default:null"`
	UserID      uint      `json:"user_id" gorm:"integer;not null;default:null"`
	Subtasks    []Subtask `json:"subtasks" gorm:"foreignKey:TaskID"`
	Title       string    `json:"title" gorm:"text;not null;default:null"`
	Description string    `json:"description" gorm:"text;not null;default:null"`
	Completed   bool      `json:"completed" gorm:"boolean;not null;default:false"`
	Priority    int       `json:"priority" gorm:"integer;not null;default:null"`
	Status      string    `json:"status" gorm:"text;not null;default:null"`
	DueDate     time.Time `json:"due_date" gorm:"default:null"`
}

type Subtask struct {
	gorm.Model
	TaskID      uint      `json:"task_id" gorm:"integer;not null;default:null"`
	Title       string    `json:"title" gorm:"text;not null;default:null"`
	Description string    `json:"description" gorm:"text;not null;default:null"`
	Completed   bool      `json:"completed" gorm:"boolean;not null;default:false"`
	Status      string    `json:"status" gorm:"text;not null;default:null"`
	DueDate     time.Time `json:"due_date" gorm:"default:null"`
}
