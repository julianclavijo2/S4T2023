import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

export interface Formulario {
    Profesor: Profesor;
    Colegio: Colegio;
    Equipo: Equipo;
    Proyecto: Proyecto;
    Concurso: Concurso;
    IsComplete: boolean;
    CodRegistro: string;
}

export interface Colegio {
    IsFinish: boolean;
    NombreColegio: string;
    Direccion: string;
    Pais: string;
    Departamento: string;
    Ciudad: string;
}

export interface Concurso {
    IsFinish: boolean;
    ParticipacionAnterior: boolean;
    AnnoParticipacionAnterior: string;
}

export interface Equipo {
    IsFinish: boolean;
    NombreEquipo: string;
    TipoColegio: string;
    CantEstudiantes: string;
    EquipoMixto: boolean;
    Integrantes: Integrante[];
}

export interface Integrante {
    EstudianteGrado: string;
    EstudianteGrupoEtnico: boolean;
    GrupoEtnico: string;
}

export interface Profesor {
    IsFinish: boolean | null;
    NombreCompleto: string;
    Documento: number;
    Celular: number;
    Email: string;
}

export interface Proyecto {
    IsFinish: boolean;
    NombreProyecto: string;
    Tematica: string;
    Empatizar: string;
    Definir: string;
    Idear: string;
    Prototipar: string;
    Validar: string;
    AceptoTerminos: number;
    AutorizoDatos: number;
}

@Injectable({
    providedIn: 'root'
  })
export class FormularioRegistro {

    private formularioBase: Formulario;

    constructor() {
        this.formularioBase = this.getFormularioBase();
    }

    getFormularioBase(): Formulario {
        return {
            Profesor: {
                IsFinish: false,
                NombreCompleto: "",
                Documento: 0,
                Celular: 0,
                Email: ""
            },
            Colegio: {
                IsFinish: false,
                NombreColegio: "",
                Direccion: "",
                Pais: "",
                Departamento: "",
                Ciudad: ""
            },
            Equipo: {
                IsFinish: false,
                NombreEquipo: "",
                TipoColegio: "",
                CantEstudiantes: "",
                EquipoMixto: false,
                Integrantes: [
                    {
                        EstudianteGrado: "",
                        EstudianteGrupoEtnico: false,
                        GrupoEtnico: ""
                    },
                    {
                        EstudianteGrado: "",
                        EstudianteGrupoEtnico: false,
                        GrupoEtnico: ""
                    },
                    {
                        EstudianteGrado: "",
                        EstudianteGrupoEtnico: false,
                        GrupoEtnico: ""
                    },
                    {
                        EstudianteGrado: "",
                        EstudianteGrupoEtnico: false,
                        GrupoEtnico: ""
                    }
                ]
            },
            Proyecto: {
                IsFinish: false,
                NombreProyecto: "",
                Tematica: "",
                Empatizar: "",
                Definir: "",
                Idear: "",
                Prototipar: "",
                Validar: "",
                AceptoTerminos: 0,
                AutorizoDatos: 0
            },
            Concurso: {
                IsFinish: false,
                ParticipacionAnterior: false,
                AnnoParticipacionAnterior: ""
            },
            IsComplete: false,
            CodRegistro: ""
        };
    }

    setStepOne(form: any) {
        this.formularioBase.Profesor = form;
        return this.formularioBase;
    }





}


