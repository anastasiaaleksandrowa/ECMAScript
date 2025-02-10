function changeStyleDelayed(id, delay) {
    // Находим элемент по идентификатору
    const element = document.getElementById(id);
    
    // Проверяем, существует ли элемент
    if (!element) {
        throw new Error(`Элемент с ID "${id}" не найден.`);
    }

    // Устанавливаем задержку с помощью setTimeout
    setTimeout(() => {
        // Изменяем стиль элемента (например, цвет фона и цвет текста)
        element.style.backgroundColor = 'lightblue';
        element.style.color = 'white';
        element.style.fontWeight = 'bold';
    }, delay);
}

// Пример использования:
// changeStyleDelayed('myElementId', 2000); // изменит стиль элемента с ID 'myElementId' через 2000 мс