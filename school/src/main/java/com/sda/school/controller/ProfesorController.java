package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.ProfesorDto;
import com.sda.school.service.ProfesorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class ProfesorController {
@Autowired
    private ProfesorService profesorService;

    @GetMapping("/profesors")
    public List<ProfesorDto> getProfesors() {
        return profesorService.getAll();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/profesors")
    public void addProfesor(@RequestBody ProfesorDto profesorDto) {
        profesorService.registerProfessor(profesorDto);
    }
    @DeleteMapping("/profesors/{id}")
    public void deleteProfesor(@PathVariable(name = "id") Long id) {
        profesorService.delete(id);
    }
    @GetMapping("/profesors/{id}")
    public ProfesorDto getProfesor(@PathVariable(name = "id") Long id) {
      return   profesorService.getOne(id);
    }
    @PutMapping("/profesors")
    public void updateProfesor(@RequestBody ProfesorDto profesorDto) {
        profesorService.update(profesorDto);
    }


}
