package com.sda.school.repository;

import com.sda.school.persistance.model.ProfesorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesorRepository extends JpaRepository<ProfesorModel,Long> {
}
