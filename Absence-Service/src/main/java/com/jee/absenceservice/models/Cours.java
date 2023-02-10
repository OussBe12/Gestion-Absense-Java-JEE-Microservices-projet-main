package com.jee.absenceservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Transient;
import java.util.Date;
@Data @AllArgsConstructor @NoArgsConstructor
public class Cours {
    private Long id;
    private String name;
    private Long classroomId;
    private Long professorId;
    private Date starterDate;
    private int duration;
    @Transient
    private Classroom classroom;
    @Transient
    private Professor professor;

}