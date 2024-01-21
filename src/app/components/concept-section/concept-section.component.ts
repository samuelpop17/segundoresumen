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
      field3:'Brinda a tu hogar el máximo nivel de confort con la tecnología domótica. Ajusta la iluminación, la temperatura y la música con solo tocar un botón o dar una orden de voz. Personaliza tu entorno para adaptarse a tus preferencias, creando un ambiente acogedor y relajante con la simpleza de la automatización.'
    },
    concept2: { 
      imageUrl: 'https://i.ibb.co/Xt6H4C2/11055008-a4f6-4408-8bc3-9c1de332cb59.jpg',
      field1: 'Comunicación y Control', 
      field2: 'Las instalaciones domóticas permiten controlar y gestionar de forma remota todos los aspectos en cualquier vivienda, oficina o edificio desde tu tablet o móvil.', 
      field3:'La domótica transforma tu casa en un espacio inteligente, permitiéndote controlar todos los dispositivos desde la palma de tu mano. Comunícate con tu hogar de forma remota, supervisa y gestiona la seguridad, la iluminación y otros aspectos esenciales a través de tu smartphone. El control total está a solo un clic de distancia.'
    },
    concept3: { 
      imageUrl: 'https://i.ibb.co/hLydGxS/23b9bd9c-8537-4310-ae8a-1e4c1620016a.jpg',
      field1: 'Seguridad', 
      field2: 'Las instalaciones domóticas mejoran la seguridad tanto en el interior como en el exterior de las viviendas protegiendo así los bienes y las personas que en ellas habitan.', 
      field3:'Garantiza la tranquilidad de tu familia con las soluciones de seguridad avanzadas de la domótica. Detectores de movimiento, cámaras de vigilancia y sistemas de acceso remoto te brindan la capacidad de monitorear tu hogar en tiempo real. Recibe alertas instantáneas y toma el control ante cualquier situación desde cualquier lugar.'
    },
    concept4: { 
      imageUrl: 'https://i.ibb.co/T81Trfs/3b0ec9d8-8e74-4be9-b3db-24f61cf6d8f0.jpg',
      field1: 'Ahorro Energético', 
      field2: 'Esto es posible gracias a una optimización del control en las instalaciones consumidoras de energía como, por ejemplo, la calefacción, o la generación de agua caliente sanitaria.', 
      field3:'La domótica no solo ofrece comodidad, sino también eficiencia energética. Optimiza el consumo de energía mediante la automatización de luces, termostatos y electrodomésticos. Programa rutinas inteligentes que se ajusten a tus hábitos, contribuyendo al ahorro y a la sostenibilidad sin comprometer la comodidad.'
    },
    concept5: { 
      imageUrl: 'https://i.ibb.co/TkZ4PW5/69c5a2c6-ff7e-47fe-85a8-db8c478a707e.jpg',
      field1: 'Accesibilidad', 
      field2: 'Adaptamos el entorno a todo tipo de personas, sea cual sea su limitación o discapacidad. Gracias a ello se ofrece más autonomía al individuo en sus tareas y quehaceres cotidianos.', 
      field3:'Haz tu hogar accesible para todos con la domótica. Controla dispositivos a través de comandos de voz, facilitando la interacción para personas con movilidad reducida. La tecnología inclusiva permite adaptar el entorno a las necesidades individuales, promoviendo la independencia y la participación de todos en la vida cotidiana.'
    }
  };
}
