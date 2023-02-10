package com.jee.studentservice;


import com.jee.studentservice.entities.Classroom;
import com.jee.studentservice.entities.Student;
import com.jee.studentservice.enums.Gender;
import com.jee.studentservice.repositories.ClassroomRepository;
import com.jee.studentservice.repositories.StudentRepository;
import lombok.AllArgsConstructor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;


@SpringBootApplication   @AllArgsConstructor

public class StudentServiceApplication implements CommandLineRunner {
	@Autowired
	private ClassroomRepository classroomRepository;
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	RepositoryRestConfiguration repositoryRestConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(StudentServiceApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Student.class);
		repositoryRestConfiguration.exposeIdsFor(Classroom.class);
		for(long i=1; i<7; i++){
			Classroom classroom = Classroom.builder()
					.id(i)
					.name("Classe_"+i)
					.build();
			classroomRepository.save(classroom);
		}
		classroomRepository.findAll().forEach(classroom -> {
			for(int i=1; i<=10; i++){
				Student student = new Student();
				student.setFullName("Etud "+i);
				student.setBirthDate(new Date());
				student.setCIN("CIN_ "+i);
				student.setGender((i%2 == 0) ? Gender.FEMALE : Gender.MALE);
				student.setAddress("Adresse Etudiant "+i);
				student.setClassroom(classroom);
				studentRepository.save(student);
			}});


	}
}


