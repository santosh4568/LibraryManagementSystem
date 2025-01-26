package lms.spring.LibraryManagementSystem.Repository;

import lms.spring.LibraryManagementSystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User , Long> {

    User findByEmail(String email);

    User findByUsername(String username);
}
