import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class TimerComponent implements AfterViewInit {
  @ViewChild('timerElement') timerElement!: ElementRef;
  timeLeft: number = 60;
  totaltimer: number = 60;
  private countdownTimer: any;

  constructor() {}

  ngAfterViewInit(): void {
    console.log('timerElement:', this.timerElement.nativeElement); // Should not be undefined
    this.startTimer();
  }

  private isTimeLeft(): boolean {
    return this.timeLeft > 0;
  }

  startTimer(): void {
    let timer = document.getElementById('timeLeft');
    const timerElement = this.timerElement?.nativeElement;
    const timerCircle = timerElement?.querySelector('svg > circle + circle');

    if (timerElement && timerCircle) {
      timerElement.classList.add('animatable');
      timerCircle.style.strokeDashoffset = '0';

      this.countdownTimer = setInterval(() => {
        if (this.isTimeLeft()) {
          const timeRemaining = --this.timeLeft;
          const normalizedTime =
            (this.totaltimer - timeRemaining) / this.totaltimer;
          // for clockwise animation
          timerCircle.style.strokeDashoffset = normalizedTime;
          if (timer) {
            timer.innerHTML = timeRemaining.toString();
          }
        } else {
          clearInterval(this.countdownTimer);
          timerElement.classList.remove('animatable');
        }
      }, 1000);
    }
  }
  resetTimer(event: Event) {
    event.stopPropagation(); // Prevent event bubbling
    clearInterval(this.countdownTimer);
    this.timeLeft = this.totaltimer;
    this.startTimer();
  }
  ngOnDestroy(): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
  }
}
