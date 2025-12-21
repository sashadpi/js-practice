function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Ділення на нуль неможливе');
    } if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Обидва аргументи повинні бути числами');
    }
    return numerator / denominator;
}

try {
    const result = divide(14, 2);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    divide(10, 0);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    divide('10', 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Робота завершена');
}
