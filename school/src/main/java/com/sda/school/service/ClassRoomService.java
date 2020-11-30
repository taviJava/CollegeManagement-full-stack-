package com.sda.school.service;

import com.sda.school.persistance.dto.ClassRoomDto;
import com.sda.school.persistance.model.ClassroomModel;
import com.sda.school.repository.ClassroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClassRoomService {
    @Autowired
    private ClassroomRepository classroomRepository;

    public void save(ClassRoomDto classRoomDto){
        ClassroomModel classroomModel = new ClassroomModel();
        classroomModel.setName(classRoomDto.getName());
        classroomRepository.save(classroomModel);
    }

    public void update(ClassRoomDto classRoomDto){
        Optional<ClassroomModel> optionalClassroomModel = classroomRepository.findById(classRoomDto.getId());
        if(optionalClassroomModel.isPresent()){
            ClassroomModel classroomModel = optionalClassroomModel.get();
            classroomModel.setName(classRoomDto.getName());
            classroomRepository.save(classroomModel);
        }
    }
    public void delete(long id){
        classroomRepository.deleteById(id);
    }
    public List<ClassRoomDto> getAll(){
        List<ClassroomModel> classroomModels = classroomRepository.findAll();
        List<ClassRoomDto> classRoomDtos = new ArrayList<>();
        for (ClassroomModel classroomModel: classroomModels){
            ClassRoomDto classRoomDto = new ClassRoomDto();
            classRoomDto.setId(classroomModel.getId());
            classRoomDto.setName(classroomModel.getName());
            classRoomDtos.add(classRoomDto);
        }
        return classRoomDtos;
    }
    public ClassRoomDto getOne(long id){
        Optional<ClassroomModel> classroomModelOptional = classroomRepository.findById(id);
        ClassRoomDto classRoomDto = new ClassRoomDto();
        if (classroomModelOptional.isPresent()){
            ClassroomModel classroomModel = classroomModelOptional.get();
            classRoomDto.setId(classroomModel.getId());
            classRoomDto.setName(classroomModel.getName());
        }
        return classRoomDto;
    }
}
