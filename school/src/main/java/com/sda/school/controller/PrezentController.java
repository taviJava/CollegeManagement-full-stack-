package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.model.PrezentModel;
import com.sda.school.model.ProfesorModel;
import com.sda.school.repository.PrezentRepository;
import com.sda.school.repository.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class PrezentController {
    @Autowired
    private PrezentRepository prezentRepository;


    @GetMapping("/prezent")
    public List<PrezentModel> getPrezents() {
        return prezentRepository.findAll();
    }
    @PostMapping("/prezent")
    public void add(@RequestBody PrezentModel prezentModel) {
        prezentRepository.save(prezentModel);
    }
    @DeleteMapping("/prezent/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        prezentRepository.deleteById(id);
    }
    @GetMapping("/prezent/{id}")
    public PrezentModel getProfesor(@PathVariable(name = "id") Long id) {
        return   prezentRepository.findById(id).orElse(null);
    }
    @PutMapping("/prezent")
    public void update(@RequestBody PrezentModel prezentModel) {
        PrezentModel prezToBeUpdated=prezentRepository.findById(prezentModel.getId()).orElse(null);
        prezToBeUpdated.setPresent(prezentModel.isPresent());
        prezentRepository.save(prezentModel);
    }
}
