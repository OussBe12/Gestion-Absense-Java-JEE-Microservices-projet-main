package com.jee.absenceservice.services;

import com.jee.absenceservice.models.Professor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@FeignClient(name = "PROFESSORS-SERVICE")
public interface ProfessorRestService {
    @GetMapping("/professors/{id}")
    Professor findProfessorById(@PathVariable Long id);
    @GetMapping("/professors")
    List<Professor> getAllProfessors();
}
