package com.jee.studentservice.repositories;

import com.jee.studentservice.entities.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface ClassroomRepository extends JpaRepository<Classroom, Long> {

}
