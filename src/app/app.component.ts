import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Score } from './score/score';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: AngularFirestore) { }

  title = 'duel';
  // @ts-ignore
  scores: Observable<Score[]> = this.store.collection('scores').valueChanges({ idField: 'id' });
  /*
    scores: Score[] = [
      {
        title: 'Alice',
        currentValue: 89,
        targetValue: 100
      },
      {
        title: 'Lars',
        currentValue: 48,
        targetValue: 100
      }
    ]
    */
}
