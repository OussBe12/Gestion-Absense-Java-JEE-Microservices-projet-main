package com.jee.studentservice.entities;

import com.jee.studentservice.enums.Gender;
import java.util.*;

import lombok.Builder;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Student {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm")
    private Date birthDate;
    private String CIN;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String address;
    @ManyToOne
    private Classroom classroom;

}

