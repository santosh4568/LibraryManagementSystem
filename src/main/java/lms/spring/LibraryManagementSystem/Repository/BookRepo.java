package lms.spring.LibraryManagementSystem.Repository;

import lms.spring.LibraryManagementSystem.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepo extends JpaRepository<Book , Long> {

        List<Book> findAllByTitle(String title);

        List<Book> findBookById(Long id);
        List<Book> findAllByAuthor(String author);
        List<Book> findAllByPublisher(String publisher);
        List<Book> findAllByCategory(String category);
        List<Book> findAllByLanguage(String language);


}
