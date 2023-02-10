package com.jee.coursservice.services;

import com.jee.coursservice.models.Classroom;
import com.jee.coursservice.models.Professor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@FeignClient(name = "PROFESSORS-SERVICE")
public interface ProfessorRestService {
    @GetMapping(path = "professors/{id}")
    Professor findProfessorById(@PathVariable Long id);
    @PutMapping("professors/cours/{id}")
    List<Professor> findProfessorByCoursId(@PathVariable Long id);
}
