package com.sda.school.repository;

import com.sda.school.persistance.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel,Long> {
}
