export class Character {
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

export function fistFight(player, npc){
  if (npc.athleticism > player.athleticism){
    return npc;
  } else if (npc.athleticism< player.athleticism){
    return player;
  } else {
    npc.vitality += 1;
    player.vitality += 1;
    return false;
  }
};

export function outSmart(player, npc){
  if (npc.knowledge > player.knowledge){
    return npc;
  } else {
    return player;
  }
};

export function cloutWar(player, npc){
  if (npc.cool > player.cool){
    return npc;
  } else {
    return player;
  }
};

export class Nerd extends Character {
  // Methodies Modifies Base Class Attributes
  constructor (name, gender) {
    super(name, gender);
    this.vitality= 10;
    this.knowledge= 175;
    this.athleticism= 75;
    this.cool= 50;
  }
}

export class Prep extends Character {
  // Methodies Modifies Base Class Attributes
  constructor (name, gender) {
    super(name, gender);
    this.vitality= 10;
    this.knowledge= 75;
    this.athleticism=75;
    this.cool= 150;
  }
}

export class Jock extends Character {
  // Methodies Modifies Base Class Attributes
  constructor (name, gender) {
    super(name, gender);
    this.vitality= 10;
    this.knowledge= 25;
    this.athleticism=150;
    this.cool= 125;
  }
}