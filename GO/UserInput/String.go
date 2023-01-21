package main

import (
    "fmt"
    
)

func main() {
    fmt.Println("input text:")
    var w1, w2, w3 string
    fmt.Scanln(&w1, &w2, &w3)
    

    //fmt.Printf("number of items read: %d\n", n)
    fmt.Printf("read line: %s %s %s-\n", w1, w2, w3)
}
