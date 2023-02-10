package com.jee.absenceservice;

import com.jee.absenceservice.entities.Absense;
import com.jee.absenceservice.models.Student;
import com.jee.absenceservice.repositories.AbsenseRepository;
import com.jee.absenceservice.services.CoursRestService;
import com.jee.absenceservice.services.ProfessorRestService;
import com.jee.absenceservice.services.StudentRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.hateoas.PagedModel;

import java.util.Collection;
import java.util.List;

@SpringBootApplication
@EnableFeignClients
public class AbsenceServiceApplication implements CommandLineRunner {
    @Autowired
    private AbsenseRepository absenseRepository;
    @Autowired
    private StudentRestService studentRestService;
    @Autowired
    private ProfessorRestService professorRestService;
    @Autowired
    private CoursRestService coursRestService;

    public static void main(String[] args) {
        SpringApplication.run(AbsenceServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        for(int i = 1; i<6; i++){
            Absense absense = new Absense();
            absense.setProfessorId((long)i);
            absense.setCoursId((long)i);
            absense.setClassroomId((long)i);
            List<Student> students = studentRestService.findStudentsByClassroom((long)i);
            students.forEach(S->{
                absense.setStudentId(S.getId());
                if(S.getId() %3 == 0)
                    absense.setStatus(true);
                absenseRepository.save(absense);
            });
        }
    }
}
