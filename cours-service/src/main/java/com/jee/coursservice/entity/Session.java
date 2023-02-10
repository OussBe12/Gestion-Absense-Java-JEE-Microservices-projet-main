package com.jee.coursservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long coursId;
    @Temporal(TemporalType.TIMESTAMP)
    private Date starterDate;
    @Temporal(TemporalType.TIMESTAMP)
    private Date closeDate;
}
