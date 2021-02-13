import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthProcessService } from 'ngx-auth-firebaseui';
import { Observable } from 'rxjs';
import { Score } from '../models/score';

@Injectable({ providedIn: 'root' })
export class DuelService {

    private scoreCollection: AngularFirestoreCollection<Score>;

    constructor(private store: AngularFirestore, public auth: AuthProcessService) {
        this.scoreCollection = store.collection('duels').doc(this.auth.user.uid).collection<Score>('scores')
    }

    getScores(): Observable<Score[]> {
        return this.scoreCollection.valueChanges({ idField: 'id' })
    }

    updateScore(score: Score) {
        this.scoreCollection.doc(score.id).update(score)
    }
}