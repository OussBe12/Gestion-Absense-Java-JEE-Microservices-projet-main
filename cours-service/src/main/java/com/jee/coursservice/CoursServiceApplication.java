package com.jee.coursservice;


import com.jee.coursservice.entity.Cours;
import com.jee.coursservice.models.Classroom;
import com.jee.coursservice.models.Professor;
import com.jee.coursservice.repositories.CoursRepository;
import com.jee.coursservice.services.ClassroomRestService;
import com.jee.coursservice.services.ProfessorRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import java.util.Date;

@EnableFeignClients
@SpringBootApplication
public class CoursServiceApplication implements CommandLineRunner{
    @Autowired
    private CoursRepository coursRepository;
    @Autowired
    private ClassroomRestService classroomRestService;
    @Autowired
    private ProfessorRestService professorRestService;
    public static void main(String[] args) {
        SpringApplication.run(CoursServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        for(int i =1; i<6; i++){
            Cours cours = new Cours();
            cours.setName((i%2 == 0) ? "Jee"+i : "Asp.Net"+i);
            cours.setDuration(i*20);
            cours.setStarterDate(new Date());
            Professor professor = professorRestService.findProfessorById((long)i);
            cours.setProfessorId(professor.getId());
            cours.setProfessor(professor);
            Classroom classroom = classroomRestService.findClassroomById((long)i);
            cours.setClassroomId(classroom.getId());
            cours.setClassroom(classroom);
            coursRepository.save(cours);
        }

    }
}
