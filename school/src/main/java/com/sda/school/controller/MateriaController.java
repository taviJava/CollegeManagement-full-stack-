package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.MateriaDto;
import com.sda.school.persistance.model.MateriaModel;
import com.sda.school.repository.MateriaRepository;
import com.sda.school.service.MateriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class MateriaController {
    @Autowired
    private MateriaService materiaService;
    @GetMapping("/materia")
    public List<MateriaDto> getMateria() {
        return materiaService.getAll();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/materia")
    public void addMateria(@RequestBody MateriaDto materiaDto) {
        materiaService.save(materiaDto);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/materia/{id}")
    public void deleteMateria(@PathVariable(name = "id") Long id) {
        materiaService.delete(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/materia/{id}")
    public MateriaDto getMateriabyId(@PathVariable(name = "id") Long id) {
        return materiaService.getOne(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/materia")
    public void updateMateria(@RequestBody MateriaDto materiaDto) {
        materiaService.update(materiaDto);
    }
}
