package com.sda.school.service;

import com.sda.school.persistance.dto.StudentDto;
import com.sda.school.persistance.model.Role;
import com.sda.school.persistance.model.StudentModel;
import com.sda.school.repository.StudentRepository;
import com.sda.school.security.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService extends UserDetailService {
    @Autowired
    private StudentRepository studentRepository;

    public void save(StudentDto studentDto) {
        StudentModel studentModel = new StudentModel();
        studentModel.setCnp(studentDto.getCnp());
        studentModel.setFirstName(studentDto.getFirstName());
        studentModel.setLastName(studentDto.getLastName());
        studentModel.setEmail(studentDto.getEmail());
        studentModel.setPassword("student");
        studentModel.setRole(Role.valueOf("Student"));
        studentRepository.save(studentModel);
    }

    public void update(StudentDto studentDto) {
        Optional<StudentModel> studentModelOptional = studentRepository.findById(studentDto.getId());
        if (studentModelOptional.isPresent()) {
            StudentModel studentModel = studentModelOptional.get();
            studentModel.setCnp(studentDto.getCnp());
            studentModel.setFirstName(studentDto.getFirstName());
            studentModel.setLastName(studentDto.getLastName());
            studentModel.setEmail(studentDto.getEmail());
            studentModel.setPassword(studentDto.getPassword());
            studentRepository.save(studentModel);
        }
    }

    public void delete(long id){
    studentRepository.deleteById(id);
    }

    public List<StudentDto> getAll(){
        List<StudentModel> studentModels = studentRepository.findAll();
        List<StudentDto> studentDtos = new ArrayList<>();
        for (StudentModel studentModel: studentModels){
            StudentDto studentDto = new StudentDto();
            studentDto.setId(studentModel.getId());
            studentDto.setCnp(studentModel.getCnp());
            studentDto.setEmail(studentModel.getEmail());
            studentDto.setFirstName(studentModel.getFirstName());
            studentDto.setLastName(studentModel.getLastName());
            studentDto.setPassword(studentModel.getPassword());
            studentDtos.add(studentDto);
        }
        return studentDtos;
    }
    public List<StudentDto> getStudentsWithOutGroup(){
        List<StudentModel> studentModels = studentRepository.findAll();
        List<StudentDto> studentDtos = new ArrayList<>();
        for (StudentModel studentModel: studentModels){
            if (studentModel.getGroupModel() == null){
                StudentDto studentDto = new StudentDto();
                studentDto.setId(studentModel.getId());
                studentDto.setCnp(studentModel.getCnp());
                studentDto.setEmail(studentModel.getEmail());
                studentDto.setFirstName(studentModel.getFirstName());
                studentDto.setLastName(studentModel.getLastName());
                studentDto.setPassword(studentModel.getPassword());
                studentDto.setFullName();
                studentDtos.add(studentDto);
            }
        }
        return studentDtos;
    }

    public StudentDto getOne(long id){
        Optional<StudentModel> studentModelOptional = studentRepository.findById(id);
        StudentDto studentDto = new StudentDto();
        if (studentModelOptional.isPresent()){
            StudentModel studentModel = studentModelOptional.get();
            studentDto.setId(studentModel.getId());
            studentDto.setCnp(studentModel.getCnp());
            studentDto.setEmail(studentModel.getEmail());
            studentDto.setFirstName(studentModel.getFirstName());
            studentDto.setLastName(studentModel.getLastName());
            studentDto.setPassword(studentModel.getPassword());
        }
        return studentDto;
    }

}
