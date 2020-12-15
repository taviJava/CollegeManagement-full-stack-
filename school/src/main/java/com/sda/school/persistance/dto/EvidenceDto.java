package com.sda.school.persistance.dto;

public class EvidenceDto {
    private long id;
    private DateDto date;
    private StudentDto student;
    private MateriaDto materia;
    private String prezent;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public DateDto getDate() {
        return date;
    }

    public void setDate(DateDto date) {
        this.date = date;
    }

    public StudentDto getStudent() {
        return student;
    }

    public void setStudent(StudentDto student) {
        this.student = student;
    }

    public MateriaDto getMateria() {
        return materia;
    }

    public void setMateria(MateriaDto materia) {
        this.materia = materia;
    }

    public String getPrezent() {
        return prezent;
    }

    public void setPrezent(String prezent) {
        this.prezent = prezent;
    }
}
