// 내보내기 exports
const 호준 = require('./002.js');
// = const 호준 = require('./002');

// console.log(호준.age); // 20
// 호준.growUp()
// console.log(호준.age); // 20
// console.log(호준.callAge()); // 21
// console.log(module);

// 불러오기 require
let age0 = 20;

module.exports.age = age0;
// = exports.age = age0;

function growUp() {
    age0 += 1
    console.log(age0)
}

function callAge() {
    return age0
}

exports.growUp = growUp;
exports.callAge = callAge;

