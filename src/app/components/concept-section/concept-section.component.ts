import { Component } from '@angular/core';

@Component({
  selector: 'app-concept-section',
  templateUrl: './concept-section.component.html',
  styleUrls: ['./concept-section.component.css']
})
export class ConceptSectionComponent {
  dictionary = {
    concept1: { 
      imageUrl: 'https://i.ibb.co/wyLpkFP/b160ae42-c014-4425-a073-0b54e6d5f260.jpg',
      field1: 'Confort', 
      field2: 'Aportamos nuestro conocimiento y experiencia para controlar todos los aspectos de tu vivienda, oficina o edificio de manera que aumentemos el confort en el mismo, poniendo así la domótica a tu servicio.', 
      
    },
    concept2: { 
      imageUrl: 'https://i.ibb.co/Xt6H4C2/11055008-a4f6-4408-8bc3-9c1de332cb59.jpg',
      field1: 'Comunicación y Control', 
      field2: 'Las instalaciones domóticas permiten controlar y gestionar de forma remota todos los aspectos en cualquier vivienda, oficina o edificio desde tu tablet o móvil.', 
      
    },
    concept3: { 
      imageUrl: 'https://i.ibb.co/hLydGxS/23b9bd9c-8537-4310-ae8a-1e4c1620016a.jpg',
      field1: 'Seguridad', 
      field2: 'Las instalaciones domóticas mejoran la seguridad tanto en el interior como en el exterior de las viviendas protegiendo así los bienes y las personas que en ellas habitan.', 
       
    },
    concept4: { 
      imageUrl: 'https://i.ibb.co/T81Trfs/3b0ec9d8-8e74-4be9-b3db-24f61cf6d8f0.jpg',
      field1: 'Ahorro Energético', 
      field2: 'Esto es posible gracias a una optimización del control en las instalaciones consumidoras de energía como, por ejemplo, la calefacción, o la generación de agua caliente sanitaria.', 
      
    },
    concept5: { 
      imageUrl: 'https://i.ibb.co/TkZ4PW5/69c5a2c6-ff7e-47fe-85a8-db8c478a707e.jpg',
      field1: 'Accesibilidad', 
      field2: 'Adaptamos el entorno a todo tipo de personas, sea cual sea su limitación o discapacidad. Gracias a ello se ofrece más autonomía al individuo en sus tareas y quehaceres cotidianos.', 
      
    }
  };
}
