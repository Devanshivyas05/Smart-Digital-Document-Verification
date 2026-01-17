package com.secureverify.controller;

import com.secureverify.dto.LoginRequest;
import com.secureverify.dto.RegisterRequest;
import com.secureverify.dto.UserResponse;
import com.secureverify.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // REGISTER API (UI: Signup screen)
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    // LOGIN API (UI: Login screen)
    @PostMapping("/login")
    public UserResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    // GET USER BY ID (UI: Profile / Dashboard)
    @GetMapping("/{id}")
    public UserResponse getUserById(@PathVariable Long id) {
        return authService.getUserById(id);
    }
}

