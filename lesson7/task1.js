function handleNum(num, evenCb, oddCb) {
    if (num % 2 === 0) {
        evenCb(num);
    } else {
        oddCb(num);
    }
}

function handleEven(num) {
    console.log(`Number ${num} is even`);
};

function handleOdd(num) {
    console.log(`Number ${num} is odd`);
};

handleNum(256, handleEven, handleOdd);
