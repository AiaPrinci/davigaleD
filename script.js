
// First HomeWork
let  myNumbers = [1, 7, 5, 3, 2, 6, 10, 16, 26, 22, 8, 9];
let sum = 0;

for (let i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
}

console.log(sum);


// Second HomeWork
const moreThanTwo = myNumbers.filter(sum => sum > 2);

console.log(moreThanTwo);


// Third HomeWork
let newArray = [7, 12, 'orange', 'cherry', 23, 15, 'pineapple', 'apple', 5];
let numbersArray = [];
let stringsArray = [];

for (let i = 0; i < newArray.length; i++) {
    if (Number(newArray[i]) === newArray[i]) {
        numbersArray.push(newArray[i]);
    } else {
        stringsArray.push(newArray[i]);
    }
}

console.log("Numbers Array:", numbersArray);
console.log("Strings Array:", stringsArray);


// Fourth HomeWork
let strings = ['Orange', 'Cherry', 'Pineapple', 'Apple'];

let ul = document.createElement('ul');
ul.className = 'myUl';

strings.forEach((ulLi) => {
    let li = document.createElement('li');
    li.textContent = ulLi;
    li.className = 'classLi'
    ul.appendChild(li);
    // li.addEventListener('click', () => {
    //     strings.forEach((list) => {
    //         list.style.backgroundColor = 'rgb(43, 0, 26)';
    //     })
    //     li.style.backgroundColor = '#000';
    // });
}); 



document.body.appendChild(ul);

let list = document.querySelectorAll('.classLi');

console.log(list);

list.forEach((item) => {
    item.addEventListener('click', () => {
        list.forEach((list) => {
            list.style.backgroundColor = 'rgb(43, 0, 26)';
        })
        item.style.backgroundColor = '#000';
    });
})

// lecture
let array = ['mercedes', 'aba ra'];

let ulElement = `<ul>
    <li>${array[0]}</li>
    <li>${array[1]}</li>
</ul>`

document.body.innerHTML = ulElement;