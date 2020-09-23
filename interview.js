function changeDateFormat(dates) {
    const result = dates.map((dateString) => {
        let dateArray = dateString.split(/[-|\/]/)
        for (let i = 0; i < dateArray.length; i++) {
            if(dateArray[i].length == 3){
                dateArray.unshift(dateArray[i])
            }
            
        }
         
    })
    return result
  }
  
  console.log(changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]));
//   var dates = 
//   for (index = 0; index < dates.length; ++index) {
//     console.log(dates[index]);
//   }