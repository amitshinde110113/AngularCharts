import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  barchartCode!:string;
  linechartCode!:string;
  piechartCode!:string;
  dntchartCode!:string;
  radarchartCode!:string;
  polarchartCode!:string;
  scatterchartCode!:string;
  bubblechartCode!:string;

  title = 'angular-graphs';
  constructor(private dataService:DataService){

  }
 ngOnInit(){
  //  const {getData}=this.dataService;
  
zip(
  this.dataService.getData('assets/bar.text'),
  this.dataService.getData('assets/line.text'),
  this.dataService.getData('assets/pie.text'),
  this.dataService.getData('assets/dnt.text'),
  this.dataService.getData('assets/scatter.text'),
  this.dataService.getData('assets/bubble.text'),
  this.dataService.getData('assets/radar.text'),
  this.dataService.getData('assets/polar.text')
).subscribe(([bar,line,pie,dnt,scatter,bubble,radar,polar])=>{
  this.barchartCode=bar;
  this.linechartCode=line;
  this.piechartCode=pie;
  this.dntchartCode=dnt;
  this.scatterchartCode=scatter;
  this.bubblechartCode=bubble;
  this.radarchartCode=radar;
  this.polarchartCode=polar

},error=>{

})
  
 }

}
