'use strict';

function biggest(n) {
    var i, m, d = 0;
    var n = 0;
    var number=0;
    var limit = 0;

    for (i = 1; i < n; i += 1) {
        number = 10 * number + 9;
    }
    var inf = number;
    var sup = 10 * number + 9;

    function isPalindromic(n) {
        var p = 0, q = n, r;
        while (n > 0) {
            r = n % 10;
            p = 10 * p + r;
            n = Math.floor(n / 10);
        }
        return p === q;
    }

    for (n = sup * sup, m = inf * inf; n > m; n -= 1) {
        if (isPalindromic(n)) {
            limit = Math.ceil(Math.sqrt(n));
            d = sup;
            while (d >= limit) {
                if (n % d === 0 && n / d > inf) {
                    return n;
                }
                d -= 1;
            }
        }
    }
    return NaN;
}
//call the function

console.log(biggest(3));

//check again

