function calc(a, b, op) {
    let res;
    switch (op) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;

        default:
            break;
    }

    if(Number.isNaN(Number.parseFloat(res))) res = undefined;
    return res;
}

module.exports = {
    calc: calc
  }
  