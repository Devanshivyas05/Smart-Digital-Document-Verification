package com.secureverify.documentcontrollor;

import com.secureverify.documentservice.DocumentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "*") // allows Postman and future frontend
public class DocumentController {

    private final DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> upload(
            @RequestParam("file") MultipartFile file
    ) throws Exception {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is empty");
        }

        documentService.uploadDocument(file);

        return ResponseEntity.ok(
                "File uploaded successfully: " + file.getOriginalFilename()
        );
    }
}
