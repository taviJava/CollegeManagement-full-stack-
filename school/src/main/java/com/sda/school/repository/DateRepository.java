package com.sda.school.repository;

import com.sda.school.persistance.model.DateModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DateRepository extends JpaRepository<DateModel,Long> {
    List<DateModel> findAllByClassroomModel(long id);
    List<DateModel> findAllByProfesorModel(long id);
    List<DateModel> findAllByGroupModel(long id);
}
