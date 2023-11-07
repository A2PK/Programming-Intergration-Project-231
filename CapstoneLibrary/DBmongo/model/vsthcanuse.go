// Maybe some structs below we can reuse ?

package model

import "errors"

var (
	ERR_USER_NOT_FOUND = errors.New("ERR_USER_NOT_FOUND")
)

type LoginData struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type RegistrationData struct {
	Email       string `json:"email"`
	Password    string `json:"password"`
	DisplayName string `json:"displayName"`
}

type Error struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}

type RegisterResponse struct {
	Token  string `json:"token"`
	Status int    `json:"status"`
}
