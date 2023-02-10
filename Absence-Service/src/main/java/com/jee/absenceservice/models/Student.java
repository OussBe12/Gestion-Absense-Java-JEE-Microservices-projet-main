package com.jee.absenceservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Transient;
import java.util.Date;

@Data @AllArgsConstructor @NoArgsConstructor
public class Student {
    private Long id;
    private String fullName;
    private Date birthdate;
    private String CIN;
    private String gender;
    private String address;
    private Long classroomId;
    @Transient
    private Classroom classroom;
}
