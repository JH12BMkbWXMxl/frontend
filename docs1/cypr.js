// Генератор 64 символа где числа в сумме дают 72
function cypr() {
    // 72
    varq = 4 + 6 + 1 + 0 + 7 + 2 + 4 + 6 + 4 + 6 + 2 + 2 + 4 + 0 + 5 + 6 + 3 + 3 + 2 + 4 + 1;

    let num1 = Math.floor(Math.random() * 10);

    function mathR(varq) {
        let result = [];
        let currentSum = 0;
        while (currentSum < varq) {
            // Берем случайное число, но не больше оставшейся суммы
            if (varq - currentSum > 10) {
                nextNum = Math.floor(Math.random() * 10);
            } else {
                remaining = varq - currentSum;
                nextNum = Math.floor(Math.random() * remaining) + 1;
            }

            result.push(nextNum);
            currentSum += nextNum;
        }

        return result;
    }

    summaRand = mathR(varq);

    function generateString(summaRand) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
        const numbers = "0123456789";
        const totalLength = 64;

        // Случайное количество цифр от 10 до 16
        const numCount = summaRand.length;
        const letterCount = totalLength - numCount;

        let result = [];

        // Добавляем цифры
        for (let i = 0; i < numCount; i++) {
            result.push(summaRand[i]);
        }

        // Добавляем буквы
        for (let i = 0; i < letterCount; i++) {
            result.push(letters[Math.floor(Math.random() * letters.length)]);
        }

        // Перемешиваем символы в случайном порядке
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result.join("");
    }

    code = generateString(summaRand);

    const digitsStr = code.match(/\d/g);
    const digits = digitsStr.map(Number); // [1, 2, 3, 4.5]

    const total = digits.reduce((acc, val) => acc + val, 0); // Результат: 10

    return code;
}
