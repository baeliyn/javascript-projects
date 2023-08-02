function stopWatch() {
    let startTime = Date.now();
    console.log("start time:" + startTime);

    function timeLapse() {
        let elapsedTime = Date.now() - startTime;
        console.log("elapsed time"+elapsedTime+"ms");
    }

    return timeLapse;
}

const stopwatch = stopWatch();

for (let i = 0; i < 50000000; i++) {
    const temp = Math.random() * 5000;
    
}

stopwatch()


/************************************/

function studentTransactions() {
    const studentArray = new Array(10).fill({name :'', age : ''}).map((ogr, index) => {
        return {
            name: 'student' + index,
            id: index
        }
    })

    console.log("array created");

    function findStudent(id) {
        console.log(studentArray[id]);
    }

    function deleteStudent(id) {
        console.log(studentArray[id]);
    }

    function updateStudent(id) {
        console.log(studentArray[id]);
    }

    return {
        find: findStudent,
        update: updateStudent,
        delete: deleteStudent
    }
}

const student = studentTransactions();

student.delete(5);