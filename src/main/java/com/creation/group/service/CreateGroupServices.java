package com.creation.group.service;


import com.creation.group.model.CreateGroup;

import java.util.List;

public interface CreateGroupServices {
    public CreateGroup saveCreateGroup(CreateGroup createGroup);
    public List<CreateGroup> getAllCreateGroup();
    public CreateGroup updateCreateGroup(CreateGroup createGroup);
    public void deleteCreateGroup(Integer Id);
    long countCreateGroups(String createGroup);

    long countCreateGroups();
}
