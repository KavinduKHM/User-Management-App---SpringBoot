package com.example.demo.controller;

//Getting annotations for REST controller
import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value="/api/v1")

public class UserController {

    @Autowired // Dependency Injection
    private UserService userService;

    @GetMapping("/getUsers")
    public List<UserDTO> getUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/getUserById/{id}")
    public UserDTO getUserById(@PathVariable int id) { // Mapping path variable to id

        return userService.getUserById(id);
    }

    @PostMapping("/addUser")
    public UserDTO addUser(@RequestBody UserDTO userDTO){ // Mapping request body to UserDTO

        return userService.addUser(userDTO);
    }

    @PutMapping("/updateUser")
    public UserDTO updateUser(@RequestBody UserDTO userDTO){ // Mapping request body to UserDTO
        return userService.updateUser(userDTO);
    }

    @DeleteMapping("/deleteUser")
    public String deleteUser(@RequestBody UserDTO userDTO) { // Mapping request body to UserDTO
        return userService.deleteUser(userDTO);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUserById(@PathVariable int id) { // Mapping path variable to id
        return userService.deleteUserById(id);
    }
}


