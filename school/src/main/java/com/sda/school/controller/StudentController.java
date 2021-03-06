package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.StudentDto;
import com.sda.school.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/student")
    public List<StudentDto> getStudents() {
        return studentService.getAll();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/student/group")
    public List<StudentDto> getStudentsWithOutGroup() {
        return studentService.getStudentsWithOutGroup();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/student")
    public void add(@RequestBody StudentDto studentDto) {
        studentService.registerStud(studentDto);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/student/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        studentService.delete(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/student/{id}")
    public StudentDto getStudent(@PathVariable(name = "id") Long id) {
        return   studentService.getOne(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/student")
    public void update(@RequestBody StudentDto studentDto) {
        studentService.update(studentDto);
    }
}
