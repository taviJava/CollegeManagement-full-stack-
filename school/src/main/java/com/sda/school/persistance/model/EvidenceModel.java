package com.sda.school.persistance.model;

import javax.persistence.*;


@Entity
public class EvidenceModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER)
    private DateModel date;
    @ManyToOne(fetch = FetchType.EAGER)
    private StudentModel student;
    @ManyToOne(fetch = FetchType.EAGER)
    private MateriaModel materia;
    @Enumerated(EnumType.STRING)
    private Prezent prezent;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public DateModel getDate() {
        return date;
    }

    public void setDate(DateModel date) {
        this.date = date;
    }

    public StudentModel getStudent() {
        return student;
    }

    public void setStudent(StudentModel student) {
        this.student = student;
    }

    public MateriaModel getMateria() {
        return materia;
    }

    public void setMateria(MateriaModel materia) {
        this.materia = materia;
    }

    public Prezent getPrezent() {
        return prezent;
    }

    public void setPrezent(Prezent prezent) {
        this.prezent = prezent;
    }
}
