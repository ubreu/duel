import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Score } from './score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  constructor(private store: AngularFirestore) { }

  @Input() score: Score = {
    title: '',
    currentValue: 0,
    targetValue: 0
  };
  @Output() edit = new EventEmitter<Score>();

  subTitle(): string {
    return " / " + this.score.targetValue
  }

  updateScore(delta: number): void {
    this.score.currentValue += delta;
    this.store.collection('scores').doc(this.score.id).update(this.score);
  }
}
