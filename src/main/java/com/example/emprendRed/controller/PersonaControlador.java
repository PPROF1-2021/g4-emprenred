
package com.example.emprendRed.controller;

import com.example.emprendRed.model.Persona;
import com.example.emprendRed.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping ("/persona")
public class PersonaControlador {
    
    @Autowired
    PersonaService personaService;
    
    
    
   @PostMapping
   public ResponseEntity<?> crearPersona (@RequestBody Persona personaRequest) throws Exception{
       
       Persona persona = personaService.crear(personaRequest);
       
       return new ResponseEntity (persona,HttpStatus.CREATED);
       
   }
}
