import { Component } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Month, ContactAgain, BuyingProcess, Budget, TechSolution, User } from 'src/app/interfaces/interface';

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
	selector: 'app-dell-all-in-one',
	templateUrl: './dell-all-in-one.component.html',
	styleUrls: ['./dell-all-in-one.component.scss']
})
export class DellAllInOneComponent {

	form!: FormGroup

	FORMSUBMIT_URL = "https://formsubmit.co/ajax/3340b69e72200ca4134393a59ebfab24";
	TESTING_URL = "https://formsubmit.co/ajax/anosales207@gmail.com";

	months: Month[] = [
		{ value: '0 - 3 Weeks', viewValue: '0 - 3 Weeks' },
		{ value: '0 - 5 Weeks', viewValue: '0 - 5 Weeks' },
		{ value: '0 - 7 Weeks', viewValue: '0 - 7 Weeks' },
	]

	contactAgain: ContactAgain[] = [
		{ value: 'Yes', viewValue: 'Yes' },
		{ value: 'No', viewValue: 'No' },
	]

	buyingProcess: BuyingProcess[] = [
		{ value: 'Yes', viewValue: 'Yes' },
		{ value: 'No', viewValue: 'No' },
	]

	budgets: Budget[] = [
		{ value: 'INR 2 lakh - INR 3 lakh', viewValue: 'INR 2 lakh - INR 3 lakh' },
		{ value: 'INR 3 lakh - INR 4 lakh', viewValue: 'INR 3 lakh - INR 4 lakh' },
		{ value: '> 4 lakhs', viewValue: '> 4 lakhs' },
	]

	techSolutions: TechSolution[] = [
		{ value: 'Laptops', viewValue: 'Laptops' },
		{ value: 'Desktops & All-In-One PCs', viewValue: 'Desktops & All-In-One PCs' },
		{ value: 'Workstations', viewValue: 'Workstations' },
		{ value: 'Monitors & Accessories', viewValue: 'Monitors & Accessories' },
		{ value: 'Servers', viewValue: 'Servers' },
		{ value: 'Networking', viewValue: 'Networking' },
		{ value: 'Data Storage', viewValue: 'Data Storage' },
		{ value: 'Routers and Switches', viewValue: 'Routers and Switches' },
	]

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
	) { }

	email = new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), officeEmailValidator]);

	ngOnInit() {

		this.form = this.fb.group({
			email: this.email,
			fullName: ['', Validators.required],
			websiteName: ['', [Validators.required, Validators.pattern(/^[^\s@]+\.[^\s@]+\.[^\s@]+$/)]],
			jobTitle: ['', Validators.required],
			companyName: ['', Validators.required],
			phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
			alternativePhoneNo: ['', [Validators.pattern(/^[6-9]\d{9}$/)]],

			techSolutions: this.fb.group({
				laptops: [false],
				desktops: [false],
				workstations: [false],
				monitors: [false],
				servers: [false],
				networking: [false],
				dataStorage: [false],
				routersAndSwitches: [false],
			}),

			timeFrame: ['', Validators.required],
			allocatedBudget: ['', Validators.required],
			contactAgain: ['', Validators.required],
		});
	}

	//onSubmit()
	onSubmit(user: User) {
		const formData = new FormData();
		formData.append('Coming from', 'All in One Form');
		formData.append('Email', this.form.get('email')!.value);
		formData.append('Full Name', this.form.get('fullName')!.value);
		formData.append('Website Name', this.form.get('websiteName')!.value);
		formData.append('Job Title', this.form.get('jobTitle')!.value);
		formData.append('Company Name', this.form.get('companyName')!.value);
		formData.append('Phone', this.form.get('phone')!.value);
		formData.append('Alternative Phone Number', this.form.get('alternativePhoneNo')!.value);
		formData.append('Is your organization considering a refresh, upgrade, or new deployment of any of the following technologies/solutions ?', this.form.get('techSolutions')!.value);
		formData.append('Laptops', this.form.get('techSolutions')!.value.laptops);
		formData.append('Workstations', this.form.get('techSolutions')!.value.workstations);
		formData.append('Data Storage', this.form.get('techSolutions')!.value.dataStorage);
		formData.append('Monitors & Accessories', this.form.get('techSolutions')!.value.monitors);
		formData.append('Desktops & All-In-One PCs', this.form.get('techSolutions')!.value.desktops);
		formData.append('Servers', this.form.get('techSolutions')!.value.servers);
		formData.append('Networking', this.form.get('techSolutions')!.value.networking);
		formData.append('Routers and Switches', this.form.get('techSolutions')!.value.routersAndSwitches);
		formData.append('If yes, what is the time frame within which you are looking to implement the above solutions ?', this.form.get('timeFrame')!.value);
		formData.append('Has your organization allocated a budget for the above-mentioned requirement?', this.form.get('allocatedBudget')!.value);
		formData.append('Would you like to be contacted by a Dell Technologies Advisor to discuss your IT requirements?', this.form.get('contactAgain')!.value);

		fetch(this.TESTING_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				this.openSuccessSnackBar();
				console.log(data)
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
