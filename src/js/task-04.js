// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса


let counterValue = 0;

const spanRef = document.querySelector("#value");

const increment = function () {
    counterValue += 1;
    return spanRef.textContent = counterValue;
}

const decrement = function () {
    counterValue -= 1;
    return spanRef.textContent = counterValue;
}

const btnIncrement = document.querySelector('button[data-action="increment"]');
btnIncrement.addEventListener('click', increment);

const btnDecrement = document.querySelector('button[data-action="decrement"]');
btnDecrement.addEventListener('click', decrement);