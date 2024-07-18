package com.creation.group.service;

import com.creation.group.model.StudentCri;

import java.util.List;

public interface StudentCriServices {
    public StudentCri saveStd(StudentCri studentCri);
    List<List<StudentCri>> getStudentGroups(int groupSize);

}
