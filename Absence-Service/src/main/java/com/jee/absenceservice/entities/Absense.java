package com.jee.absenceservice.entities;

import com.jee.absenceservice.models.Classroom;
import com.jee.absenceservice.models.Cours;
import com.jee.absenceservice.models.Professor;
import com.jee.absenceservice.models.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Absense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long professorId;
    private Long studentId;
    private Long coursId;
    private Long classroomId;
    private boolean status;
    private Long sessionId;

    @Transient
    private Cours cours;
    @Transient
    private Professor professor;
    @Transient
    private Student student;
    @Transient
    private Classroom classroom;
}
