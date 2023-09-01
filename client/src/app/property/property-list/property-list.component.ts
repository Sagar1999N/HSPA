import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }    
  
  properties: Array<any> = [
    {
      "Id":1,
      "Type":"House",
      "Name":"Birla House",
      "Price":12000
    },
    {
      "Id":2,
      "Type":"House",
      "Name":"A House",
      "Price":12000
    },
    {
      "Id":3,
      "Type":"House",
      "Name":"B House",
      "Price":12000
    },
    {
      "Id":4,
      "Type":"House",
      "Name":"C House",
      "Price":12000
    },
    {
      "Id":5,
      "Type":"House",
      "Name":"D House",
      "Price":12000
    },
    {
      "Id":6,
      "Type":"House",
      "Name":"E House",
      "Price":12000
    },
    {
      "Id":7,
      "Type":"House",
      "Name":"F House",
      "Price":12000
    },
    {
      "Id":8,
      "Type":"House",
      "Name":"G House",
      "Price":12000
    },
    {
      "Id":9,
      "Type":"House",
      "Name":"H House",
      "Price":12000
    }
  ]
}
