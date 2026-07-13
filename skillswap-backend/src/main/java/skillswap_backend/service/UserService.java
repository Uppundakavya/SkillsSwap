package skillswap_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import skillswap_backend.entity.User;
import skillswap_backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    // Login User
    public User loginUser(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    // Get All Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get User By ID
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // Update User
    public User updateUser(Long id, User userDetails) {

        User user = userRepository.findById(id).orElse(null);

        if (user != null) {
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            user.setPassword(userDetails.getPassword());
            user.setCity(userDetails.getCity());
            user.setBio(userDetails.getBio());

            return userRepository.save(user);
        }

        return null;
    }

    // Delete User
    public String deleteUser(Long id) {

        User user = userRepository.findById(id).orElse(null);

        if (user != null) {
            userRepository.delete(user);
            return "User deleted successfully!";
        }

        return "User not found!";
    }
}