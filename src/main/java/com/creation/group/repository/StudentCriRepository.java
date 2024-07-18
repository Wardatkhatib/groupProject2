package com.creation.group.repository;

import com.creation.group.model.StudentCri;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentCriRepository extends JpaRepository<StudentCri,Integer> {
}
