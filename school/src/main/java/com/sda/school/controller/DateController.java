package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.model.DateModel;
import com.sda.school.repository.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class DateController {
    @Autowired
    private DateRepository dateRepository;

    @GetMapping("/date")
    public List<DateModel> getDataModelList() {
        return dateRepository.findAll();
    }

    @PostMapping("/date")
    public void addDate(@RequestBody DateModel dateModel) {
        dateRepository.save(dateModel);
    }

    @DeleteMapping("/date/{id}")
    public void deleteDate(@PathVariable(name = "id") Long id) {
        dateRepository.deleteById(id);
    }
    @PutMapping("/date")
    public void updateDate(@RequestBody DateModel dateModel) {
        dateRepository.save(dateModel);
    }
}
