package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class StudentModel extends PersonModel{

    private String cnp;
    private String lastName;
    private String firstName;
    @Enumerated(EnumType.STRING)
    private Prezent prezent;
    @ManyToOne(fetch = FetchType.EAGER)
    private GroupModel groupModel;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "student")
    private List<EvidenceModel> evidences;

    public List<EvidenceModel> getEvidences() {
        return evidences;
    }

    public void setEvidences(List<EvidenceModel> evidences) {
        this.evidences = evidences;
    }

    public String getCnp() {
        return cnp;
    }

    public void setCnp(String cnp) {
        this.cnp = cnp;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Prezent getPrezent() {
        return prezent;
    }

    public void setPrezent(Prezent prezent) {
        this.prezent = prezent;
    }

    public GroupModel getGroupModel() {
        return groupModel;
    }

    public void setGroupModel(GroupModel groupModel) {
        this.groupModel = groupModel;
    }
}
