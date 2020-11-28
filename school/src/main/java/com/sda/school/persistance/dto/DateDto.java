package com.sda.school.persistance.dto;

import java.sql.Date;
import java.sql.Time;

public class DateDto {
    private long id;
    private Date date;
    private Time startTime;
    private Time endTime;
    private ClassRoomDto classroomModel;
    private GroupDto groupModel;

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
