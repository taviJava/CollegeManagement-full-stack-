package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.model.GroupModel;
import com.sda.school.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class GroupController {
    @Autowired
    private GroupRepository groupRepository;

    @GetMapping("/group")
    public List<GroupModel> getGroups() {
        return groupRepository.findAll();
    }
    @PostMapping("/group")
    public void add(@RequestBody GroupModel groupModel) {
        groupRepository.save(groupModel);
    }
    @DeleteMapping("/group/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        groupRepository.deleteById(id);
    }
    @GetMapping("/group/{id}")
    public GroupModel getGroup(@PathVariable(name = "id") Long id) {
        return   groupRepository.findById(id).orElse(null);
    }
    @PutMapping("/group")
    public void update(@RequestBody GroupModel groupModel) {
        GroupModel groupToBeUpdated=groupRepository.findById(groupModel.getId()).orElse(null);
        groupToBeUpdated.setName(groupModel.getName());
        groupRepository.save(groupModel);
    }
}
