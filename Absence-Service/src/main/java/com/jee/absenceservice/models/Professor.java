package com.jee.absenceservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Transient;

@Data @AllArgsConstructor @NoArgsConstructor
public class Professor {
    private Long id;
    private String name;
    private Long coursId;
    @Transient
    private Cours cours;
}
