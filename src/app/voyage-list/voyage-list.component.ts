import { Component, OnDestroy, OnInit } from '@angular/core';
import { VoyagesService } from '../services/voyages.service';
import { Voyage } from '../models/Voyage.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.css']
})
          
export class VoyagesListComponent implements OnInit, OnDestroy {

  voyages: Voyage[];
  voyagesSubscription: Subscription;

  constructor(private voyagesService: VoyagesService, private router: Router) {}

  ngOnInit() {
    this.voyagesSubscription = this.voyagesService.voyagesSugjet.subscribe(
      (voyages: Voyage[]) => {
        this.voyages = voyages;
      }
    );
    this.voyagesService.getVoyages();
    this.voyagesService.emitVoyages();
  }

  onNewVoyage() {
    this.router.navigate(['/voyages', 'new']);
  }

  onDeleteVoyage(voyage: Voyage) {
    this.voyagesService.removeVoyage(voyage);
  }

  onViewVoyage(id: number) {
    this.router.navigate(['/voyages', 'view', id]);
  }
  
  ngOnDestroy() {
    this.voyagesSubscription.unsubscribe();
  }
}
