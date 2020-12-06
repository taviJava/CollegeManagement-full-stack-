package com.sda.school.service;


import com.sda.school.persistance.dto.PersonDto;
import com.sda.school.persistance.model.PersonModel;
import com.sda.school.repository.PersonRepository;
import com.sda.school.security.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonService extends UserDetailService {
     @Autowired
    private PersonRepository personRepository;

    public PersonDto getByEmail(String email){
        Optional<PersonModel> optionalPersonModel = personRepository.findByEmail(email);
        PersonDto personDto = new PersonDto();
        if (optionalPersonModel.isPresent()){
            PersonModel personModel = optionalPersonModel.get();
            personDto.setId(personModel.getId());
            personDto.setEmail(personModel.getEmail());
            if (personModel.getRole()!=null){
                personDto.setRole(personModel.getRole().name());
            }
            personDto.setPassword(personModel.getPassword());
        }
        return personDto;
    }

}
