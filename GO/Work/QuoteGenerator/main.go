package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Quote struct {
	Id      string   `json:"_id"`
	Content string   `json:"content"`
	Author  string   `json:"author"`
	Tags    []string `json:"tags"`
}

func main() {
	// Make an HTTP GET request to the quotable API
	url := "https://api.quotable.io/random"
	res, err := http.Get(url)
	checkNilError(err)
	defer res.Body.Close()

	// Read the response body and print it
	content, err := ioutil.ReadAll(res.Body)
	checkNilError(err)
	fmt.Println(string(content)) // Print the JSON response

	// Unmarshal the JSON response into a Quote struct
	quoteData := Quote{}
	err = json.Unmarshal(content, &quoteData)
	checkNilError(err)

	fmt.Println(quoteData.Content)
	fmt.Println(quoteData.Author)

	for _, tag := range quoteData.Tags {
		fmt.Println(tag)
	}
}

func checkNilError(err error) {
	if err != nil {
		panic(err)
	}
}
