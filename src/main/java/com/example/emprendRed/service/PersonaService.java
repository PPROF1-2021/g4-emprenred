
package com.example.emprendRed.service;

import com.example.emprendRed.model.Persona;
import com.example.emprendRed.repository.PersonaRepositorio;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
    
    @Autowired
    PersonaRepositorio personaRepositorio;
    
    
    public Persona  crear (Persona personaRequest) throws Exception{
        
        Persona persona = new Persona();
        
        validacionPersona(personaRequest);
   
             persona.setDni(personaRequest.getDni());
             persona.setTipoDeDni(personaRequest.getTipoDeDni());
             persona.setNombre(personaRequest.getNombre());
             persona.setApellido(personaRequest.getApellido());
             persona.setEmail(personaRequest.getEmail());
             persona.setTelefono(personaRequest.getTelefono());
             persona.setUsuarioId(personaRequest.getUsuarioId());
             
             personaRepositorio.save(persona);
     
             return persona;
    }
    
    
    
    private void validacionPersona (Persona personaRequest) throws Exception{
        
        
        if (personaRequest.getNombre().length() >50 || personaRequest.getNombre().length() <2) {
              throw new Exception ("error en nombre");
            
        }
        
        if (personaRequest.getApellido().length() >50 || personaRequest.getApellido().length() <2 ) {
          throw new Exception ("error en apellido");
        }
        
       
    }
    
    
    public void eliminarPersona (String id){
        
        Persona persona = personaRepositorio.getById(id);
        
        persona.setFechaDeBaja(new Date ());
        
        personaRepositorio.save(persona);
        
    }
    
    public List<Persona> mostrarTodasLasPersona (){
        return personaRepositorio.findAll();
    }
    
    public Persona mostrarPersona(String dni){
        
        return personaRepositorio.getById(dni);
    }
    
    
    
}
