import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.js';

dotenv.config();

const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    description: "A classic American novel set in the Jazz Age.",
    stock: 15,
    cover: "https://example.com/gatsby.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.99,
    description: "A powerful story about racial injustice and childhood.",
    stock: 20,
    cover: "https://example.com/mockingbird.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 13.99,
    description: "A dystopian novel about surveillance and totalitarian control.",
    stock: 25,
    cover: "https://example.com/1984.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    description: "A witty romance exploring class and marriage in 19th-century England.",
    stock: 18,
    cover: "https://example.com/pride-and-prejudice.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 10.99,
    description: "A teenager's journey through alienation and identity in New York City.",
    stock: 12,
    cover: "https://example.com/catcher-in-the-rye.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 15.99,
    description: "A fantasy adventure following Bilbo Baggins on an unexpected journey.",
    stock: 30,
    cover: "https://example.com/the-hobbit.jpg"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Book.deleteMany({});
    console.log('Cleared existing books');

    await Book.insertMany(sampleBooks);
    console.log('Sample books inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();