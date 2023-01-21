package main

import "fmt"

func main() {
	// Normal String (Can not contain newlines, and can have escape characters like `\n`, `\t` etc)
	var website = `"\"thttps://www.github.com/adityassharma-ss`

	// Raw String (Can span multiple lines. Escape characters are not interpreted)
	var siteDescription = `\t\t Aditya is a programmer who you can make practical guides and tutorials on programming languages, web development, and Devops.\t\n`

	fmt.Println(website, siteDescription)
}