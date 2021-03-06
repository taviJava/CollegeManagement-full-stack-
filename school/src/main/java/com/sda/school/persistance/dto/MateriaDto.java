package com.sda.school.persistance.dto;

import java.util.List;

public class MateriaDto {
    private Long id;
    private String name;
    private String description;
    private List<PrezentDto> professorModelList;

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

    public List<PrezentDto> getProfessorModelList() {
        return professorModelList;
    }

    public void setProfessorModelList(List<PrezentDto> professorModelList) {
        this.professorModelList = professorModelList;
    }
}
