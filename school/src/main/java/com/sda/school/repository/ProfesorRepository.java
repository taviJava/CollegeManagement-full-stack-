package com.sda.school.repository;

import com.sda.school.persistance.model.ProfesorModel;
import com.sda.school.persistance.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProfesorRepository extends JpaRepository<ProfesorModel,Long> {
    Optional<ProfesorModel> findByEmail(String email);
}
