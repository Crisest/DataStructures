const grades = [23
    ,80
    ,96
    ,18
    ,73
    ,78
    ,60
    ,60
    ,15
    ,45
    ,15
    ,10
    ,5
    ,46
    ,87
    ,33
    ,60
    ,14
    ,71
    ,65]

    const nextMultipleOfFive = (number) => {
        return number + (5 - number % 5)
    }

    const gradingStudents = (g) => {
        return g.map((grade) => {
            let nextMultiple = nextMultipleOfFive(grade)
            if(grade > 37 && grade % 5){
                return (nextMultiple - grade >= 3) 
                    ? grade 
                    : grade + ( 5 - grade % 5)  
            }
            else{
                return grade
            }
        })
    }

console.log('input', grades);
console.log('output', gradingStudents(grades));
