const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booklist");

const bookSeed = [
  {
    image:
      "http://books.google.com/books/content?id=pMHlxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "Love",
    authors: "Sesame Workshop",
    description:
      "The New York Times Bestseller from Sesame Street! Love is infinite. Love is giggles. Love is cookies. Explore all the definitions of love with your friends from Sesame Street! In this new format of the New York Times bestselling picture book, beloved Sesame characters share what love means to them. This warm and uplifting book will show children new ways to look for love in everyday life--and brighten their day!",
    date: new Date(Date.now()),
  },

  {
    image:
      "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "Harry Potter and the Sorcerer's Stone",
    authors: "J.K. Rowling",
    synopsis:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    date: new Date(Date.now()),
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
