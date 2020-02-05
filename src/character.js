class Character {
  constructor (name, gender){
    this.name= name;
    this.gender= gender;
    this.vitality;
    this.knowledge;
    this.athleticism;
    this.cool;
  }

  toString() {
   let textStart = `You begin your journey through the harsh landscape of 80s pop culture. You're a ${this.gender}. You've also chosen to call yourself ${this.name}.`;
   return textStart;
  }


}





class Nerd extends Character {
  // Methodies Modifies Base Class Attributes
  constructor (name, gender) {
    super(name, gender);
    this.vitality= 10;
    this.knowledge= 175;
    this.athleticism=75;
    this.cool= 50;
  }
}

class Prep extends Character {
  // Methodies Modifies Base Class Attributes
  constructor (name, gender) {
    super(name, gender);
    this.vitality= 10;
    this.knowledge= 75;
    this.athleticism=75;
    this.cool= 150;
  }
}

class Jock extends Character {
  // Methodies Modifies Base Class Attributes
  constructor (name, gender) {
    super(name, gender);
    this.vitality= 10;
    this.knowledge= 25;
    this.athleticism=150;
    this.cool= 125;
  }
}