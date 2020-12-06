package com.sda.school.security;

import com.sda.school.persistance.dto.PersonDto;
import com.sda.school.persistance.dto.ProfesorDto;
import com.sda.school.persistance.dto.StudentDto;
import com.sda.school.persistance.model.PersonModel;
import com.sda.school.persistance.model.ProfesorModel;
import com.sda.school.persistance.model.Role;
import com.sda.school.persistance.model.StudentModel;
import com.sda.school.repository.PersonRepository;
import com.sda.school.repository.ProfesorRepository;
import com.sda.school.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service("userService")
public class UserDetailService implements UserDetailsService {

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ProfesorRepository profesorRepository;
    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;



    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<PersonModel> personCredentialModelOptional = personRepository.findByEmail(email);
        if (!personCredentialModelOptional.isPresent()) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        PersonModel personModel = personCredentialModelOptional.get();
        String userName = personModel.getEmail();
        String password = personModel.getPassword();
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();

        //ROLE_ADMIN is important to be picked up by hasRole from @PreAuthorize in DummyConteoller
        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority("ROLE_" +  personModel.getRole().name().toUpperCase());
        authorities.add(simpleGrantedAuthority);
        return new User(userName, password, authorities);
    }

    public PersonModel register(PersonDto personDto) {
        PersonModel newPerson = new PersonModel();
        newPerson.setEmail(personDto.getEmail());
        newPerson.setRole(Role.valueOf("Admin"));
        newPerson.setPassword(bcryptEncoder.encode(personDto.getPassword()));
       return personRepository.save(newPerson);
    }
    public StudentModel registerStud(StudentDto studentDto){
        StudentModel newStud = new StudentModel();
        newStud.setCnp(studentDto.getCnp());
        newStud.setFirstName(studentDto.getFirstName());
        newStud.setLastName(studentDto.getLastName());
        newStud.setEmail(studentDto.getEmail());
        newStud.setPassword(bcryptEncoder.encode("student"));
        newStud.setRole(Role.valueOf("Student"));
       return studentRepository.save(newStud);
    }
    public ProfesorModel registerProfessor(ProfesorDto profesorDto){
        ProfesorModel profesorModel = new ProfesorModel();
        profesorModel.setName(profesorDto.getName());
        profesorModel.setPhoneNumber(profesorDto.getPhoneNumber());
        profesorModel.setEmail(profesorDto.getEmail());
        profesorModel.setPassword(bcryptEncoder.encode("professor"));
        profesorModel.setRole(Role.valueOf("Professor"));
       return profesorRepository.save(profesorModel);
    }
}
