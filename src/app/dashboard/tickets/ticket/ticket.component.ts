import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ticket} from "../tickets.model";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @Input()  데코레이터 옵션값들에 여러가지가 있다.
  // alias, transform 가 있다.
  // alias는 템플릿에서 바인딩하는 입력 프로퍼티의 별칭으로 입력 프로퍼티의 별칭을 템플릿에서 사용한다.(그냥 사용하지 말자)
  // transform은 입력값을 받을 때 입력된 값을 변환하여 받을 수 있도록 한다.
  //   tranform: (value) => {} 같은 방식으로 사용
  @Input({required: true}) data!: Ticket;
  isDetailVisible = false;
  // @Output 데코레이터도 마찬가지로 별칭 설정 가능
  @Output() close = new EventEmitter<void>();

  handleVisible() {
    this.isDetailVisible = !this.isDetailVisible;
  }

  handleClose() {
    this.close.emit();
  }
}
