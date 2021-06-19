console.log(`Welcome to Yogeshwar's Website`);

let no1 = document.getElementById(`card1`);
let no2 = document.getElementById(`card2`);
document.getElementById(`addBtn`).addEventListener(`click`, function (e) {
    let a = no1.value
    let b = no2.value
    let x = (a > b) ? a : b;

    while (true) {
        if (x % a == 0 && x % b == 0) {
            document.getElementById('ans').innerText = x
            break;
        }
        x++
    }
    no1.value = ""
    no2.value = ""
})