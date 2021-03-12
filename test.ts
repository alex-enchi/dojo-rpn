import {assertEquals} from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {rpn} from './rpn.ts';

// 3 5 8 * 7 + * => ((5*8)+7)*3 = 141

Deno.test({name:'20 5 / => 20/5 = 4', fn: () => {
    const input = '20 5 /';
    const output = 4;
    assertEquals(rpn(input), output);
}})

Deno.test('4 2 + 3 - => (4+2)-3 = 3', () => {
    const input = '4 2 + 3 -';
    const output = 3;
    assertEquals(rpn(input), output);
});

Deno.test("3 5 8 * 7 + * => ((5*8)+7)*3 = 141", () => {
    const input = '3 5 8 * 7 + *';
    const output = 141;
    assertEquals(rpn(input), output);
});
