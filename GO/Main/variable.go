package main

import ("fmt" // you can import as many as packages inside it

)

func main(){
	var x int = 10
	var y int = 10 // if no value gets assigned then 0 will be the output
	fmt.Println(x)

	var sum int = x+y
	fmt.Println(sum)

	d := 66 // another way of assigning variables
	fmt.Println(d)

	// declaring variables

	var c float32 = 20.99
	fmt.Println(c)

	var myStr string = "Hello"
	var myInt int = 100
	var myFloat float64 = 45.12
	fmt.Println(myStr, myInt, myFloat)

	// Multiple Declarations
	var (
		employeeId int = 5
		firstName, lastName string = "Aditya", "SS"
	)
	fmt.Println(employeeId, firstName, lastName)


	//================================


	// Short variable declaration syntax
	name := "Aditya Sharma"
	age, salary, isProgrammer := 35, 50000.0, true

	fmt.Println(name, age, salary, isProgrammer)

	
	

}
