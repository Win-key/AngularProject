import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.css']
})
export class NgxModalComponent implements OnInit {
  @Input() imagePath : string;

  constructor() { }

  ngOnInit() {
    
  }

}
