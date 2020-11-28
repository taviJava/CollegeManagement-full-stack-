package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.model.ProfesorModel;
import com.sda.school.repository.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ProfesorController {
@Autowired
    private ProfesorRepository profesorRepository;

    @GetMapping("/profesors")
    public List<ProfesorModel> getProfesors() {
        return profesorRepository.findAll();
    }
    @PostMapping("/profesors")
    public void addProfesor(@RequestBody ProfesorModel profesorModel) {
        profesorRepository.save(profesorModel);
    }
    @DeleteMapping("/profesors/{id}")
    public void deleteProfesor(@PathVariable(name = "id") Long id) {
        profesorRepository.deleteById(id);
    }
    @GetMapping("/profesors/{id}")
    public ProfesorModel getProfesor(@PathVariable(name = "id") Long id) {
      return   profesorRepository.findById(id).orElse(null);
    }
    @PutMapping("/profesors")
    public void updateProfesor(@RequestBody ProfesorModel profesorModel) {
        ProfesorModel profToBeUpdated=profesorRepository.findById(profesorModel.getId()).orElse(null);
        profToBeUpdated.setName(profesorModel.getName());
        profToBeUpdated.setPhoneNumber(profesorModel.getPhoneNumber());
        profToBeUpdated.setMateriaModelList(profesorModel.getMateriaModelList());
        profesorRepository.save(profesorModel);
    }


}
