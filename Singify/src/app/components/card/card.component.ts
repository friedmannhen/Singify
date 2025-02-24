import { Component } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { word } from '../../models/word.interface';
import { CommonModule } from '@angular/common';
import { TimerComponent } from "../countdown/countdown.component";
@Component({
  selector: 'app-card',
  imports: [CommonModule, TimerComponent],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public word: word = { word: 'null', translation: 'null', used: false };
  word1Hidden = false;
  word2Hidden = false;
  showTranslation = false;

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.word = this.wordsService.getWord();
  }
  changeWord() {
    this.word1Hidden = true;
    this.word2Hidden = true;

    setTimeout(() => {
      this.word = this.wordsService.getWord();
      this.word1Hidden = false;
      this.word2Hidden = false;
    }, 300);
  }
  toggleTranslation(event: Event) {
    event.stopPropagation(); // Prevent event bubbling
    this.showTranslation = !this.showTranslation;
  }

  preventDefaults(event: Event) {
    event.preventDefault(); 
  }
}
