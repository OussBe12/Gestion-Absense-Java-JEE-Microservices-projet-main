package com.jee.coursservice.repositories;

import com.jee.coursservice.entity.Cours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursRepository extends JpaRepository<Cours,Long> {
}
