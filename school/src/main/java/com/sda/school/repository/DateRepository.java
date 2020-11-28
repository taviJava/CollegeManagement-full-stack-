package com.sda.school.repository;

import com.sda.school.persistance.model.DateModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DateRepository extends JpaRepository<DateModel,Long> {
}
