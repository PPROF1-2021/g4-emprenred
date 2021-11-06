
package com.example.emprendRed.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table (name = "Personas")
public class Persona implements Serializable {
   
    @Id
    private String dni;
    
    @Column(name="tipo_de_dni") 
    private String tipoDeDni;
    
    private String nombre;
    
    private String apellido;
    
    private String telefono;
    
    private String email;
    
    @Temporal(TemporalType.DATE)
    private Date fechaDeBaja;

    public Date getFechaDeBaja() {
        return fechaDeBaja;
    }

    public void setFechaDeBaja(Date fechaDeBaja) {
        this.fechaDeBaja = fechaDeBaja;
    }
    
    @Column (name = "usuario_id")
    private Integer usuarioId;
    
    

    public Persona() {
    }

    public Persona(String dni, String tipoDeDni, String nombre, String apellido, String telefono, String email) {
        this.dni = dni;
        this.tipoDeDni = tipoDeDni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getTipoDeDni() {
        return tipoDeDni;
    }

    public void setTipoDeDni(String tipoDeDni) {
        this.tipoDeDni = tipoDeDni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }
    
    
    
            
            
    
}
