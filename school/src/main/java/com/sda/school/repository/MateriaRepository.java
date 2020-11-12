package com.sda.school.repository;

import com.sda.school.model.MateriaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MateriaRepository extends JpaRepository<MateriaModel, Long> {
}
