"use strict";

const gender = prompt('cinsiyyet(k/q)');

if (gender === "k" || gender === "K") {
    const username = prompt('enter your username');
    console.log(`salam cenab, ${username}`);
}

else if (gender === "q" || gender === "Q") {
    const username = prompt('enter your username');

    console.log(`salam xanim, ${username}`);
}

else {
    console.log('duzgun qeyd edin');
}