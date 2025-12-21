function countdown(num) {
    console.log(num);
    if (num > 0) {
        countdown(num - 1);
    } else {
        console.log('Done');
    }
}

countdown(7);
