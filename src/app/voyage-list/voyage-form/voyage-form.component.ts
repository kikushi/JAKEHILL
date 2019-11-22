import { Component, OnInit } from '@angular/core';
import { VoyagesService } from '../../services/voyages.service';
import { Voyage } from '../../models/Voyage.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import *as firebase from 'firebase';


@Component({
  selector: 'app-voyage-form',
  templateUrl: './voyage-form.component.html',
  styleUrls: ['./voyage-form.component.css']
})
export class VoyageFormComponent implements OnInit {
  voyageForm: FormGroup;
  fileIsUploading = false;
  fileUrl:string;
  fileUploaded=false;


  constructor(private formBuilder: FormBuilder, private voyagesService: VoyagesService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
