// Write your code here
console.log("script connected successfully!")

let lightbulb1= document.querySelector('#lightbulb1');
let lightbulb2= document.querySelector('#lightbulb2');
let lightbulb3= document.querySelector('#lightbulb3');

let subtitle = document.querySelector('.subtitle');

let bulbArray = [lightbulb1,lightbulb2,lightbulb3];

let count = 0;

for (const bulb of bulbArray) {

    bulb.addEventListener('click',(e) =>{
        
        count++;
        subtitle.innerHTML = `You've clicked the light ${count} time(s)`;
        bulb.classList.toggle("active");

    });
    
};

