package com.sda.school.controller;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sda.school.persistance.dto.PersonDto;
import com.sda.school.persistance.message.ResponseMessage;
import com.sda.school.persistance.model.PersonModel;
import com.sda.school.repository.PersonRepository;
import com.sda.school.security.AuthTokenData;
import com.sda.school.security.TokenProvider;
import com.sda.school.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class PersonController {
    @Autowired
    private PersonService personService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenProvider jwtTokenUtil;
    @PostMapping(value = "/basicauth")
    public ResponseEntity generateToken(@RequestBody PersonDto personDto) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        personDto.getEmail(),
                        personDto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication);
        return ResponseEntity.ok(new AuthTokenData(token));
    }

    @PostMapping("/person")
    public void save(@RequestBody PersonDto personModel){
       personService.register(personModel);
    }
    @GetMapping("/person/{email}")
    public PersonDto getPersonByEmail(@PathVariable(name = "email") String email){
       return personService.getByEmail(email);
    }
}
