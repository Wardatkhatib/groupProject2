package com.creation.group.controller;


import com.creation.group.model.CreateGroup;
import com.creation.group.service.CreateGroupService;
import com.creation.group.service.CreateGroupServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Create")
@CrossOrigin

public class CreateGroupController {
    @Autowired
    private CreateGroupServices createGroupServices;

    @PostMapping("/addCreate")
    public String saveCreateGroup(@RequestBody CreateGroup createGroup){
        createGroupServices.saveCreateGroup(createGroup);
        return "Well Done";
    }

    @GetMapping("/getCreate")
    public List<CreateGroup> getAllCreateGroup(CreateGroup createGroup){
        return createGroupServices.getAllCreateGroup();
    }

    @PutMapping("/update/{id}")
    public CreateGroup updateCreateGroup(@PathVariable Integer id, @RequestBody CreateGroup createGroup){
        createGroup.setId(id);
        return createGroupServices.updateCreateGroup(createGroup);

    }

    @DeleteMapping("/delate")
    public void deleteCreateGroup(@RequestParam Integer id){
        createGroupServices.deleteCreateGroup(id);
    }

    @GetMapping("/count")
    public long countCreateGroups(CreateGroup createGroup) {
        return createGroupServices.countCreateGroups();
    }
}
