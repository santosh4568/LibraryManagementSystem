import axios from "axios";

const BOOK_ISSUED_API_BASE_URL = "http://localhost:8080/bookissued";

export async function createIssuedBook(book) {
    return axios.post(`${BOOK_ISSUED_API_BASE_URL}/save`, book);
}

export async function fetchIssuedBookById(id) {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/id/${id}`);
}

export async function updateIssuedBook(book) {
    return axios.put(`${BOOK_ISSUED_API_BASE_URL}/update`, book);
}

export async function deleteIssuedBook(id) {
    return axios.delete(`${BOOK_ISSUED_API_BASE_URL}/delete/${id}`);
}


export async function fetchIssuedBookByIssueDate(issueDate) {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/issueddate/${issueDate}`);
}

export async function fetchIssuedBookByReturnDate(returnDate) {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/returndate/${returnDate}`);
}

export async function fetchIssuedBookByUserId(userId) {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/userid/${userId}`);
}

export async function fetchIssuedBookByBookId(bookId) {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/bookid/${bookId}`);
}

export async function fetchIssuedBookByStatus(status) {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/status/${status}`);
}

export async function fetchAllIssuedBooks() {
    return axios.get(`${BOOK_ISSUED_API_BASE_URL}/getAll`);
}  
