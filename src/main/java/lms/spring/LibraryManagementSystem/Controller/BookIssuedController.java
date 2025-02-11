package lms.spring.LibraryManagementSystem.Controller;

import lms.spring.LibraryManagementSystem.Model.Book;
import lms.spring.LibraryManagementSystem.Model.BookIssued;
import lms.spring.LibraryManagementSystem.Service.BookIssuedService;
import lms.spring.LibraryManagementSystem.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookissued")
public class BookIssuedController {

    @Autowired
    BookIssuedService bookIssuedService;

    @Autowired
    BookService bookService;

    @PostMapping("/save")
    public ResponseEntity<BookIssued> saveBookIssued(@RequestBody BookIssued bookIssued){
        List<Book> existedBook = bookService.getBookById(bookIssued.getBookid());
        if(existedBook.size() == 0){
            return ResponseEntity.badRequest().build();
        }
        Book book = existedBook.get(0);
        book.setAvailableCopies(book.getAvailableCopies()-1);
        return ResponseEntity.ok(bookIssuedService.addBookIssued(bookIssued));
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<BookIssued> getBookIssuedById(@PathVariable(value = "id") Long id){
        if(id == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookIssuedService.getBookIssuedById(id) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookIssuedService.getBookIssuedById(id));
    }

    @PutMapping("/update")
    public ResponseEntity<BookIssued> updateBookIssued(@RequestBody BookIssued bookIssued){
        if(bookIssuedService.getBookIssuedById(bookIssued.getId()) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(bookIssuedService.updateBookIssued(bookIssued));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBookIssued(@PathVariable(value = "id") Long id){
        if(bookIssuedService.getBookIssuedById(id) == null){
            return ResponseEntity.notFound().build();
        }
        bookIssuedService.deleteBookIssued(id);
        return ResponseEntity.ok().body("Book Issued with id: "+id+" deleted successfully");
    }

    @GetMapping("/issueddate/{issueddate}")
    public ResponseEntity<List<BookIssued>> getBookIssuedByIssueddate(@PathVariable(value = "issueddate") String issueddate){
        if(issueddate == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookIssuedService.getBookIssuedByIssueddate(issueddate).size() == 0){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookIssuedService.getBookIssuedByIssueddate(issueddate));
    }

    @GetMapping("/bookid/{bookid}")
    public ResponseEntity<List<BookIssued>> getBookIssuedByBookid(@PathVariable(value = "bookid") Long bookid){
        if(bookid == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookIssuedService.getBookIssuedByBookid(bookid).size() == 0){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookIssuedService.getBookIssuedByBookid(bookid));
    }

    @GetMapping("/userid/{userid}")
    public ResponseEntity<List<BookIssued>> getBookIssuedByUserid(@PathVariable(value = "userid") Long userid){
        if(userid == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookIssuedService.getBookIssuedByUserid(userid).size() == 0){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookIssuedService.getBookIssuedByUserid(userid));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<BookIssued>> getBookIssuedByStatus(@PathVariable(value = "status") String status){
        if(status == null){
            return ResponseEntity.badRequest().build();
        }
        if(bookIssuedService.getBookIssuedByStatus(status).size() == 0){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookIssuedService.getBookIssuedByStatus(status));
    }

    @GetMapping("/isReturned/{isReturned}")
    public ResponseEntity<List<BookIssued>> getBookIssuedByIsReturned(@PathVariable(value = "isReturned") boolean isReturned){
        if(bookIssuedService.getBookIssuedByIsReturned(isReturned).size() == 0){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(bookIssuedService.getBookIssuedByIsReturned(isReturned));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<BookIssued>> getAllBookIssued(){
        return ResponseEntity.ok().body(bookIssuedService.getAllBookIssued());
    }


}
