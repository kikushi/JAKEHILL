import { Component, OnInit } from '@angular/core';
import { Voyage} from '../../models/Voyage.model';

import * as firebase from 'firebase';

@Component({
  selector: 'app-single-voyage',
  templateUrl: './single-voyage.component.html',
  styleUrls: ['./single-voyage.component.css']
})
export class SingleVoyageComponent implements OnInit {

  voyage: Voyage;

  constructor(private route: ActivatedRoute, private voyagesService: VoyagesService,
              private router: Router) {}

  ngOnInit() {

  }

  onBack() {
    this.router.navigate(['/voyages']);
  }
  

}
