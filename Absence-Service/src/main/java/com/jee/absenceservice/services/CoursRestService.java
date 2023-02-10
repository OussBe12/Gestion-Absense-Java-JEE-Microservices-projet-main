package com.jee.absenceservice.services;

import com.jee.absenceservice.models.Cours;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

@FeignClient(name = "COURS-SERVICE")
public interface CoursRestService {
    @GetMapping("/cours/{id}")
    Cours findCoursById(@PathVariable Long id);

    @GetMapping("/cours")
    List<Cours> getAllCours();
}
