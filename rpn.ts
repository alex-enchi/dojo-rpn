type group = [string, number | group, number | group];

export const rpn = (input: string): number | undefined => {
    const operators = input.split(' ');
    const first = operators.pop() as string;    
    return rpn_number(operators, first);
}


const isOperator = (char: string): boolean => {
    const operators = ['/', '-', '+', '*']
    return operators.includes(char);
}

// 3 5 8 * 7 + * => ((5*8)+7)*3 = 141
// 1. [*, ?2, ?4]
// 2. [+, 7, ?3] // 
// 3. [*, 8, 5] // done
// 4. 3

const rpn_number = (input: string[], operator: string): number => {
    return calculate([operator, computeArgument(input), computeArgument(input)]);
}

const computeArgument = (input: string[]): number => {
    const current = input.pop() as string;
    if (isOperator(current)) {
        return rpn_number(input, current);
    }
    return Number.parseInt(current);
}

const calculate = (group:[string, number, number]) => {
    // do the calculation for the group
    let evalStr = '';
    evalStr += group[2] || '';
    evalStr += group[0] || '';
    evalStr += group[1] || '';
    return eval(evalStr) as number; // Danger
}

// 4 5 MAX 1 2 MAX * => MAX(4,5) * MAX(1,2) = 10
// (4 5 MAX) (5 3 * 1 2 MAX) * => MAX(4,5) * MAX(1,2, (3*5)) = 10


// *