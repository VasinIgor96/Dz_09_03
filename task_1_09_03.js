
// # Завдання 1

// Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.
const countProps = function(obj) {
    return Object.keys(obj).length;
  };
  
  /*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
  console.log(countProps({}));
  console.log(countProps({ name: 'Mango', age: 2 }));
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
  