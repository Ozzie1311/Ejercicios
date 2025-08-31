// const student1 = {
//   id: 1,
//   name: 'Reed',
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject]
//   },
// }

// function Student(id, name, subjects = []) {
//   this.id = id
//   this.name = name
//   this.subjects = subjects
// }

// Student.prototype.addSubject = function (subject) {
//   this.subjects = [...this.subjects, subject]
// }

// Student.prototype.removeSubject = function (subject) {
//   this.subjects = this.subjects.filter((sub) => sub !== subject)
// }

// const student1 = new Student(1, 'Oswaldo')
// const student2 = new Student(2, 'Karolina')

// student2.addSubject('Matematicas')
// student2.addSubject('Física')
// student2.addSubject('Química')
// student2.addSubject('Corte y Costura')
// student2.addSubject('Medicina')

// console.log(student2)
// student2.removeSubject('Matematicas')
// student2.removeSubject('Física')
// console.log(student2)

// student1.addSubject('Programación')
// student1.addSubject('Lógica y Programación')

// console.log(student1)

// student1.removeSubject('Programación')

// console.log(student1)

/**
 // 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 
 */

function Book(id, title, author, themes = []) {
  this.id = id
  this.title = title
  this.author = author
  this.themes = themes
}

Book.prototype.addThemeProperty = function (themeProperty) {
  this.themes = [...this.themes, themeProperty]
}

const book1 = new Book(1, 'Lord of the Rings', 'JRR Tolkien')
book1.addThemeProperty('Monsters')
console.log(book1)
