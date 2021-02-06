import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AuthProcessService } from 'ngx-auth-firebaseui';
import { Observable } from 'rxjs';

import { Score } from '../score/score';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  constructor(private store: AngularFirestore, public auth: AuthProcessService) { }

  // @ts-ignore
  scores: Observable<Score[]> = this.store.collection('duels').doc(this.auth.user.uid).collection('scores').valueChanges({ idField: 'id' });
}
