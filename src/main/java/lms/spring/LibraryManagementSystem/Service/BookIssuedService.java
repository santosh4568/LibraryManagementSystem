package lms.spring.LibraryManagementSystem.Service;

import lms.spring.LibraryManagementSystem.Model.BookIssued;
import lms.spring.LibraryManagementSystem.Repository.BookIssuedRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookIssuedService {

    @Autowired
    BookIssuedRepo bookIssuedRepo;

    public BookIssued addBookIssued(BookIssued bookIssued){
        return bookIssuedRepo.save(bookIssued);
    }

    public BookIssued getBookIssuedById(Long id){
        return bookIssuedRepo.findById(id).orElse(null);
    }

    public BookIssued updateBookIssued(BookIssued bookIssued){
        return bookIssuedRepo.save(bookIssued);
    }

    public void deleteBookIssued(Long id){
        bookIssuedRepo.deleteById(id);
    }

    public List<BookIssued> getBookIssuedByIssueddate(String issueddate){
        return bookIssuedRepo.findBookIssuedByIssuedate(issueddate);
    }

    public List<BookIssued> getBookIssuedByBookid(Long bookid){
        return bookIssuedRepo.findBookIssuedByBookid(bookid);
    }

    public List<BookIssued> getBookIssuedByUserid(Long userid){
        return bookIssuedRepo.findBookIssuedByUserid(userid);
    }

    public List<BookIssued> getBookIssuedByStatus(String status){
        return bookIssuedRepo.findBookIssuedByStatus(status);
    }

    public List<BookIssued> getBookIssuedByIsReturned(boolean isReturned){
        return bookIssuedRepo.findBookIssuedByIsReturned(isReturned);
    }


    public List<BookIssued> getAllBookIssued() {
        return bookIssuedRepo.findAll();
    }
}
