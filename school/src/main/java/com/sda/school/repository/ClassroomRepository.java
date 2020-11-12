package com.sda.school.repository;

import com.sda.school.model.ClassroomModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassroomRepository extends JpaRepository<ClassroomModel,Long> {
}
