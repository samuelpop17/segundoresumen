import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_rv7bykp', 'template_wwpuvrj', e.target as HTMLFormElement, 'ExPSrGwO6SCA_y1bA')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      emailjs.sendForm('service_rv7bykp', 'template_g1wmo3f', e.target as HTMLFormElement, 'ExPSrGwO6SCA_y1bA').then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  


}
