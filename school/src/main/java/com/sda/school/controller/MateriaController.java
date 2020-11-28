package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.model.MateriaModel;
import com.sda.school.repository.MateriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class MateriaController {
    @Autowired
    private MateriaRepository materiaRepository;
    @GetMapping("/materia")
    public List<MateriaModel> getMateria() {
        return materiaRepository.findAll();
    }
    @PostMapping("/materia")
    public void addMateria(@RequestBody MateriaModel materiaModel) {
        materiaRepository.save(materiaModel);
    }
    @DeleteMapping("/materia/{id}")
    public void deleteMateria(@PathVariable(name = "id") Long id) {
        materiaRepository.deleteById(id);
    }
    @GetMapping("/materia/{id}")
    public MateriaModel getMateriabyId(@PathVariable(name = "id") Long id) {
        return materiaRepository.findById(id).orElse(null);
    }
    @PutMapping("/materia")
    public void updateMateria(@RequestBody MateriaModel materiaModel) {
        materiaRepository.save(materiaModel);
    }
}
