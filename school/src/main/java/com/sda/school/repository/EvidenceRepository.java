package com.sda.school.repository;

import com.sda.school.persistance.model.EvidenceModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvidenceRepository extends JpaRepository<EvidenceModel, Long> {

    List<EvidenceModel> findAllByDate_Id(long id);
}
