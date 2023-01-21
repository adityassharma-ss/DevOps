package main
import ("fmt")

func main() {
  arr1 := [5]int{} //not initialized
  arr2 := [5]int{1,2} //partially initialized
  arr3 := [5]int{1,2,3,4,5} //fully initialized

  fmt.Println(arr1)
  fmt.Println(arr2)
  fmt.Println(arr3)
}
	// By default, all the array elements are assigned the zero value of the array type.
	// For example, if we declare an integer array, all the elements will be initialized with zero.
	// If we declare a string array, all the elements will be initialized with an empty string, and so on.

