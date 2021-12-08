console.log('Tomagatchi Project: ');


let totalTimesPlayed = 0;

const inputName = prompt('Please enter a name for your pet..' );

class Tomagachi {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.bordem = 10;
    this.age = 0;

  }

   feedMe() {
     console.log(`${this.name} is eating!`);
     alert('🍗🍑🫐🧀')
     this.hunger += 2;
     this.sleep--;
     totalTimesPlayed++;
     this.bordem--;

     //console.log(this.hunger);

  }

  shireSleep() {
    console.log(`${this.name} is Sleeping...`);
    alert('💤💤💤');
    this.sleep++;
    this.hunger--;

  }

  shirePlay() {
    console.log('Playing in the shire!');
    alert('🏃🏽‍♂️🏃🏽‍♂️🏃🏽‍♂️');
    this.sleep--;
    this.hunger--;
    this.bordem++;

  }

  gettingOlder(){
    this.age++;

  }

  // runGame() {
  //   setInterval(() => {
  //
  //         if (tomDoe.age === 5 || tomDoe.age === 10 || tomDoe.age === 15) {
  //             alert('Hello you have aged.');
  //         }
  //         if (tomDoe.age >= 5 && tomDoe.age <= 9) {
  //           character.style.opacity = 0;
  //
  //         } if (tomDoe.age >= 10 && tomDoe.age <= 14) {
  //           character2.style.opacity = 0
  //
  //         } else if (tomDoe.age === 16) {
  //           character3.remove();
  //           alert(`GAME OVER! \n ${tomDoe.name} has died!`)
  //           clearInterval(age);
  //         }
  //       tomDoe.gettingOlder();
  //       currentAge.innerText = `Current Age: ${tomDoe.age}`;
  //
  //   }, 1000)
  //
  // }



}







const tomDoe = new Tomagachi(inputName);


const character = document.querySelector("#character")
const character2 = document.querySelector("#character2");
const character3 = document.querySelector("#character3")


const hungerMetric = document.querySelector('#hunger-metric');
hungerMetric.innerText =`Hunger: ${tomDoe.hunger}`;

const sleepMetric = document.querySelector('#sleep-metric');
sleepMetric.innerText = `Sleepiness: ${tomDoe.sleep}`;

const bordemMetric = document.querySelector('#bordem-metric');
bordemMetric.innerText = `Bordem: ${tomDoe.bordem}`;

const currentAge = document.querySelector('#current-age');
currentAge.innerText = `Current Age: ${tomDoe.age}`;

const currentName = document.querySelector('#name-metric');
currentName.innerText = `${inputName}'s Current Metrics: `


//Relating to switching sleeping background
let backgroundAwake = document.querySelector('#background-awake');
let backgroundSleep = document.querySelector('#background-sleep');

// awake.style.opacity = "0%";
// sleep.style.opacity = "100%";


//********************EVENT LISTENERS******************************************


const feed = document.querySelector('#eat-button');
    feed.addEventListener('click', e => {
    tomDoe.feedMe();
    hungerMetric.innerText =`Hunger: ${tomDoe.hunger}`;
    sleepMetric.innerText = `Sleepiness: ${tomDoe.sleep}`;
    bordemMetric.innerText = `Bordem: ${tomDoe.bordem}`;
    currentAge.innerText = `Current Age: ${tomDoe.age}`;


})


const sleep = document.querySelector('#sleep-button');
sleep.addEventListener('click', () => {
  //sleep.disable = true;
  //awake.style.opacity = 0%;
  tomDoe.shireSleep();
  hungerMetric.innerText =`Hunger: ${tomDoe.hunger}`;
  sleepMetric.innerText = `Sleepiness: ${tomDoe.sleep}`;
  bordemMetric.innerText = `Bordem: ${tomDoe.bordem}`;
  currentAge.innerText = `Current Age: ${tomDoe.age}`;
  //awake.style.opacity = 0%

  //trying to set the button to timeout for 5 seconds. Placed up top in my class as well
  //setTimeout(tomDoe.disableButton(), 5000)
  //backgroundSleep.style.opacity = 100%

})


const play = document.querySelector('#play-button');
play.addEventListener('click', e => {
  tomDoe.shirePlay();
  hungerMetric.innerText =`Hunger: ${tomDoe.hunger}`;
  sleepMetric.innerText = `Sleepiness: ${tomDoe.sleep}`;
  bordemMetric.innerText = `Bordem: ${tomDoe.bordem}`;
  currentAge.innerText = `Current Age: ${tomDoe.age}`;
})
//Alternate Soultion below.
// play.addEventListener("click", tomDoe.shirePlay)


//****************Alternate runGame() if no solution****************************



//Sets the game to count repeatedly after the prompt
//Uncomment Code below

const age = setInterval(() => {

      //If statement alerting the user that they have aged
      if (tomDoe.age === 5 || tomDoe.age === 10 || tomDoe.age === 15) {
          alert('Hello you have aged.');
      }

      //If statement testing whether a user has exceeded the number for attributes
      if (tomDoe.hunger < 0 || tomDoe.sleep < 0 || tomDoe.bordem < 0) {
        alert(`GAME OVER! \n ${tomDoe.name} has died!`)
        clearInterval(age);

      }

      if (tomDoe.hunger > 20 || tomDoe.bordem > 20) {
        alert(`GAME OVER! \n ${tomDoe.name} has died!`)
        clearInterval(age);

      }

      if (tomDoe.age >= 5 && tomDoe.age <= 9) {
        character.style.opacity = 0;

      } if (tomDoe.age >= 10 && tomDoe.age <= 14) {
        character2.style.opacity = 0

      } else if (tomDoe.age === 60) {
        character3.remove();
        alert(`GAME OVER! \n ${tomDoe.name} has died!`)
        clearInterval(age);
      }
    tomDoe.gettingOlder();
    currentAge.innerText = `Current Age: ${tomDoe.age}`;

}, 1000);




//We could have a run game function but I need to figure out how to get it to reset
//tomDoe.runGame();
