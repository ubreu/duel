import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthProcessService } from 'ngx-auth-firebaseui';

import { Score } from './score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  constructor(private store: AngularFirestore, private auth: AuthProcessService) { }

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
    this.store.collection('duels').doc(this.auth.user.uid).collection('scores').doc(this.score.id).update(this.score)
  }
}
