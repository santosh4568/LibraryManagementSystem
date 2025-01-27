package lms.spring.LibraryManagementSystem.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String title;
        private String author;
        private String publisher;
        private int price;
        private String category;
        private String language;
        private int totalCopies;
        private int availableCopies;

        public Book() {
        }

        public Book(Long id, String title, String author, String publisher, int price, String category, String language, int totalCopies, int availableCopies) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.publisher = publisher;
            this.price = price;
            this.category = category;
            this.language = language;
            this.totalCopies = totalCopies;
            this.availableCopies = availableCopies;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getAuthor() {
            return author;
        }

        public void setAuthor(String author) {
            this.author = author;
        }

        public String getPublisher() {
            return publisher;
        }

        public void setPublisher(String publisher) {
            this.publisher = publisher;
        }

        public int getPrice() {
            return price;
        }

        public void setPrice(int price) {
            this.price = price;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public String getLanguage() {
            return language;
        }

        public void setLanguage(String language) {
            this.language = language;
        }

        public int getTotalCopies() {
            return totalCopies;
        }

        public void setTotalCopies(int totalCopies) {
            this.totalCopies = totalCopies;
        }

        public int getAvailableCopies() {
            return availableCopies;
        }

        public void setAvailableCopies(int availableCopies) {
            this.availableCopies = availableCopies;
        }
}
