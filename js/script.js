let faq = alert('Ответьте правильно на 3 примера !');
let name = prompt('Как тебя зовут ?');
while (name == '' || name == null) {
    name = prompt('Как тебя зовут ?')
};

let plus = '+';


num_one = Math.ceil(Math.random() * 100);
num_two = Math.ceil(Math.random() * 100);
let math = num_one + num_two;

let example_one = +prompt('Первый пример: ' + num_one + plus + num_two + ' = ?');

if (example_one === math) {
    num_one = Math.ceil(Math.random() * 100);
    num_two = Math.ceil(Math.random() * 100);
    let math = num_one + num_two;
    let example_two = +prompt('Второй пример: ' + num_one + plus + num_two + ' = ?');
    if (example_two === math) {
        num_one = Math.ceil(Math.random() * 100);
        num_two = Math.ceil(Math.random() * 100);
        let math = num_one + num_two;
        let example_three = +prompt('Третий пример: ' + num_one + plus + num_two + ' = ?');
        if (example_three === math) {
            num_one = Math.ceil(Math.random() * 100);
            num_two = Math.ceil(Math.random() * 100);
            let math = num_one + num_two;
            alert('Имя ' + name + " Уровень " + '3' + ' Ты ответил правильно на 3 примера');
        } else {
            alert('Имя ' + name + " Уровень " + '2' + ' Ты ответил не правильно (Ответ ' + math + ' )');
        };

    } else {
        alert('Имя ' + name + " Уровень " + '1' + ' Ты ответил не правильно (Ответ ' + math + ' )');
    };

} else {
    alert('Ты ответил не правильно (Ответ ' + math + ' )');
    let time = setInterval(function () {
        console.log('Имя: ' + name);
        console.log('ИДЕТ ВЗЛОМ' + time);
        console.count('loop');
    }, 10);
};














