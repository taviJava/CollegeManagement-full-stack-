package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.ClassRoomDto;
import com.sda.school.service.ClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ClassroomController {
    @Autowired
    private ClassRoomService classRoomService;

    @GetMapping("/classroom")
    public List<ClassRoomDto> getClassroom() {
        return classRoomService.getAll();
    }
    @PostMapping("/classroom")
    public void addProfesor(@RequestBody ClassRoomDto classRoomDto) {

        classRoomService.save(classRoomDto);
    }
    @DeleteMapping("/classroom/{id}")
    public void deleteClassroom(@PathVariable(name = "id") Long id) {
        classRoomService.delete(id);
    }
    @GetMapping("/classroom/{id}")
    public ClassRoomDto getProfesor(@PathVariable(name = "id") Long id) {
        return   classRoomService.getOne(id);
    }
    @PutMapping("/classroom")
    public void updateClassroom(@RequestBody ClassRoomDto classRoomDto) {
       classRoomService.update(classRoomDto);
    }
}
