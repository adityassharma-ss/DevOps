package main

import (
	"fmt"
	"math"
)

func getStockPriceChange(prevPrice, currentPrice float64) (float64, float64) {
	change := currentPrice - prevPrice
	percentChange := (change / prevPrice) * 100
	return change, percentChange
}

func main() {
	prevStockPrice := 0.0
	currentStockPrice := 100000.0

	change, percentChange := getStockPriceChange(prevStockPrice, currentStockPrice)

	if change < 0 {
		fmt.Printf("The Stock Price decreased by $%.2f which is %.2f%% of the prev price\n", math.Abs(change), math.Abs(percentChange))
	} else {
		fmt.Printf("The Stock Price increased by $%.2f which is %.2f%% of the prev price\n", change, percentChange)
	}
}
