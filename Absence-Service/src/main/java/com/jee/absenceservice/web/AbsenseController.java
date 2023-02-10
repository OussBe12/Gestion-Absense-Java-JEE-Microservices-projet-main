package com.jee.absenceservice.web;

import com.jee.absenceservice.entities.Absense;
import com.jee.absenceservice.repositories.AbsenseRepository;
import com.jee.absenceservice.services.CoursRestService;
import com.jee.absenceservice.services.ProfessorRestService;
import com.jee.absenceservice.services.StudentRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AbsenseController {
    @Autowired
    private AbsenseRepository absenseRepository;
    @Autowired
    private StudentRestService studentRestService;
    @Autowired
    private ProfessorRestService professorRestService;
    @Autowired
    private CoursRestService coursRestService;

    @GetMapping("/absenses/{id}")
    public Absense getAbsenseById(@PathVariable Long id){
        Absense absense = absenseRepository.findById(id).get();
        absense.setClassroom(studentRestService.findClassroomById(absense.getClassroomId()));
        absense.setStudent(studentRestService.findStudentById(absense.getStudentId()));
        absense.setCours(coursRestService.findCoursById(absense.getCoursId()));
        absense.setProfessor(professorRestService.findProfessorById(absense.getProfessorId()));
        return absense;
    }
    @GetMapping("/absenses")
    public List<Absense> getAllAbsenses(){
        List<Absense> absenseList = absenseRepository.findAll();
        absenseList.forEach(absense -> {
            absense.setClassroom(studentRestService.findClassroomById(absense.getClassroomId()));
            absense.setStudent(studentRestService.findStudentById(absense.getStudentId()));
            absense.setCours(coursRestService.findCoursById(absense.getCoursId()));
            absense.setProfessor(professorRestService.findProfessorById(absense.getProfessorId()));
        });
        return absenseList;
    }
    @DeleteMapping("/absenses/{id}")
    public void deleteabsense(@PathVariable Long id) {
        Absense absense = absenseRepository.findById(id).get();
        if (absense == null) throw new RuntimeException("Absense Not Found");
        else {
            absenseRepository.delete(absense);
        }
    }
    @PostMapping("/absenses")
    public void addAbsense(@RequestBody Absense absense){
        if (absense == null) throw new RuntimeException("Invalid Absense");
        else  {
            absenseRepository.save(absense);
        }
    }
    @PutMapping("/absenses/{id}")
    public Absense updateabsense(@PathVariable Long id, @RequestBody Absense newAbsense){
        return absenseRepository.findById(id).map(absense -> {
            if(newAbsense.getCoursId()!= null)
                absense.setCoursId(newAbsense.getCoursId());
            if(newAbsense.getProfessorId()!= null)
                absense.setProfessorId(newAbsense.getProfessorId());
            if(newAbsense.getClassroomId()!= null)
                absense.setClassroomId(newAbsense.getClassroomId());
            if(newAbsense.getStudentId()!= null)
                absense.setStudentId(newAbsense.getStudentId());
            absense.setStatus(newAbsense.isStatus());
            return absenseRepository.save(absense);
        }).orElseGet(()->{
            newAbsense.setId(id);
            return absenseRepository.save(newAbsense);
        });
    }
    @DeleteMapping("absenses/cours/{id}")
    public void deleteAbsensesByCoursId(@PathVariable Long id){
        List<Absense> absenseList = absenseRepository.findAbsenseByCoursId(id);
        absenseList.forEach(A ->{
            absenseRepository.delete(A);
        });
    }
}
