package com.sda.school;

import com.sda.school.model.ClassroomModel;
import com.sda.school.model.ProfesorModel;
import com.sda.school.repository.ClassroomRepository;
import com.sda.school.repository.ProfesorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class SchoolApplication {

    public static void main(String[] args) {
        SpringApplication.run(SchoolApplication.class, args);
    }
   /* @Bean
   CommandLineRunner init(ClassroomRepository classroomRepository) {
        return args -> {
         Stream.of("room1", "room2", "room3", "room4", "room5").forEach(name -> {

             ClassroomModel classroomModel=new ClassroomModel();
             classroomModel.setName(name);
               classroomRepository.save(classroomModel);
           });
           classroomRepository.findAll().forEach(System.out::println);
       };
   }*/
}
