package com.sda.school.service;

import com.sda.school.repository.MateriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MateriaService {
    @Autowired
    private MateriaRepository materiaRepository;
}
