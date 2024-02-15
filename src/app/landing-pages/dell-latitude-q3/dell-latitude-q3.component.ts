import { Component } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Month, ContactAgain, BuyingProcess, Budget, TechSolution, User, Week, EmployeeSize } from 'src/app/interfaces/interface';

// Custom validator function
function officeEmailValidator(control: FormControl): ValidationErrors | null {
	const email = control.value;
	const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();

	if (domain.includes('gmail') || domain.includes('yahoo') || domain.includes('hotmail')) {
		return {
			personalEmail: {
				valid: false
			}
		};
	}

	return null;
}

@Component({
	selector: 'app-dell-latitude-q3',
	templateUrl: './dell-latitude-q3.component.html',
	styleUrls: ['./dell-latitude-q3.component.scss']
})
export class DellLatitudeQ3Component {

	form!: FormGroup

	FORMSUBMIT_URL = "https://formsubmit.co/ajax/3340b69e72200ca4134393a59ebfab24";
	TESTING_URL = "https://formsubmit.co/ajax/anosales207@gmail.com";
	
	techSolutions: TechSolution[] = [
		{ value: 'Laptops', viewValue: 'Laptops' },
		{ value: 'Desktops & All-In-One PCs', viewValue: 'Desktops & All-In-One PCs' },
		{ value: 'Workstations', viewValue: 'Workstations' },
		{ value: 'Monitors & Accessories', viewValue: 'Monitors & Accessories' },
		{ value: 'Servers', viewValue: 'Servers' },
		{ value: 'Networking', viewValue: 'Networking' },
		{ value: 'Data Storage', viewValue: 'Data Storage' },
	]

	weeks: Week[] = [
		{ value: '0 - 4 Weeks', viewValue: '0 - 4 Weeks' },
		{ value: '5 - 8 Weeks', viewValue: '5 - 8 Weeks' },
		{ value: 'Above 8 Weeks', viewValue: 'Above 8 Weeks' },
	]

	budgets: Budget[] = [
		{ value: '< INR 2 lakhs', viewValue: '< INR 2 lakhs' },
		{ value: 'INR 2 lakhs - INR 3 lakhs', viewValue: 'INR 2 lakhs - INR 3 lakhs' },
		{ value: 'INR 3 lakhs - INR 4 lakhs', viewValue: 'INR 3 lakhs - INR 4 lakhs' },
		{ value: '> INR 4 lakhs', viewValue: '> INR 4 lakhs' },
	]

	contactAgain: ContactAgain[] = [
		{ value: 'Yes', viewValue: 'Yes' },
		{ value: 'No', viewValue: 'No' },
	]

	employeeSize: EmployeeSize[] = [
		{ value: '1 - 20', viewValue: '1 - 20' },
		{ value: '21 - 50', viewValue: '21 - 50' },
		{ value: '51 - 99', viewValue: '51 - 99' },
		{ value: '100+', viewValue: '100+' },
	]

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
	) { }


	ngOnInit() {
		this.form = this.fb.group({
			techSolutions: this.fb.group({
				laptops: [false],
				desktops: [false],
				workstations: [false],
				monitors: [false],
				servers: [false],
				networking: [false],
				dataStorage: [false],
			}),

			timeFrame: ['', Validators.required],
			allocatedBudget: ['', Validators.required],
			contactAgain: ['', Validators.required],
			employeeSize: [''],
			consent: [false],
		});
	}

	//onSubmit()
	onSubmit(user: User) {
		const formData = new FormData();
		formData.append('Coming from', 'Dell Latitude Q3');
		formData.append('Is your organization considering a refresh, upgrade, or new deployment of any of the following technologies/solutions ?', '');
		formData.append('Laptops', this.form.get('techSolutions')!.value.laptops);
		formData.append('Workstations', this.form.get('techSolutions')!.value.workstations);
		formData.append('Data Storage', this.form.get('techSolutions')!.value.dataStorage);
		formData.append('Monitors & Accessories', this.form.get('techSolutions')!.value.monitors);
		formData.append('Desktops & All-In-One PCs', this.form.get('techSolutions')!.value.desktops);
		formData.append('Servers', this.form.get('techSolutions')!.value.servers);
		formData.append('Networking', this.form.get('techSolutions')!.value.networking);
		formData.append('If yes, what is the time frame within which you are looking to implement the above solutions ?', this.form.get('timeFrame')!.value);
		formData.append('Has your organization allocated a budget for the above-mentioned requirement?', this.form.get('allocatedBudget')!.value);
		formData.append('Would you like to be contacted by a Dell Technologies Advisor to discuss your IT requirements?', this.form.get('contactAgain')!.value);
		formData.append('Stay in touch', this.form.get('consent')!.value);

		fetch(this.FORMSUBMIT_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				this.openSuccessSnackBar();
			})
			.catch(error => {
				this.openFailureSnackBar();
			});
	}

	//Successful Snackbar addDoNotSellMyInfoUser() event
	openSuccessSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message sent!', 'Close', config);
	}

	//Failure Snackbar addDoNotSellMyInfoUser() event
	openFailureSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message not sent!', 'Close', config);
	}
}
