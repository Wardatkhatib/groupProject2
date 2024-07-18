package com.creation.group.service;


import com.creation.group.model.Register;
import com.creation.group.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RegisterService1 implements RegisterService{
    @Autowired
    private RegisterRepository registerRepository;
    @Override
    public Register saveRegister(Register register){
        return registerRepository.save(register);
    }

    @Override
    public List<Register> getAll() {
        return registerRepository.findAll();
    }

    @Override
    public Register updateRegister(Register register) {
        return  registerRepository.save(register);
    }

    @Override
    public void  deleteRegister
            (Integer Id) {
        registerRepository.deleteById(Id);
    }
}
