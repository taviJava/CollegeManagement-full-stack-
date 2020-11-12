package com.sda.school.repository;

import com.sda.school.model.PrezentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrezentRepository extends JpaRepository<PrezentModel,Long> {
}
