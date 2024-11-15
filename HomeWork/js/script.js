// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//    showInfo() {
//       console.log(`Name: ${this.name}, specialty: ${this.specialty}, grate: ${this.grate}, absent: ${this.absent}`);
//    }
// }
// const Ivan = {
//    name: "Ivan",
//    specialty: "IT",
//    grate: 5,
//    absent: 40,
// }
// const Anna = {
//    name: "Anna",
//    specialty: "Medical",
//    grate: 5,
//    absent: 80,
// }

// const Olga = {
//    name: "Olga",
//    specialty: "Linguistics",
//    grate: 5,
//    absent: 60,
// }

// student.showInfo.call(Anna);
// student.showInfo.apply(Olga);

// const studentIvan = student.showInfo.bind(Ivan);
// studentIvan();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

function showMessage() {
   // console.log(`${this.description}`);
   alert(`${this.description}`);
 }
 
const html = {
   description: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content",
};

const css = {
   description: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen",
};

 let htmlBtn = document.querySelector("#html");
 let cssBtn = document.querySelector("#css");
 
 if (htmlBtn) {
   htmlBtn.addEventListener('click', () => {
      showMessage.bind(html)();
   });
 }
 
 if (cssBtn) {
   cssBtn.addEventListener('click', () => {
      showMessage.bind(css)();
   });
 }

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = {
//    buy: function () {
//       console.log(
//          `Продукт: ${this.name}, вартість: ${(this.price * this.amount).toFixed(2)} грн.`
//       );
//    },
// }

// const product1 = {
//    name: "banana",
//    price: 30,
//    amount: 4.5,
// }

// const product2 = {
//    name: "cherry",
//    price: 58,
//    amount: 1.3,
// }

// const product3 = {
//    name: "orange",
//    price: 89,
//    amount: 3.4,
// }

// shop.buy.call(product1);
// shop.buy.call(product2);
// shop.buy.call(product3);
