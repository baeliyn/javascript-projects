console.log("started");

bringStudents(printStudents)

console.log("finish");

function bringStudents(callback) {

    setTimeout(function () {
        const array = [];

        for (let i = 0; i < array.length; i++) {
            array.push({name: "bera"+ (i+1), id:i+1})
        }

        callback(array)
    }, 3000)

}

function printStudents(array) {
    console.log(array);
}