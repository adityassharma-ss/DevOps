package main

import (
    "fmt"
    
)

func main() {
    fmt.Println("input text:")
    var char rune
	fmt.Scanf("%c", &char)
    

    fmt.Printf("read character: %c-\n", char)
}
