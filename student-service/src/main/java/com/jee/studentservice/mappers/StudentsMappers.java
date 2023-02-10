package com.jee.studentservice.mappers;

import com.jee.studentservice.dtos.ClassroomsDto;
import com.jee.studentservice.dtos.StudentDto;
import com.jee.studentservice.entities.Classroom;
import com.jee.studentservice.entities.Student;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class StudentsMappers {
    public StudentDto fromStudent(Student student){
        StudentDto studentDTOResponse = new StudentDto();
        BeanUtils.copyProperties(student,studentDTOResponse);
        studentDTOResponse.setClassroomId(student.getClassroom().getId());
        return studentDTOResponse;
    }
    public ClassroomsDto fromClassroom(Classroom classroom){
        ClassroomsDto classroomsDto = new ClassroomsDto();
        BeanUtils.copyProperties(classroom, classroomsDto);
        return classroomsDto;
    }
}
