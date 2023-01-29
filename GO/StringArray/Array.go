package main
import ("fmt")

func main() {
  var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
  fmt.Println(cars)
  fmt.Println(cars[0])
  fmt.Println(cars[0] + " " + cars[1])
}