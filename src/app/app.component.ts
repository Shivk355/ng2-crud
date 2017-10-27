import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	employeeRecords = [
	{
		name:'Shiv',
		position: 'Web Developer'
	},
	{
		name:'ABC',
		position: 'Full Stack Developer'
	},
	{
		name:'XYZ',
		position: 'XYZ Developer'
	}
	];

	model: any = {};
	public update = false;
	currentData;

	addRecord(){
		if(this.model.name != undefined && this.model.position != undefined){
			this.employeeRecords.push(this.model);
			this.model = {};
		}
	}
  
	deleteData(i){
		this.employeeRecords.splice(i,1);
		this.model = {};
		this.update = false;
	}
  
	editData(k){
		this.update = true;
		this.model.name = this.employeeRecords[k].name;
		this.model.position = this.employeeRecords[k].position;
		this.currentData = k;
	}
  
	updateRecord(){
	console.log(this.model.name);
		if(this.model.name != '' && this.model.position != ''){
			let x = this.currentData;
			this.employeeRecords[x].name = this.model.name;
			this.employeeRecords[x].position = this.model.position;
			this.model = {};
			this.update = false;
		}
	}
}
