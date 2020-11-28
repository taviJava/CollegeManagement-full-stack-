package com.sda.school.persistance.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class StudentModel extends PersonModel{

    private String cnp;
    private String lastName;
    private String firstName;
    @OneToOne(cascade = CascadeType.ALL)
    private PrezentModel prezentModel;

    @ManyToOne(fetch = FetchType.EAGER)
    private GroupModel groupModel;



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

    public PrezentModel getPrezentModel() {
        return prezentModel;
    }

    public void setPrezentModel(PrezentModel prezentModel) {
        this.prezentModel = prezentModel;
    }


    public GroupModel getGroupModel() {
        return groupModel;
    }

    public void setGroupModel(GroupModel groupModel) {
        this.groupModel = groupModel;
    }
}
