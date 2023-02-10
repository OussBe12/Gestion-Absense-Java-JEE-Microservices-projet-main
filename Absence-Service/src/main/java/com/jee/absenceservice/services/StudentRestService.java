package com.jee.absenceservice.services;

import com.jee.absenceservice.models.Classroom;
import com.jee.absenceservice.models.Student;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "STUDENT-SERVICE")
public interface StudentRestService {
    @GetMapping("/students/{id}")
    Student findStudentById(@PathVariable Long id);
    @GetMapping("/students")
    List<Student> getAllStudents();
    @GetMapping("/classrooms/{id}")
    Classroom findClassroomById(@PathVariable Long id);
    @GetMapping("/classrooms")
    List<Classroom> getAllClasses();
    @GetMapping("/classrooms/{id}/students")
    List<Student> findStudentsByClassroom(@PathVariable Long id);
}
