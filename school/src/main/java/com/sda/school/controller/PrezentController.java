package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.PrezentDto;
import com.sda.school.service.PrezentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class PrezentController {
    @Autowired
    private PrezentService prezentService;


    @GetMapping("/prezent")
    public List<PrezentDto> getPrezents() {
        return prezentService.getAll();
    }
    @PostMapping("/prezent")
    public void add(@RequestBody PrezentDto prezentDto) {
        prezentService.save(prezentDto);
    }
    @DeleteMapping("/prezent/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        prezentService.delete(id);
    }
    @GetMapping("/prezent/{id}")
    public PrezentDto getProfesor(@PathVariable(name = "id") Long id) {
        return   prezentService.getOne(id);
    }
    @PutMapping("/prezent")
    public void update(@RequestBody PrezentDto prezentDto) {
     prezentService.update(prezentDto);
    }
}
