package com.jee.coursservice.web;

import com.jee.coursservice.entity.Cours;
import com.jee.coursservice.entity.Session;
import com.jee.coursservice.models.Classroom;
import com.jee.coursservice.models.Professor;
import com.jee.coursservice.repositories.CoursRepository;
import com.jee.coursservice.repositories.SessionRepository;
import com.jee.coursservice.services.ClassroomRestService;
import com.jee.coursservice.services.ProfessorRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CoursRestController {
    @Autowired
    private CoursRepository coursRepository;
    @Autowired
    private ClassroomRestService classroomRestService;
    @Autowired
    private ProfessorRestService professorRestService;
    @Autowired
    private SessionRepository sessionRepository;
    @GetMapping("/cours/{id}")
    public Cours getCoursById(@PathVariable Long id){
        Cours cours=coursRepository.findById(id).get();
        cours.setClassroom(classroomRestService.findClassroomById(cours.getClassroomId()));
        cours.setProfessor(professorRestService.findProfessorById(cours.getProfessorId()));
        return cours;
    }
    @GetMapping("/cours")
    public List<Cours> getAllCours(){
        List<Cours> coursList = coursRepository.findAll();
        return coursList;
    }
    @PostMapping("/cours")
    public void addCours(@RequestBody Cours cours){
        if (cours == null) throw new RuntimeException("Invalid Cours");
        else  {
            coursRepository.save(cours);
        }
    }
    @DeleteMapping("/cours/{id}")
    public void deleteCours(@PathVariable Long id){
        Cours cours = coursRepository.findById(id).get();
        professorRestService.findProfessorByCoursId(id);
        coursRepository.delete(cours);
    }
    @PutMapping("/cours/{Id}")
    public Cours updateCours(@PathVariable Long id, @RequestBody Cours newCours) {
        return coursRepository.findById(id).map(cours -> {
            if(newCours.getName()!= null)
                cours.setName(newCours.getName());
            if(newCours.getProfessorId()!= null)
                cours.setProfessorId(newCours.getProfessorId());
            if(newCours.getClassroomId()!= null)
                cours.setClassroomId(newCours.getClassroomId());
            cours.setDuration(newCours.getDuration());
            return coursRepository.save(newCours);
        }).orElseGet(()->{
           newCours.setId(id);
           return coursRepository.save(newCours);
        });
    }
    @PostMapping("/cours/session")
    public Session saveAndGetSession(@RequestBody Session session){
        if(session != null){
            return sessionRepository.save(session);
        }
        else {
            new RuntimeException("Session Invalid");
        }
        return null;
    }
    @GetMapping("/cours/sessions")
    public List<Session> sessions(){
        return sessionRepository.findAll();
    }
    @GetMapping("/cours/session")
    public Session getLastSession(){
        List<Session> sessions = sessionRepository.findAll();
        return sessions.get(sessions.size());
    }
    @GetMapping("/cours/session/{id}")
    public Session sessions(@PathVariable Long id){
        return sessionRepository.findById(id).get();
    }
}
