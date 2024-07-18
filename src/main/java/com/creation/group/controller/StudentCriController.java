package com.creation.group.controller;

import com.creation.group.model.StudentCri;
import com.creation.group.service.StudentCriService;
import com.creation.group.service.StudentCriServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/StdCri")
@CrossOrigin
public class StudentCriController {
    @Autowired
    public StudentCriServices studentCriServices;
    @PostMapping("/std")
    public String saveStd(@RequestBody StudentCri studentCri){
        studentCriServices.saveStd(studentCri);
        return "Student Critical Successful";
    }
    @GetMapping("/groups")
    public List<List<StudentCri>> getStudentGroups() {
        return studentCriServices.getStudentGroups(3);

    }
}

