const averageByMonth = (years:any) => {
  let sumEachYearByMonth:any = setAverageDefault()
  const numYears = Object.keys(years).length
  Object.keys(years).map((year) => {
    years[year].map((year:any, index:number) => {
      sumEachYearByMonth[index] = year.value + sumEachYearByMonth[index]
    })
 
  })

  return getAverage(sumEachYearByMonth, numYears)
}

const getAverage = (average:any, numYears:number) => {
  for(let i = 0; i < average.length; i++) { 
    average[i] = average[i] / numYears
  }

  return average
}

const setAverageDefault = () => {
  let i = 0
  let arr:any = []
  while (i < 12) {
    arr[i] = 0
    i++
  }
  return arr
}

const getSumValuesPerYear = (years:any) => {
  let sum:any = []
  Object.keys(years).map((year, index) => {
    sum[index] = years[year].reduce((a:any, b:any) => (
      {value: a.value + b.value}
      ))
 
  })

  return sum
}


export {averageByMonth, getSumValuesPerYear}