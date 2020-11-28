package com.sda.school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
