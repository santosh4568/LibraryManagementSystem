import axios from "axios";

const BOOK_API_BASE_URL = "http://localhost:8080/book";

export async function fetchBooks() {
    return axios.get(`${BOOK_API_BASE_URL}/getAll`);
}

export async function fetchBookByTitle(title) {
    return axios.get(`${BOOK_API_BASE_URL}/title/${title}`);
}

export async function fetchBookByAuthor(author) {
    return axios.get(`${BOOK_API_BASE_URL}/author/${author}`);
}

export async function fetchBookByPublisher(publisher) {
    return axios.get(`${BOOK_API_BASE_URL}/publisher/${publisher}`);
}

export async function fetchBookByCategory(category) {
    return axios.get(`${BOOK_API_BASE_URL}/category/${category}`);
}

export async function fetchBookByLanguage(language) {
    return axios.get(`${BOOK_API_BASE_URL}/language/${language}`);
}

export async function createBook(book) {
    return axios.post(`${BOOK_API_BASE_URL}/save`, book);
}

export async function updateBook(book) {
    return axios.put(`${BOOK_API_BASE_URL}/update`, book);
}

export async function deleteBook(id) {
    return axios.delete(`${BOOK_API_BASE_URL}/delete/${id}`);
}

