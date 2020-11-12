package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.model.ClassroomModel;
import com.sda.school.model.StudentModel;
import com.sda.school.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/student")
    public List<StudentModel> getStudents() {
        return studentRepository.findAll();
    }
    @PostMapping("/student")
    public void add(@RequestBody StudentModel classroomModel) {
        studentRepository.save(classroomModel);
    }
    @DeleteMapping("/student/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        studentRepository.deleteById(id);
    }
    @GetMapping("/student/{id}")
    public StudentModel getStudent(@PathVariable(name = "id") Long id) {
        return   studentRepository.findById(id).orElse(null);
    }
    @PutMapping("/student")
    public void update(@RequestBody StudentModel studentModel) {
        StudentModel studentToBeUpdated=studentRepository.findById(studentModel.getId()).orElse(null);
        studentToBeUpdated.setFirstName(studentModel.getFirstName());
        studentToBeUpdated.setLastName(studentModel.getLastName());
        studentToBeUpdated.setCnp(studentModel.getCnp());
        studentToBeUpdated.setGroupModel(studentModel.getGroupModel());
        studentRepository.save(studentToBeUpdated);
    }
}
