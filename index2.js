function Book(title,author,genre,price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

function Author(name,birthYear,nationality){
this.name = name;
this.birthyear = birthYear;
this,nationality = nationality;
}

Book.prototype.getBookInfo = function(){
    console.log(`Title : ${this.title}`);
    console.log(`Author : ${this.author.name}`);
    console.log(`Genre : ${this.genre}`);
    console.log(`price : ${this.price}`);
}



const author1 = new Author("J.K. Rowling", 1965, "British");
const author2 = new Author("George Orwell", 1903, "British");


const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20.99);
const book2 = new Book("1984", author2, "Dystopian", 15.99);


book1.getBookInfo();
book2.getBookInfo();