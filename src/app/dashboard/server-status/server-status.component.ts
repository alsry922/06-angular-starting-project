import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServerStatus} from "./server-status.model";

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: ServerStatus = 'online';
  private interval?: ReturnType<typeof setInterval>;

  // constructor는 이 컴포넌트의 인스턴스가 생상될 때마다 실행된다.
  // constructor는 간단하게 유지하고 클래스 초기화 작업만 수행(초기 클래스 프로퍼티 값 할당 등)
  constructor() {
    // setInterval(() => {
    //   const rnd = Math.random();
    //   if (rnd <0.5) {
    //     this.currentStatus = 'online';
    //   } else if (rnd < 0.9) {
    //     this.currentStatus = 'offline';
    //   } else {
    //     this.currentStatus = 'unknown';
    //   }
    // }, 5000);
  }

  // 컴포넌트가 초기화되고, 입력값이 초기화 된 시점에 실행
  // HTTP 요청 보내기와 같은 복잡한 초기화 작업을 OnInit에 실행
  // 입력값이 초기화된 시점에 실행되니까, 이 메소드에서는 입력 프로퍼티를 사용가능하지만 constructor에서는 사용 불가능
  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
