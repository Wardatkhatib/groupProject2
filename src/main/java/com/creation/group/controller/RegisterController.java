package com.creation.group.controller;


import com.creation.group.model.Register;
import com.creation.group.service.RegisterService;
import com.creation.group.service.RegisterService1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/group")
@CrossOrigin
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/reg")
    public String saveRegister(@RequestBody Register register){
        registerService.saveRegister(register);
        return "Successfull";
    }
    @GetMapping("/getReg")
    public List<Register> getAll(Register register){
        return registerService.getAll();
    }

    @PutMapping("/update/{id}")
    public Register updateRegister(@PathVariable Integer id, @RequestBody Register register) {
        register.setId(id);
        return registerService.updateRegister(register);
    }

    @DeleteMapping("/delate")
    public void  deleteRegister(@RequestParam Integer id){
        registerService.deleteRegister(id);
    }
}
