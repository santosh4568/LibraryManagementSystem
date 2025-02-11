package lms.spring.LibraryManagementSystem.Controller;

import lms.spring.LibraryManagementSystem.Model.User;
import lms.spring.LibraryManagementSystem.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return ResponseEntity.ok(userService.addUser(user));
    }

    @PostMapping("/{mail}")
    public ResponseEntity<User> getUserByEmail(@PathVariable(value = "mail") String email){
        if(email == null){
            return ResponseEntity.badRequest().build();
        }
        if(userService.getUserByEmail(email) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(userService.getUserByEmail(email));
    }

    @GetMapping("/{regd}")
    public ResponseEntity<User> getUserByRegdNo(@PathVariable(value = "regd") String regdNo){
        if(regdNo == null){
            return ResponseEntity.badRequest().build();
        }
        if(userService.getUserByRegdNo(regdNo) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(userService.getUserByRegdNo(regdNo));
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long id){
        if(id == null){
            return ResponseEntity.badRequest().build();
        }
        if(userService.getUserById(id) == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(userService.getUserById(id));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        if(!userService.findUserById(user.getId())){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userService.updateUser(user));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable(value = "id") Long id){
        if(!userService.findUserById(id)){
            return ResponseEntity.notFound().build();
        }
        userService.deleteUser(id);
        return ResponseEntity.ok("User Deleted Successfully");
    }
}
