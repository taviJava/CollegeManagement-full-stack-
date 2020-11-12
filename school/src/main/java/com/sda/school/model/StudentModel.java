package com.sda.school.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;
@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class StudentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String cnp;
    private String lastName;
    private String firstName;
    @OneToOne(cascade = CascadeType.ALL)
    private PrezentModel prezentModel;

    @ManyToOne(fetch = FetchType.EAGER)
    private GroupModel groupModel;

    public StudentModel() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
