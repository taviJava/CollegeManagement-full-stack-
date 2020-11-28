package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="profesor")
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ProfesorModel extends PersonModel {

    private String name;
    private String phoneNumber;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    private List<MateriaModel> materiaModelList;



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<MateriaModel> getMateriaModelList() {
        return materiaModelList;
    }

    public void setMateriaModelList(List<MateriaModel> materiaModelList) {
        this.materiaModelList = materiaModelList;
    }

}
