package com.creation.group.service;

import com.creation.group.model.StudentCri;
import com.creation.group.repository.StudentCriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentCriService implements StudentCriServices {
    @Autowired
    private StudentCriRepository studentCriRepository;
    @Override
    public StudentCri saveStd(StudentCri studentCri){
        return studentCriRepository.save(studentCri);
    }

    public List<List<StudentCri>> getStudentGroups(int groupSize) {
        List<StudentCri> students = studentCriRepository.findAll();
        List<List<StudentCri>> groups = new ArrayList<>();

        for (int i = 0; i < students.size(); i += groupSize) {
            groups.add(students.subList(i, Math.min(i + groupSize, students.size())));
        }

        return groups;
    }

}
