import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent{
@Output()
  onEmpSelected:EventEmitter<string> = new EventEmitter();
  selectedEmp:string = "";

  updateEmp()
  {
    this.onEmpSelected.emit(this.selectedEmp);
  }

  @Output()
  onEmpNoSelected:EventEmitter<string> = new EventEmitter();
  selectEmpNo:string = "";

  updateEmpNo()
  {
    this.onEmpNoSelected.emit(this.selectEmpNo);
  }
}    
