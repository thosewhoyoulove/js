var a = "undefined",
    b = "false",
    c = "null",
    d = "",
    e = "0";
var f = undefined,
    g = false,
    h = null,
    i = 0;

function assert(x) {
    if (x) {
        console.log("true");
    } else {
        console.log("false");
    }
}
console.log(assert(a)); //true
console.log(assert(b)); //true
console.log(assert(c)); //true
console.log(assert(d)); //false
console.log(assert(e)); //true
console.log(assert(f)); //false
console.log(assert(g)); //false
console.log(assert(h)); //false
console.log(assert(i)); //false
console.log(assert(j)); //false