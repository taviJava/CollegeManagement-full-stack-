package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;
@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class GroupModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "groupModel")
    private List<DateModel> dateModelList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "groupModel", orphanRemoval = false)
    private List<StudentModel> studentModelList;

    public GroupModel() {
    }

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

    public List<DateModel> getDateModelList() {
        return dateModelList;
    }

    public void setDateModelList(List<DateModel> dateModelList) {
        this.dateModelList = dateModelList;
    }

    public List<StudentModel> getStudentModelList() {
        return studentModelList;
    }

    public void setStudentModelList(List<StudentModel> studentModelList) {
        this.studentModelList = studentModelList;
    }
}
