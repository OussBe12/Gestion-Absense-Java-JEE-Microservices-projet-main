package com.jee.coursservice.services;

import com.jee.coursservice.models.Classroom;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "STUDENT-SERVICE")
public interface ClassroomRestService {
    @GetMapping(path = "/classrooms/{id}")
    Classroom findClassroomById(@PathVariable Long id);

    @GetMapping(path = "/classrooms")
    List<Classroom> allClassrooms();

}
