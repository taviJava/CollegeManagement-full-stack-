package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.GroupDto;
import com.sda.school.persistance.model.GroupModel;
import com.sda.school.repository.GroupRepository;
import com.sda.school.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class GroupController {
    @Autowired
    private GroupService groupService;

    @GetMapping("/group")
    public List<GroupDto> getGroups() {
        return groupService.getAll();
    }
    @PostMapping("/group")
    public void add(@RequestBody GroupDto groupDto) {
        groupService.save(groupDto);
    }
    @DeleteMapping("/group/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        groupService.delete(id);
    }
    @GetMapping("/group/{id}")
    public GroupDto getGroup(@PathVariable(name = "id") Long id) {
        return   groupService.getOne(id);
    }
    @PutMapping("/group")
    public void update(@RequestBody GroupDto groupDto) {
        groupService.update(groupDto);
    }
}
