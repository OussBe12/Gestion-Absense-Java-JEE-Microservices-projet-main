package com.jee.coursservice.models;

import lombok.Data;

import java.util.List;
@Data
public class Classroom {
    private Long id;
    private String name;
    private List<Long> studentIdList;
}
