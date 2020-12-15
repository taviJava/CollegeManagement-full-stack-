package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class DateModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "hh:mm:ss")
    private Time startTime;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "hh:mm:ss")
    private Time endTime;
    @ManyToOne(fetch = FetchType.EAGER)
    private GroupModel groupModel;
    @ManyToOne(fetch = FetchType.EAGER)
    private ProfesorModel profesorModel;

    @ManyToOne(fetch = FetchType.EAGER)
    private ClassroomModel classroomModel;
    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL , mappedBy = "date")
    private List<EvidenceModel> evidences;
    @ManyToOne(fetch = FetchType.EAGER)
    private MateriaModel materia;

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

    public ClassroomModel getClassroomModel() {
        return classroomModel;
    }

    public void setClassroomModel(ClassroomModel classroomModel) {
        this.classroomModel = classroomModel;
    }

    public GroupModel getGroupModel() {
        return groupModel;
    }

    public void setGroupModel(GroupModel groupModel) {
        this.groupModel = groupModel;
    }

    public ProfesorModel getProfesorModel() {
        return profesorModel;
    }

    public void setProfesorModel(ProfesorModel profesorModel) {
        this.profesorModel = profesorModel;
    }

    public List<EvidenceModel> getEvidences() {
        return evidences;
    }

    public MateriaModel getMateria() {
        return materia;
    }

    public void setMateria(MateriaModel materia) {
        this.materia = materia;
    }

    public void setEvidences(List<EvidenceModel> evidences) {
        this.evidences = evidences;
    }
}
