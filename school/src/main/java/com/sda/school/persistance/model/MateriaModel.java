package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "materia")
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class MateriaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "materiaModelList", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("materiaModelList")
    private List<ProfesorModel> professorModelList;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ProfesorModel> getProfessorModelList() {
        return professorModelList;
    }

    public void setProfessorModelList(List<ProfesorModel> professorModelList) {
        this.professorModelList = professorModelList;
    }

}
