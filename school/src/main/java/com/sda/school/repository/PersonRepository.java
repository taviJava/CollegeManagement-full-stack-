package com.sda.school.repository;

import com.sda.school.persistance.model.PersonModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<PersonModel, Long> {
    Optional<PersonModel> findByEmail(String email);
}
