import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

/****
Not sure if I have to import the following
impot{FormsModule} from 'angular/forms';

@NgModule({
  imports: [
    ...,
    FormsModule
  ],
  declarations: [...],
  bootstrap: [...]
})
export class AppModule {}
*/
