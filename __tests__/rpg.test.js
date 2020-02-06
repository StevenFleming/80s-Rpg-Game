import {Character, Nerd, Prep, Jock, fistFight, outSmart, cloutWar} from '../src/character.js';

describe("Character", () => {
  test('Should correctly create character object', () => {
    let steven = new Character("Steven", "Boy");
    expect(steven.name).toEqual("Steven");
    expect(steven.gender).toEqual("Boy");
    expect(steven.vitality).toEqual(undefined);
    expect(steven.knowledge).toEqual(undefined);
    expect(steven.athleticism).toEqual(undefined);
    expect(steven.cool).toEqual(undefined);


  })
  test('Should correctly return the start string', () => {
    let steven = new Character("Steven", "Boy");
    expect(steven.toString()).toEqual("You begin your journey through the harsh landscape of 80s pop culture. You're a Boy. You've also chosen to call yourself Steven.");
  })

})

// describe("Nerd", () => {
//   test('Should correctly create Nerd object', () => {
//     let steven = new Nerd("Steven", "Boy");
//     expect(steven.name).toEqual("Steven");
//     expect(steven.gender).toEqual("Boy");
//     expect(steven.vitality).toEqual(10);
//     expect(steven.knowledge).toEqual(175);
//     expect(steven.athleticism).toEqual(75);
//     expect(steven.cool).toEqual(50);
//   })
//   test('Should correctly return the start string', () => {
//     let steven = new Nerd("Steven", "Boy");
//     expect(steven.toString()).toEqual("You begin your journey through the harsh landscape of 80s pop culture. You're a Boy. You've also chosen to call yourself Steven.");
//   })

// })

describe ("fistFight()", () => {
  test ('should return winner of the fight', () => {
    let npc = new Jock("Chad", "Boy");
    let steven = new Nerd("Steven", "Boy");
    expect(fistFight(steven, npc)).toEqual(npc);
    expect(npc.vitality).toEqual(12);
    expect(steven.vitality).toEqual(9);
  })

  test('should return false if there is a tie, but each player level should increase by 1', () => {
    let npc = new Nerd("Arnold", "Boy");
    let steven = new Nerd("Steven", "Boy");
    expect(fistFight(steven, npc)).toEqual(false);
    expect(npc.vitality).toEqual(11);
    expect(steven.vitality).toEqual(11);
  })

})

describe ("outSmart()", () => {
  test ('should return winner of the fight', () => {
    let npc = new Jock("Chad", "Boy");
    let steven = new Nerd("Steven", "Boy");
    expect(outSmart(steven, npc)).toEqual(steven);
  })
})

describe ("cloutWar()", () => {
  test ('should return winner of the fight', () => {
    let npc = new Jock("Chad", "Boy");
    let steven = new Nerd("Steven", "Boy");
    expect(cloutWar(steven, npc)).toEqual(npc);
  })
})