import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {NewTicketInputData} from "./new-ticket.model";

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // ViewChild 데코레이터는 템플릿의 요소(view)를 선택할 수 있도록 하는 데코레이터다.
  // 컴포넌트 클래스 이름, 디렉티브 클래스 이름 등을 전달하여 인스턴스를 가져올 수도 있고,
  // 템플릿 변수 이름을 문자열로 전달하여 해당 텔플릿 변수가 할당된 DOM 요소 / 인스턴스를 가져올 수도 있다.
  // 하지만 값은 가져온 요소를 감싸는 ElementRef 객체다.
  // 이 프로퍼티는 optional로 처리해야 하는데, 컴포넌트가 인스턴스화 될 때는 값이 초기화 되지 않고, 템플릿까지 초기화 될 때 이 값이 초기화 될 것이기 때문이다.
  @ViewChild(ButtonComponent) buttonComponent?: ButtonComponent;
  @ViewChild('form') formElementRef?: ElementRef<HTMLFormElement>;
  // ViewChildren 데코레이터는 여러 요소를 선택하고 싶을 때 사용할 수 있다.
  @Output() add = new EventEmitter<NewTicketInputData>();

  onSubmit(title: string, request: string) {
    this.add.emit({title, request});
    this.formElementRef?.nativeElement.reset();
  }
}
