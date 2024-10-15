import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit{

itemForm!:FormGroup


ngOnInit(): void {
  this.buildform()
}

constructor(
  private dbservice:DbService,
  private fb:FormBuilder
){}


buildform(){
this.itemForm = this.fb.group({
  username:["",Validators.required],
  email:[""],
  mobile:['',[Validators.required,Validators.maxLength(10)]],
  gender:['',Validators.required],
  qualification:['',Validators.required]
})
}



submit(){
  if(this.itemForm.invalid){
    alert("Invalid form")
    return
  }


this.dbservice.methodPost("userRegister",this.itemForm.value).subscribe((data)=>{

})

}






}
