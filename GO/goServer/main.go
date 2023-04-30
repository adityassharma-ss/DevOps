package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Founder struct {
	Name    string `json:"title"`
	Age     uint32 `json:"age"`
	Email   string `json:"email"`
	Company string `json:"company"`
}

var founders []Founder

func greetingsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Greeting from Go Server 👋")
}

func formHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var founder Founder
	json.NewDecoder(r.Body).Decode(&founder)

	founder.Age = founder.Age * 2
	founders = append(founders, founder)

	json.NewEncoder(w).Encode(founders)
}

func main() {
	r := mux.NewRouter()

	founders = append(founders, Founder{Name: "Mehul", Age: 23, Email: "random@random.com", Company: "BharatX"})

	r.HandleFunc("/", greetingsHandler).Methods("GET")
	r.HandleFunc("/form", formHandler).Methods("POST")

	fmt.Println("Hello from GoServer 👋")
	fmt.Print("Starting server at port 8000\n")
	log.Fatal(http.ListenAndServe(":8000", r))
}
