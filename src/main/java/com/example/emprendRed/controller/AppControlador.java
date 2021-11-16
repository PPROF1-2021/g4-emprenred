
package com.example.emprendRed.controller;

import com.example.emprendRed.model.PersonaUsuarioDto;
import com.example.emprendRed.model.Usuario;
import com.example.emprendRed.service.AppService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
public class AppControlador {
    
    @Autowired
    AppService service;
    
    
    
   @PostMapping("/registro")
   public ResponseEntity<?> crear (@RequestBody PersonaUsuarioDto personaRequest) throws Exception{
       
      service.crear(personaRequest);
       
       return new ResponseEntity (HttpStatus.CREATED);
       
   }
   
   @PostMapping("/login")
   public ResponseEntity<?> login (@RequestBody Usuario usuario) throws Exception{
       
       return new ResponseEntity(service.login(usuario),HttpStatus.OK);
   }
   
   @DeleteMapping("/{id}")
   public ResponseEntity<?> delete (@PathVariable Long id){
       service.eliminar(id);
       
       return new ResponseEntity (HttpStatus.OK);
   }
}
