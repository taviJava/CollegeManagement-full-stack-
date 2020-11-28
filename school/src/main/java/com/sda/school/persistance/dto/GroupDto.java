package com.sda.school.persistance.dto;
import java.util.List;

public class GroupDto {

    private long id;
    private String name;
    private List<StudentDto> studentModelList;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<StudentDto> getStudentModelList() {
        return studentModelList;
    }

    public void setStudentModelList(List<StudentDto> studentModelList) {
        this.studentModelList = studentModelList;
    }
}
