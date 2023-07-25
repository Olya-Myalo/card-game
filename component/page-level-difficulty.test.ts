import { getNumCards, shuffle } from "./page-level-difficulty"
import { it, expect } from '@jest/globals'

it("should return the correct number of cards", () => {
    const level = "easy";
    const number = 6;
    expect(getNumCards(level)).toBe(number)
})

it("should return a certain length of the array", () => {
    const array = ["1","2","3","4","5","6"]
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toHaveLength(array.length);
  });