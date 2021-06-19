console.log(`Welcome to Yogeshwar's Website`);

let no1 = document.getElementById(`card1`);
let no2 = document.getElementById(`card2`);
document.getElementById(`addBtn`).addEventListener(`click`, function (e) {
    let a = Number(no1.value)
    let b = Number(no2.value)
    console.log(typeof (a));
    let x = (a > b) ? a : b;
    if (typeof (a) == `number` && typeof (b) == `number`) {
        while (true) {
            if (x > 10000) {
                document.getElementById('ans').innerText = `Error! Very Big Value`;
                break;
            }
            else if (x % a == 0 && x % b == 0) {
                document.getElementById('ans').innerText = x;
                break;
            }
            x++
        }

    }
    else {
        document.getElementById('ans').innerText = `Error!`;
        // break;
    }
    no1.value = ""
    no2.value = ""
}
)
// console.log(typeof (20));