package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="classroom")
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ClassroomModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "classroomModel")
    private List<DateModel> dateModelList;

    public ClassroomModel() {
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
}
