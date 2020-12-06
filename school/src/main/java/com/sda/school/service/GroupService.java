package com.sda.school.service;

import com.sda.school.persistance.dto.GroupDto;
import com.sda.school.persistance.dto.StudentDto;
import com.sda.school.persistance.model.GroupModel;
import com.sda.school.persistance.model.StudentModel;
import com.sda.school.repository.GroupRepository;
import com.sda.school.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private StudentRepository studentRepository;

    public void save(GroupDto groupDto){
        GroupModel groupModel = new GroupModel();
        groupModel.setName(groupDto.getName());
        groupRepository.save(groupModel);
    }

    public void update(GroupDto groupDto){
        Optional<GroupModel> groupModelOptional = groupRepository.findById(groupDto.getId());
        if (groupModelOptional.isPresent()){
            GroupModel groupModel = groupModelOptional.get();
            groupModel.setName(groupDto.getName());
            List<StudentModel> studentModels = new ArrayList<>();
            for (StudentDto studentDto: groupDto.getStudentModelList()){
                Optional<StudentModel> studentModelOptional = studentRepository.findById(studentDto.getId());
                if (studentModelOptional.isPresent()){
                    StudentModel studentModel = studentModelOptional.get();
                    studentModel.setGroupModel(groupModel);
                    studentRepository.save(studentModel);
                }
            }
            groupModel.setStudentModelList(studentModels);
            groupRepository.save(groupModel);
        }
    }

    public void delete(long id){
        groupRepository.deleteById(id);
    }

  public  List<GroupDto> getAll(){
        List<GroupModel> groupModels = groupRepository.findAll();
        List<GroupDto> groupDtos = new ArrayList<>();
        for (GroupModel groupModel: groupModels){
            GroupDto groupDto = new GroupDto();
            groupDto.setId(groupModel.getId());
            groupDto.setName(groupModel.getName());
            groupDtos.add(groupDto);
        }
        return groupDtos;
    }
   public GroupDto getOne(long id){
       Optional<GroupModel> groupModelOptional = groupRepository.findById(id);
       GroupDto groupDto = new GroupDto();
       if (groupModelOptional.isPresent()){
           GroupModel groupModel = groupModelOptional.get();
          groupDto.setName(groupModel.getName());
          groupDto.setId(groupModel.getId());
       }
       return groupDto;
   }

}
