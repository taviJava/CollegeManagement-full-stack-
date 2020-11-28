package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.model.ClassroomModel;
import com.sda.school.repository.ClassroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ClassroomController {
    @Autowired
    private ClassroomRepository classroomRepository;

    @GetMapping("/classroom")
    public List<ClassroomModel> getClassroom() {
        return classroomRepository.findAll();
    }
    @PostMapping("/classroom")
    public void addProfesor(@RequestBody ClassroomModel classroomModel) {
        classroomRepository.save(classroomModel);
    }
    @DeleteMapping("/classroom/{id}")
    public void deleteClassroom(@PathVariable(name = "id") Long id) {
        classroomRepository.deleteById(id);
    }
    @GetMapping("/classroom/{id}")
    public ClassroomModel getProfesor(@PathVariable(name = "id") Long id) {
        return   classroomRepository.findById(id).orElse(null);
    }
    @PutMapping("/classroom")
    public void updateClassroom(@RequestBody ClassroomModel classroomModel) {
        ClassroomModel classToBeUpdated=classroomRepository.findById(classroomModel.getId()).orElse(null);
        classToBeUpdated.setName(classroomModel.getName());
        classroomRepository.save(classroomModel);
    }
}
