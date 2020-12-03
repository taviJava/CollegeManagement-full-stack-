package com.sda.school.persistance.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.sql.Date;
import java.sql.Time;

public class DateDto {
    private long id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "hh:mm:ss")
    private Time startTime;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "hh:mm:ss")
    private Time endTime;
    private ClassRoomDto classroomModel;
    private GroupDto groupModel;
    private ProfesorDto profesorModel;


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

    public ProfesorDto getProfesorModel() {
        return profesorModel;
    }

    public void setProfesorModel(ProfesorDto profesorModel) {
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
