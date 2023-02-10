package com.jee.absenceservice.repositories;

import com.jee.absenceservice.entities.Absense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AbsenseRepository extends JpaRepository<Absense, Long> {
    List<Absense> findAbsenseByCoursId(Long id);
}
