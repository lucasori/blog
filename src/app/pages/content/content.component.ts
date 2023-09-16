import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import {data} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() photoCover: string = "";
  @Input() contentTitle: string = "";
  @Input() contentDescription: string = "";

  private id:string | null = "0";

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.routeActivated.paramMap.subscribe(value =>
      this.id = value.get("id")
    )


    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null){

    const result = data.filter(article => article.id === id)[0];

    if (result){
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }else{
      this.router.navigate(['']);
    }

  }

}
