import {Character} from '../src/character.js';

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

describe ("fistFight()", () => {

})