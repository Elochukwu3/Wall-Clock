
let hour= document.querySelector(".hour");
let min= document.querySelector(".minuite");
let sec= document.querySelector(".seconds");
let deg = 6;
setInterval(() => {
    
        
        let currentDay= new Date();
        let currentHour= currentDay.getHours()*30;
        let currentMin= currentDay.getMinutes()*deg;
        let currentSec= currentDay.getSeconds()*deg;
        // console.log(currentMin);
        // currentHour = currentHour - 12; 
        hour.style.transform = `rotateZ(${currentHour+ (currentMin)/12}deg)`;
        min.style.transform = `rotateZ(${currentMin}deg)`;
        sec.style.transform = `rotateZ(${currentSec}deg)`;
        console.log(currentHour+ (currentMin)/12*deg);

    }, 1000);
//     console.log("A");
//     setTimeout(function(){
//         console.log("B");
//     }, 2000);
//     console.log("c");
//     class Counter {
//         constructor() {
//             this.count = 0;
//         }
//         increment (){
//             this.count++;
//         }
//     }
//     const CounterOne = new Counter();
//     CounterOne.increment ();
//     CounterOne.increment ();
//     const CounterTwo = CounterOne;
//     CounterOne.increment ();
// console.log(CounterOne.count);