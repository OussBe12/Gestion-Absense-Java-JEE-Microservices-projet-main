package com.jee.coursservice.repositories;

import com.jee.coursservice.entity.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {
}
