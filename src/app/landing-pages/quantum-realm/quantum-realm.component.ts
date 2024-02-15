import { Component, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { User } from 'src/app/interfaces/interface';

@Component({
	selector: 'app-quantum-realm',
	templateUrl: './quantum-realm.component.html',
	styleUrls: ['./quantum-realm.component.scss']
})
export class QuantumRealmComponent {

	r4_title = 'Meet our speakers!';

	r2 = {
		title: 'Embrace the Quantum Era',
		content: [
			{ text: 'Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve some problems that would take too long to be solved by classical computers. CXOs and ITDMs across industries are recognizing the need to prepare their teams to take advantage of the business and technical impact of quantum computing.' },
			{ text: 'However, we have identified an overarching theme with quantum computing: brilliant minds are working insiloes, limiting their progress. To address this and help you unlock the potential of quantum computing, we are hosting an exclusive gathering that brings together every stakeholder in this sector - including the academia, startups, and government - on a shared platform.' },
			{ text: `Calling all quantum computing researchers, learners, experts, and startups. Join us in bridging gaps and driving scientific innovation. Together, let's transform the quantum landscape, break down barriers, and build an empowered quantum computing community.` },
			{ text: `Welcome to the Quantum Realm!` },
		]
	}

	r3 = [
		{
			time: '2:00 PM to 2:10 PM',
			name: 'Kanishka Agiwal',
			designation: 'Head - Service Lines, India & South Asia',
			company: 'AWS',
			role: 'Keynote',
			imageURL: '../../../assets/images/quantum-realm/Kanishka.png',
		},
		{
			time: '2:10 PM to 2:20 PM',
			name: 'Dr. Preeti Banzal',
			designation: `Adviser/Scientist 'G' Office of the Principal Scientific Adviser (PSA)`,
			company: 'Government of India',
			role: 'Keynote',
			imageURL: '../../../assets/images/quantum-realm/preeti-banzal.png',
		},
		{
			time: '2:20 PM to 2:30 PM',
			name: 'Sunita Verma',
			designation: 'Group Coordinator (R&D), MeitY',
			company: 'Government of India',
			role: 'Keynote',
			imageURL: '../../../assets/images/quantum-realm/sunita-verma.png',
		},
		{
			time: '2:30 PM to 3:00 PM',
			name: 'Dr. Stefan Natu',
			designation: 'Head of Product',
			company: 'Amazon Braket',
			role: 'Building the Innovation Flywheel for Quantum Technologies',
			imageURL: '../../../assets/images/quantum-realm/stefan-natu.png',
		},
		{
			time: '3:00 PM to 3:30 PM',
			name: 'Dr. Nagendra Nagaraja',
			designation: 'Founder, CEO & Chairman',
			company: 'QpiAI',
			role: 'QpiAI Quantum Solutions for Accelerating Development of Quantum Applications in Enterprises',
			imageURL: '../../../assets/images/quantum-realm/nagendra-nagaraja.png',
		},
		{
			time: '3:30 PM to 4:00 PM',
			name: 'José Luis Hevia',
			designation: 'Founder & CTO',
			company: 'aQuantum',
			role: 'Preparing Industry for Quantum-ready Software with QuantumPath®',
			imageURL: '../../../assets/images/quantum-realm/Jose-Luis.png',
		},
		{
			time: '4:00 PM to 4:30 PM',
			name: 'Dr. Erik Garcell',
			designation: 'Technical Marketing Manager',
			company: 'Classiq',
			role: 'Future-proof Quantum Software',
			imageURL: '../../../assets/images/quantum-realm/Erik-Garcell.png',
		},
		{
			time: '4:30 PM to 5:00 PM',
			name: 'Dr. Leonardo Disilvestro',
			designation: 'Senior Quantum Scientist',
			company: 'Entropica Labs',
			role: `The Future Quantum Software Stack - An Introduction to What's Needed to Reach Useful Quantum Computing`,
			imageURL: '../../../assets/images/quantum-realm/Leonardo.png',
		},
		{
			time: '5:00 PM to 5:30 PM',
			name: 'Dr. Nixon Patel',
			designation: 'Founder & CEO',
			company: 'QuLabs',
			role: `Quantum Sustainovation: Powering India's Quantum Future with Qulabs`,
			imageURL: '../../../assets/images/quantum-realm/nixon-patel.png',
		},
	]

	consent_link1 = 'https://aws.amazon.com/legal/marketingentities/';
	consent_link2 = 'https://aws.amazon.com/privacy/';

	consent = {
		text1: `I hereby give my consent and allow the platform to provide my contact information to Amazon Web Services (AWS) ${this.consent_link1} in order to receive all the latest AWS news and offers by email, post or telephone.You can unsubscribe from receiving news and offers from AWS at any time by following the instructions in the communication received. AWS handles your information as described in the AWS Privacy Notice. ${this.consent_link1}`,
		text2: `By registering, you agree to the AWS Events Terms and Conditions and the AWS Community Codes of Conduct.`
	}

	form!: FormGroup;

	FORMSUBMIT_URL = "https://formsubmit.co/ajax/3340b69e72200ca4134393a59ebfab24";
	TESTING_URL = "https://formsubmit.co/ajax/anosales207@gmail.com";

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private elementRef: ElementRef
	) { }

	name = new FormControl('', [Validators.required]);
	email = new FormControl('', [Validators.email, Validators.required]);
	phone = new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]);
	country = new FormControl('India');
	organization = new FormControl('', [Validators.required]);
	designation = new FormControl('', [Validators.required]);
	postalCode = new FormControl('', [Validators.required, Validators.pattern(/^\d{6}$/)]);

	ngOnInit() {
		this.form = this.fb.group({
			name: this.name,
			email: this.email,
			phone: this.phone,
			country: this.country,
			organization: this.organization,
			designation: this.designation,
			postalCode: this.postalCode,
			consent: [false, Validators.required],
		});
	}

	navigateToForm(event: Event) {
		event.preventDefault();

		const formElement = this.elementRef.nativeElement.querySelector('#form');
		formElement.scrollIntoView({ behavior: 'smooth' });
	}

	//onSubmit()
	onSubmit(user: User) {
		const formData = new FormData();
		formData.append('Coming from', 'Quantum Realm');
		formData.append('Name', this.form.get('name')!.value);
		formData.append('Email', this.form.get('email')!.value);
		formData.append('Phone', this.form.get('phone')!.value);
		formData.append('Country', this.form.get('country')!.value);
		formData.append('Organization', this.form.get('organization')!.value);
		formData.append('Designation', this.form.get('designation')!.value);
		formData.append('Postal Code', this.form.get('postalCode')!.value);
		formData.append('Consent', this.form.get('consent')!.value);

		fetch(this.FORMSUBMIT_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				this.openSuccessSnackBar();
				setTimeout(() => {
					location.reload();
				}, 3000);
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
		this._snackBar.open('Form submitted!', 'Close', config);
	}

	//Failure Snackbar addDoNotSellMyInfoUser() event
	openFailureSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Form not submitted!', 'Close', config);
	}
}
