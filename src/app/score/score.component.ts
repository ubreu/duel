import { Component, Input, Output, EventEmitter } from '@angular/core';


import { Score } from '../models/score';
import { DuelService } from '../services/duel.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  constructor(private duelService: DuelService) { }

  @Input() score: Score = {
    title: '',
    currentValue: 0,
    targetValue: 0
  };
  @Output() edit = new EventEmitter<Score>();

  formatTitle = (percent: number): string => {
    if (percent >= 100) {
      return "Yeah!"
    } else {
      return this.score.currentValue.toString()
    }
  }

  formatSubtitle = (percent: number): string => {
    if (percent >= 100) {
      return ""
    } else {
      return "/ " + this.score.targetValue
    }
  }

  percentage(): number {
    return (this.score.currentValue / this.score.targetValue) * 100
  }

  updateScore(delta: number): void {
    this.score.currentValue += delta
    this.duelService.updateScore(this.score)
  }
}
