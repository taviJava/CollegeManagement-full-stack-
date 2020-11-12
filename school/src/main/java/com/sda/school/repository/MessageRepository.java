package com.sda.school.repository;

import com.sda.school.model.MessageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository <MessageModel,Long> {
}
