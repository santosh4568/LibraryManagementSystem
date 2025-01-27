package lms.spring.LibraryManagementSystem.Service;


import lms.spring.LibraryManagementSystem.Model.Book;
import lms.spring.LibraryManagementSystem.Repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepo bookRepo;

    public Book addBook(Book book){
        return bookRepo.save(book);
    }

    public List<Book> getBookByTitle(String title){
        return bookRepo.findAllByTitle(title);
    }

    public List<Book> getBookByAuthor(String author){
        return bookRepo.findAllByAuthor(author);
    }

    public List<Book> getBookByPublisher(String publisher){
        return bookRepo.findAllByPublisher(publisher);
    }

    public List<Book> getBookByCategory(String category){
        return bookRepo.findAllByCategory(category);
    }

    public List<Book> getBookByLanguage(String language){
        return bookRepo.findAllByLanguage(language);
    }

    public Book updateBook(Book book) {
        if(bookRepo.findById(book.getId()).isPresent()){
            return bookRepo.save(book);
        }
        else{
            return null;
        }
    }

    public boolean findBookById(Long id) {
        return bookRepo.findById(id).isPresent();
    }

    public void deleteBook(Long id) {
        bookRepo.deleteById(id);
    }

    public List<Book> getAllBooks(){
        return bookRepo.findAll();
    }

}
