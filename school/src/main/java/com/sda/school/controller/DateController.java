package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.DateDto;
import com.sda.school.persistance.model.DateModel;
import com.sda.school.repository.DateRepository;
import com.sda.school.service.DateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class DateController {
    @Autowired
    private DateService dateService;

    @GetMapping("/date")
    public List<DateDto> getDataModelList() {
        return dateService.getAll();
    }

    @PostMapping("/date")
    public void addDate(@RequestBody DateDto dateDto) {
        dateService.save(dateDto);
    }

    @DeleteMapping("/date/{id}")
    public void deleteDate(@PathVariable(name = "id") Long id) {
        dateService.delete(id);
    }
    @PutMapping("/date")
    public void updateDate(@RequestBody DateDto dateDto) {
        dateService.update(dateDto);
    }
}
