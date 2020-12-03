package com.sda.school.persistance.dto;


public class StudentDto {
    private long id;
    private String email;
    private String password;
    private String cnp;
    private String lastName;
    private String firstName;
    private String fullName;
    private PrezentDto prezentModel;
    private GroupDto groupModel;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public PrezentDto getPrezentModel() {
        return prezentModel;
    }

    public void setPrezentModel(PrezentDto prezentModel) {
        this.prezentModel = prezentModel;
    }

    public GroupDto getGroupModel() {
        return groupModel;
    }

    public void setGroupModel(GroupDto groupModel) {
        this.groupModel = groupModel;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName() {
        this.fullName = this.firstName + " " + this.lastName;
    }
}
