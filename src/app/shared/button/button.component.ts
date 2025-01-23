import {Component, Input} from '@angular/core';

@Component({
  selector: 'button[appButton]', // selector는 쉼표로 구분해서 여러 개 적을 수 있음(근데 보통 하나 적음)
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
}
