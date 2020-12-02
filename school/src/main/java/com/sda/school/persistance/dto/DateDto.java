package com.sda.school.persistance.dto;

import com.sda.school.persistance.model.ClassroomModel;
import com.sda.school.persistance.model.GroupModel;
import com.sda.school.persistance.model.ProfesorModel;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.sql.Date;
import java.sql.Time;

public class DateDto {
    private long id;
    private Date date;
    private Time startTime;
    private Time endTime;
    private ClassRoomDto classroomModel;
    private GroupDto groupModel;
    private ProfesorModel profesorModel;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public ClassRoomDto getClassroomModel() {
        return classroomModel;
    }

    public ProfesorModel getProfesorModel() {
        return profesorModel;
    }

    public void setProfesorModel(ProfesorModel profesorModel) {
        this.profesorModel = profesorModel;
    }

    public void setClassroomModel(ClassRoomDto classroomModel) {
        this.classroomModel = classroomModel;
    }

    public GroupDto getGroupModel() {
        return groupModel;
    }

    public void setGroupModel(GroupDto groupModel) {
        this.groupModel = groupModel;
    }
}
