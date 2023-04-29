package main
import "fmt"

func main() {
	var myByte byte = 'a' // character declared
	var myRune rune = '♥'

	fmt.Printf("%c = %d and %c = %U\n", myByte, myByte, myRune, myRune)
}
