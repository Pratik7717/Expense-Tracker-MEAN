import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-tracker-form',
  templateUrl: './tracker-form.component.html',
  styleUrls: ['./tracker-form.component.css']
})
export class TrackerFormComponent implements OnInit {

  form: FormGroup;
  @Output() transactionAddedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private httpService: HttpService,
    private fb: FormBuilder
  ) {
    this.form = this.buildForm();
  }
  buildForm(): FormGroup {
    return this.fb.group({
      type: [null],
      description: [null, [Validators.required]],
      amount: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  addTransaction() {
    const reqBody = {
      type: this.form.get('type')?.value,
      text: this.form.get('description')?.value,
      amount: this.form.get('amount')?.value
    }
    this.httpService.post(reqBody).subscribe(() => {
      this.transactionAddedEvent.emit(true);
    })
  }

}
