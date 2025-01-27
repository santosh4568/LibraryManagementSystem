package lms.spring.LibraryManagementSystem.Controller;

import lms.spring.LibraryManagementSystem.Model.Book;
import lms.spring.LibraryManagementSystem.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping("/save")
    public ResponseEntity<Book> saveBook(@RequestBody Book book){
        return ResponseEntity.ok(bookService.addBook(book));
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<List<Book>> getBookByTitle(@PathVariable(value = "title") String title){
        if(title == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookService.getBookByTitle(title) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookService.getBookByTitle(title));
    }

    @GetMapping("/author/{author}")
    public ResponseEntity<List<Book>> getBookByAuthor(@PathVariable(value = "author") String author){
        if(author == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookService.getBookByAuthor(author) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookService.getBookByAuthor(author));
    }

    @GetMapping("/publisher/{publisher}")
    public ResponseEntity<List<Book>> getBookByPublisher(@PathVariable(value = "publisher") String publisher){
        if(publisher == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookService.getBookByPublisher(publisher) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookService.getBookByPublisher(publisher));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Book>> getBookByCategory(@PathVariable(value = "category") String category){
        if(category == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookService.getBookByCategory(category) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookService.getBookByCategory(category));
    }

    @GetMapping("/language/{language}")
    public ResponseEntity<List<Book>> getBookByLanguage(@PathVariable(value = "language") String language){
        if(language == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookService.getBookByLanguage(language) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookService.getBookByLanguage(language));
    }

    @PutMapping("/update")
    public ResponseEntity<Book> updateBook(@RequestBody Book book){
        if(!bookService.findBookById(book.getId())){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(bookService.updateBook(book));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable(value = "id") Long id){
        if(!bookService.findBookById(id)){
            return ResponseEntity.notFound().build();
        }
        bookService.deleteBook(id);
        return ResponseEntity.ok("Book Deleted Successfully");
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Book>> getAllBooks(){
        return ResponseEntity.ok(bookService.getAllBooks());
    }

}
