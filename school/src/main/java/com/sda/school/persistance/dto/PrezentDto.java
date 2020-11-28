package com.sda.school.persistance.dto;


public class PrezentDto {

    private long id;
    private boolean isPresent;
    private StudentDto studentModel;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isPresent() {
        return isPresent;
    }

    public void setPresent(boolean present) {
        isPresent = present;
    }

    public StudentDto getStudentModel() {
        return studentModel;
    }

    public void setStudentModel(StudentDto studentModel) {
        this.studentModel = studentModel;
    }
}
