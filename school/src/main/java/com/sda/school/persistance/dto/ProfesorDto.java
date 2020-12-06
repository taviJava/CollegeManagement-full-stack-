package com.sda.school.persistance.dto;
import java.util.List;

public class ProfesorDto {
    private long id;
    private String email;
    private String password;
    private String role;
    private String name;
    private String phoneNumber;
    private List<MateriaDto> materiaModelList;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<MateriaDto> getMateriaModelList() {
        return materiaModelList;
    }

    public void setMateriaModelList(List<MateriaDto> materiaModelList) {
        this.materiaModelList = materiaModelList;
    }
}
