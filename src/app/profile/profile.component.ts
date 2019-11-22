import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import *as firebase from 'firebase';
import { Observable } from 'rxjs';
import { UrlSerializer } from '@angular/router';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { userInfo } from 'os';
import { VoyagesService } from '../services/voyages.service';
import { Voyage } from '../models/Voyage.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:user;
 
  userA:user;
  username:string;
  email:string;
  uid:string;
  infosU:Observable<any[]>;
  infos:string[];
  voyages: Voyage[];
  reservations:Voyage[];
  voyagesSubscription: Subscription;
  constructor(private voyagesService: VoyagesService, private router: Router) { 
  }
  

  ngOnInit() {
    this.voyagesSubscription = this.voyagesService.voyagesSugjet.subscribe(
      (voyages: Voyage[]) => {
        this.voyages = voyages;
      }
    );
    this.voyagesService.getVoyageforUser();
    this.voyagesService.emitVoyages();
    this.voyagesSubscription = this.voyagesService.voyagesSugjet.subscribe(
      (reservations: Voyage[]) => {
        this.reservations = reservations;
      }
    );
    this.voyagesService.getVoyageforUser();
    this.voyagesService.emitVoyages();
    
    //this.user = new user(firebase.auth().currentUser.displayName.toString(),firebase.auth().currentUser.uid.toString());
    console.log("jockobobo");
    const userinfos =document.querySelector('#infosUser');
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid.toString()).get().then(function(doc) {
      if (doc.exists) {
        //this.user = new user(doc.get("Username"),doc.get("Uid"));
          console.log("Document data:", doc.data());
          let li = document.createElement('li');
          let name = document.createElement('li');
          let uid = document.createElement('li');
          let email = document.createElement('li');

          li.setAttribute('data-id',doc.id);
          
          name.textContent = "Username: "+doc.get('Username');
          uid.textContent = "Uid: "+doc.get('Uid');
          email.textContent ="Email: "+ doc.get('Email');
 
          li.appendChild(name);
          li.appendChild(uid);
          li.appendChild(email);
          if(userinfos!=null){
            userinfos.appendChild(li);
          }
          
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
   // this.user.displayName=this.username;
    
  
  }
  onViewVoyage(id: number) {
    this.router.navigate(['/voyages', 'view', id]);
  }
  
  
 
  

}

  

