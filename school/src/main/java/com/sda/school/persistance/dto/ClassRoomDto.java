package com.sda.school.persistance.dto;

import java.util.List;

public class ClassRoomDto {
    private long id;
    private String name;
    private List<DateDto> dateModelList;

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

    public List<DateDto> getDateModelList() {
        return dateModelList;
    }

    public void setDateModelList(List<DateDto> dateModelList) {
        this.dateModelList = dateModelList;
    }
}
