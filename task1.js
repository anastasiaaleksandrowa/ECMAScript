async function getUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`; // Пример URL, заменить на нужный

    try {
        const response = await fetch(url);

        if (!response.ok) {
            // Если ответ не успешен, отклоняем промис с сообщением об ошибке
            throw new Error(`Пользователь с ID ${userId} не найден.`);
        }

        const data = await response.json(); // Извлекаем данные из ответа
        return data; // Возвращаем объект с данными о пользователе
    } catch (error) {
        // Обработка ошибок
        return Promise.reject(error.message);
    }
}

// Пример использования:
getUserData(1)
    .then(userData => {
        console.log('Данные о пользователе:', userData);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });