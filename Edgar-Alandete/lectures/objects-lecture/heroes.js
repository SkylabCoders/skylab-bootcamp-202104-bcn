const hero = { heroName: 'spiderman', age: 17, city: 'New York' };

function createHero(heroName, age, city) {
  return { heroName, age, city };
}

const spiderman = createHero('spiderman', 17, 'new york');

class Hero {
    constructor(heroName, age, city, specialPower = null) {
      this.heroName = heroName;
      this.age = age;
      this.city = city;
      this.specialPower = specialPower;
    }
    lastComment = '';
  
    if(batSignal) {
      this.goToAction();
    }
  
    goToAction = (message) => {
      let newMessage = message;
      function talk() {
          console.log(newMessage);
      }
      talk();
      
    }
  }
