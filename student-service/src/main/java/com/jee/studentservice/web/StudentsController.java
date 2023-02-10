package com.jee.studentservice.web;

import com.jee.studentservice.dtos.ClassroomsDto;
import com.jee.studentservice.dtos.StudentDto;
import com.jee.studentservice.entities.Classroom;
import com.jee.studentservice.entities.Student;
import com.jee.studentservice.mappers.StudentsMappers;
import com.jee.studentservice.repositories.ClassroomRepository;
import com.jee.studentservice.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(produces = "application/json")
public class StudentsController {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ClassroomRepository classroomRepository;
    @Autowired
    private StudentsMappers studentsMappers;

    @GetMapping("/students")
    public List<StudentDto> students(){
        List<Student> students = studentRepository.findAll();
        List<StudentDto> studentDtos = students.stream().map(S -> {
            return studentsMappers.fromStudent(S);
        }).collect(Collectors.toList());
        return studentDtos;
    }
    @GetMapping("/students/{id}")
    public StudentDto studentById(@PathVariable Long id){
        return studentsMappers.fromStudent(studentRepository.findById(id).get());
    }
    @GetMapping("/classrooms")
    public List<ClassroomsDto> classrooms(){
        List<Classroom> classrooms = classroomRepository.findAll();
        List<ClassroomsDto> classroomsDtos = classrooms.stream().map(C->{
            return studentsMappers.fromClassroom(C);
        }).collect(Collectors.toList());
        return classroomsDtos;
    }
    @GetMapping("/classrooms/{id}")
    public ClassroomsDto classroomById(@PathVariable Long id){
        return studentsMappers.fromClassroom(classroomRepository.findById(id).get());
    }
    @PostMapping("/students")
    public Student saveStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }
    @PostMapping("/classrooms")
    public Classroom saveClassrooms(@RequestBody Classroom classroom){
        return classroomRepository.save(classroom);
    }
    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable Long id){
        studentRepository.deleteById(id);
    }
    @DeleteMapping("/classrooms/{id}")
    public void deleteClassrooms(@PathVariable Long id){
        List<Student> students = studentRepository.findStudentsByClassroomId(id);
        for (Student s: students) {
            studentRepository.delete(s);
        }
        classroomRepository.deleteById(id);
    }
    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student newstudent){
        Student student = studentRepository.findById(id).get();

        if(newstudent.getFullName() != null) student.setFullName(newstudent.getFullName());
        if(newstudent.getAddress() != null) student.setAddress(newstudent.getAddress());
        if(newstudent.getGender() != null) student.setGender(newstudent.getGender());
        if(newstudent.getCIN() != null) student.setCIN(newstudent.getCIN());
        if(newstudent.getBirthDate() != null) student.setBirthDate(newstudent.getBirthDate());
        if(newstudent.getClassroom() != null) student.setClassroom(newstudent.getClassroom());

        return studentRepository.save(student);
    }
    @PutMapping("/classrooms/{id}")
    public Classroom updateClassroom(@PathVariable Long id, @RequestBody Classroom newclassroom){
        Classroom classroom = classroomRepository.findById(id).get();

        if(newclassroom.getName() != null) classroom.setName(newclassroom.getName());
        return classroomRepository.save(classroom);
    }
    @GetMapping("/classrooms/{id}/students")
    public List<StudentDto> studentsByClass(@PathVariable Long id){
        List<Student> students = studentRepository.findStudentsByClassroomId(id);
        List<StudentDto> studentDtos = students.stream().map(S ->{
            return studentsMappers.fromStudent(S);
        }).collect(Collectors.toList());
        return studentDtos;
    }
}
