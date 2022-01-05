import { Component, Input, OnInit, SimpleChange } from '@angular/core';
@Component({
  selector: 'lib-join-historia',
  templateUrl: './join-historia.component.html',
  styleUrls: ['./join-historia.component.css']
})
export class JoinHistoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() historiaId : number | undefined;
  public pkHistoria   : number | undefined;

  ngOnChanges(changes:SimpleChange){
    this.pkHistoria=this.historiaId;
  }
}
