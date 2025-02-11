package lms.spring.LibraryManagementSystem.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "bookissued")
public class BookIssued {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long bookid;
    private Long userid;
    private String issuedate;
    private String returndate;
    private String status = "Borrowed";
    private int fine = 0;
    private boolean isReturned = false;
    private int issueDuration;
    private String remarks;

    public BookIssued() {
    }

    public BookIssued(Long bookid, Long userid, String issuedate, String returndate) {
        this.bookid = bookid;
        this.userid = userid;
        this.issuedate = issuedate;
        this.returndate = returndate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBookid() {
        return bookid;
    }

    public void setBookid(Long bookid) {
        this.bookid = bookid;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getIssuedate() {
        return issuedate;
    }

    public void setIssuedate(String issuedate) {
        this.issuedate = issuedate;
    }

    public String getReturndate() {
        return returndate;
    }

    public void setReturndate(String returndate) {
        this.returndate = returndate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getFine() {
        return fine;
    }

    public void setFine(int fine) {
        this.fine = fine;
    }

    public boolean isReturned() {
        return isReturned;
    }

    public void setReturned(boolean isReturned) {
        this.isReturned = isReturned;
    }

    public int getIssueDuration() {
        return issueDuration;
    }

    public void setIssueDuration(int issueDuration) {
        this.issueDuration = issueDuration;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}