import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProcessService } from 'ngx-auth-firebaseui';

import { Observable } from 'rxjs';

import { Score } from '../models/score';
import { DuelService } from '../services/duel.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  constructor(private duelService: DuelService, public auth: AuthProcessService) { }

  scores: Observable<Score[]> = this.duelService.getScores()
}
