package lms.spring.LibraryManagementSystem.Repository;

import lms.spring.LibraryManagementSystem.Model.BookIssued;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookIssuedRepo extends JpaRepository<BookIssued , Long> {
    List<BookIssued> findBookIssuedByIssuedate(String issuedate);

    List<BookIssued> findBookIssuedByBookid(Long bookid);

    List<BookIssued> findBookIssuedByUserid(Long userid);

    List<BookIssued> findBookIssuedByStatus(String status);

    List<BookIssued> findBookIssuedByIsReturned(boolean isReturned);
}
