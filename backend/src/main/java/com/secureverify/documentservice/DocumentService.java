package com.secureverify.documentservice;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class DocumentService {

    public void uploadDocument(MultipartFile file) throws IOException {

        // Use absolute project directory
        String projectDir = System.getProperty("user.dir");
        String uploadDir = projectDir + File.separator + "uploads";

        File dir = new File(uploadDir);
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            System.out.println("Upload directory created: " + created);
        }

        String filePath = uploadDir + File.separator + file.getOriginalFilename();
        File destination = new File(filePath);

        file.transferTo(destination);

        // Logs for confirmation
        System.out.println("===== FILE UPLOADED SUCCESSFULLY =====");
        System.out.println("File name : " + file.getOriginalFilename());
        System.out.println("File size : " + file.getSize());
        System.out.println("Saved at  : " + filePath);
        System.out.println("=====================================");
    }
}
