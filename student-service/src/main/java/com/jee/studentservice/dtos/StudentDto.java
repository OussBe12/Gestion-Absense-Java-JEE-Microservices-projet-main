package com.jee.studentservice.dtos;

import com.jee.studentservice.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor
public class StudentDto {
    private Long id;
    private String fullName;
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm")
    private Date birthDate;
    private String CIN;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String address;
    private Long classroomId;
}
