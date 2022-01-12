

import { ThreeDots } from './threeDots';

const sut = new ThreeDots;

test('a', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['x', 'y', 'z'];
    const act = sut.a(arr1, arr2);
    const exp = ['a', 'b', 'c', 'x', 'y', 'z'];

    act.forEach((elem, i) => {
        expect(elem).toBe(exp[i]);
    });
})

test('b', () => {
    const act = sut.b('foobar');
    const exp = ['f', 'o', 'o', 'b', 'a', 'r'];

    act.forEach((elem, i) => {
        expect(elem).toBe(exp[i]);
    });
})

describe('c', () => {
    const arr = [32, 16, 8, 4, 2];
    it('plus', () => {
        const act = sut.c(arr, 0);
        expect(act).toBe(32);
    });
    it('negative', () => {
        const act = sut.c(arr, -1);
        expect(act).toBe(2);
    })
})

test('d', () => {
    const arr = ['foo', 'bar', 'baz'];
    const act: string[] = sut.d(arr);

    act.forEach((elem, i) => {
        expect(elem).toBe(arr[i]);
    })
})

test('e', () => {
    const arr = ['foo', 'bar', 'baz', 'foo', 'qux', 'quux', 'baz'];
    const act = sut.e(arr);
    const exp = ['foo', 'bar', 'baz', 'qux', 'quux'];

    act.forEach((elem, i) => {
        expect(elem).toBe(exp[i]);
    })
})
