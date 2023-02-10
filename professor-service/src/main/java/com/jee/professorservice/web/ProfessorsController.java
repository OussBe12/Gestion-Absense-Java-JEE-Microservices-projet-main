package com.jee.professorservice.web;

import com.jee.professorservice.entities.Professor;
import com.jee.professorservice.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
public class ProfessorsController {
    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping("professors")
    public List<Professor> professorList(){
        return professorRepository.findAll();
    }

    @GetMapping("professors/{id}")
    public Professor getprofById(@PathVariable Long id){
        return professorRepository.findById(id).get();
    }

    @PostMapping("/professors")
    public Professor saveProfessor(@RequestBody Professor professor){
        return professorRepository.save(professor);
    }
    @DeleteMapping("/professors/{id}")
    public void deleteProfessor(@PathVariable Long id){
        professorRepository.deleteById(id);
    }
    @PutMapping("/professors/{id}")
    public Professor updateProfessor(@PathVariable Long id, @RequestBody Professor newProfessor){
        Professor professor = professorRepository.findById(id).get();
        if(newProfessor.getName() != null) professor.setName(newProfessor.getName());
        if(newProfessor.getCoursID() != null) professor.setCoursID(newProfessor.getCoursID());
        return professorRepository.save(professor);
    }
    @PutMapping("professors/cours/{id}")
    public void updateProfessorsCoursId(@PathVariable Long id){
        List<Professor> professors = professorRepository.findProfessorByCoursID(id);
        professors.forEach(p -> {
            p.setCoursID(null);
            professorRepository.save(p);
        });
    }
}
