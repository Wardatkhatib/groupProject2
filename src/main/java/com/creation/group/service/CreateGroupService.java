package com.creation.group.service;

import com.creation.group.model.CreateGroup;
import com.creation.group.repository.CreateGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CreateGroupService implements CreateGroupServices{

    @Autowired
    private CreateGroupRepository createGroupRepository;
    @Override
   public CreateGroup saveCreateGroup( CreateGroup createGroup) {
        return createGroupRepository.save(createGroup);}

    @Override
    public List<CreateGroup>getAllCreateGroup(){

        return createGroupRepository.findAll();
    }

    @Override
    public CreateGroup updateCreateGroup(CreateGroup createGroup) {
        return createGroupRepository.save(createGroup);
    }

    @Override
    public void deleteCreateGroup
            (Integer Id) {
        createGroupRepository.deleteById(Id);
    }

    @Override
    public long countCreateGroups(String createGroup) {
        return 0;
    }

    public long countCreateGroups() {
        return createGroupRepository.count();
    }

}
