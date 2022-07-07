import { Component, OnInit } from '@angular/core';
import { Apps, Dashboard, MaterialUI, Tree } from '../../model/expansion-panel';


@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  Dashboard: Dashboard[] =[ 
    {name:'Dashboard 1', router:'/dashboard1'},  
    {name:'Dashboard 2', router:'/dashboard2'},  
  ]
  
  Apps: Apps[] =[  
    {name:'Calendar'},  
    {name:'Mailbox'}, 
    {name:'Mail'},  
    {name:'Chat'},
    {name:'Taskboard'},  
    {name:'Notes'},
    {name:'Employees'},  
    {name:'Courses'}, 
    {name:'Contact'},  
    {name:'Ticket Details'},
    {name:'Invoice'},  
    {name:'Todo'}, 
]

MaterialUI: MaterialUI[] =[  
  {name:'Badge'},  
  {name:'Buttons'}, 
  {name:'Cards'},  
  {name:'Grid Lists'},
  {name:'Tooldbar'},  
  {name:'SnackBar'},
  {name:'Slider'},  
  {name:'Slide Toggle'},  
]

Tree: Tree[] =[  
  {name:'Dynamic Data Tree'},  
  {name:'Flat Tree'}, 
  {name:'Loaded Tree'},  
  {name:'Nested Tree'}, 
]
  
  
}   
 
