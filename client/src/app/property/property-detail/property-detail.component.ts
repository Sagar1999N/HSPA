import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@Angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {    
    this.route.paramMap.subscribe((params) => {
        this.propertyId = Number(params.get('id'));
      }
    );
  }

  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId])
  }

}
