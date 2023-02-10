package com.jee.coursservice.entity;

import com.jee.coursservice.models.Classroom;
import com.jee.coursservice.models.Professor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Cours {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long classroomId;
    private Long professorId;
    private int duration;
    @Temporal(TemporalType.TIMESTAMP)
    private Date starterDate;
    @Transient
    private Classroom classroom;
    @Transient
    private Professor professor;
}
