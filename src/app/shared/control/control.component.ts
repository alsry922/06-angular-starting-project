import {Component, ElementRef, HostListener, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // css 파일이 어느 범위까지 적용되도록 할 것인가(None은 컴포넌트 단위로 제한하지 않음. 즉, 전역 스타일처럼 동작함)
  // host 속성은 호스트 요소의 속성으로 추가하기 위한 값들을 객체로 정의할 수 있음
  //   즉, host 속성에 정의한 프로퍼티들은 이 호스트 요소의 속성으로 적용됨
  host: {
    class: 'control',
  }
})
export class ControlComponent {
  @Input({required: true}) label!: string;
  constructor(
    // ElementRef는 엘리먼트를 참조하는 객체임
    // 컴포넌트에 주입받음으로써, 컴포넌트의 호스트 엘리먼트를 참조하는 객체를 주입받을 수 있음.
    // ElementRef 객체는 nativeElement 속성을 갖고있는데 이게 DOM 객체임.
    private el: ElementRef,
  ) {
  }

  // @HostListener, @HostBinding은 16버전 이후로는 추천하지 않고,
  // @Component 데코레이터의 host 프로퍼티로 접근하는 것을 권장한다.
  //   @HostListener 데코레이터의 첫 번째 인자는 이벤트 이름이다.
  //   두 번째 인자는 이벤트 객체이며, 이벤트 객체의 특정 프로퍼티를 전달하도록 할 수 있다
  //   ex) ['$event'] / ['$event', '$event.key']
  @HostListener('click')
  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
