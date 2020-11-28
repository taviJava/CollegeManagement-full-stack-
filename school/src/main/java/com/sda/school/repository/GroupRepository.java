package com.sda.school.repository;

import com.sda.school.persistance.model.GroupModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository <GroupModel,Long> {
}
