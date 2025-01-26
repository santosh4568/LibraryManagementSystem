package lms.spring.LibraryManagementSystem.Service;


import lms.spring.LibraryManagementSystem.Model.User;
import lms.spring.LibraryManagementSystem.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User addUser(User user){
        return userRepo.save(user);
    }

    public User getUserByEmail(String email){
        return userRepo.findByEmail(email);
    }

    public User getUserByRegdNo(String regdNo){
        return userRepo.findByUsername(regdNo);
    }

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public User updateUser(User user) {
        if(userRepo.findById(user.getId()).isPresent()){
            return userRepo.save(user);
        }
        else{
            return null;
        }
    }

    public boolean findUserById(Long id) {
        return userRepo.findById(id).isPresent();
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }
}
