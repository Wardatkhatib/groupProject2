package com.creation.group.service;

import com.creation.group.model.Register;

import java.util.List;

public interface RegisterService {
    public Register saveRegister(Register register);
    public List<Register> getAll();
    public Register updateRegister(Register register);
    public void deleteRegister(Integer Id);
}
