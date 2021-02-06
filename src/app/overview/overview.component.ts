import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Score } from '../score/score';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  constructor(private store: AngularFirestore) { }

  // @ts-ignore
  scores: Observable<Score[]> = this.store.collection('scores').valueChanges({ idField: 'id' });
}
