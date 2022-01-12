

import { Hello } from './hello';

test('getMsg', () => {
    const act = new Hello('alice').getMsg();
    expect(act).toBe('Hello alice');
})
