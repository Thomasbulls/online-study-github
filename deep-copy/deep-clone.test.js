const deepClone = require('./deep-clone.js')

describe('deep clone unit test', () => {
    test('compare if two arrays have same reference address', () => {
        const arr = [1,2,3]
        expect(deepClone(arr)).toStrictEqual(arr)
        expect(deepClone(arr)).not.toBe(arr)      // different address
    })
    test('change enumerable property of the copy object ', () => {
        const obj = {
            date: new Date(),
            name:'Thomas',
            number: {
                one: 1,
                two: 2
            }
        }
        let deepArr = deepClone(obj);
        deepArr.number.one = 3;
        expect(deepClone(deepArr.number.one)).toEqual(3);
        expect(deepClone(obj.number.one)).toEqual(1)
    })
})
