function bringStudents() {
    return new Promise((resolve, reject) => {

        setTimeout(function () {
            const array = [];
    
            for (let i = 0; i < 10; i++) {
                array.push({name: "bera"+ (i+1), id:i+1})
            }
    
            resolve(array)
        }, 3000)
    })
}

console.log("started");

bringStudents().then(array => printStudents(array))

console.log("finish");

function printStudents(array) {
    console.log(array);
}