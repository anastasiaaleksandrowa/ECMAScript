async function saveUserData(userData) {
    const url = 'https://jsonplaceholder.typicode.com/users'; // Пример URL, заменить на нужный

    try {
        const response = await fetch(url, {
            method: 'POST', // Указываем метод POST
            headers: {
                'Content-Type': 'application/json' // Устанавливаем заголовок Content-Type
            },
            body: JSON.stringify(userData) // Сериализуем объект в JSON-строку
        });

        if (!response.ok) {
            // Если ответ не успешен, отклоняем промис с сообщением об ошибке
            throw new Error('Не удалось сохранить данные о пользователе.');
        }

        return await response.json(); // Возвращаем ответ сервера в виде объекта
    } catch (error) {
        // Обработка ошибок
        return Promise.reject(error.message);
    }
}

// Пример использования:
const newUser = {
    name: 'Иван Иванов',
    username: 'ivanivanov',
    email: 'ivan@example.com',
};

saveUserData(newUser)
    .then(responseData => {
        console.log('Данные о пользователе успешно сохранены:', responseData);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });