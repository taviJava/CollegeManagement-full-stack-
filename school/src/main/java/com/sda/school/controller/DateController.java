package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.DateDto;
import com.sda.school.persistance.message.ResponseMessage;
import com.sda.school.service.DateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("hasRole('ADMIN') || hasRole('PROFESSOR')")
    @PostMapping("/date/{profId}/{groupId}/{classId}")
    public ResponseMessage addDate(@RequestBody DateDto dateDto, @PathVariable(name = "profId") Long profId, @PathVariable(name = "groupId") Long groupId, @PathVariable(name = "classId") Long classId) {
        return new ResponseMessage(dateService.save(dateDto,profId,groupId,classId));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/date/{id}")
    public void deleteDate(@PathVariable(name = "id") Long id) {
        dateService.delete(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/date")
    public void updateDate(@RequestBody DateDto dateDto) {
        dateService.update(dateDto);
    }
}
