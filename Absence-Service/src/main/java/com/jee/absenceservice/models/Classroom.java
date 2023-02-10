package com.jee.absenceservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Transient;
import java.util.List;

@Data
@AllArgsConstructor @NoArgsConstructor
public class Classroom {
    private Long id;
    private String name;
    private List<Long> studentsListId;
    @Transient
    private List<Student> studentsList;
}
