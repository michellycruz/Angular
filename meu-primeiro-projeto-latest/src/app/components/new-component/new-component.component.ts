import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
  styles: [ ]
})
export class NewComponent {}

//hierarquia de estilos: 1 estilos aplicados diretamente no componente > 2 estilo global do componente (new-component.component) > 3 estilo global do projeto (styles.scss).