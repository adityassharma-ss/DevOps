//The Scan() function receives the user input in raw format as space-separated values and stores them in the variables. Newlines count as spaces.

package main
import ("fmt")

func main() {
  var i int

  fmt.Print("Type a number: ")
  fmt.Scan(&i)
  fmt.Println("Your number is:", i)
}