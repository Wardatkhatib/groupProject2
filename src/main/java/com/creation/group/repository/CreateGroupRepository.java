package com.creation.group.repository;


import com.creation.group.model.CreateGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreateGroupRepository extends JpaRepository<CreateGroup,Integer> {
}
