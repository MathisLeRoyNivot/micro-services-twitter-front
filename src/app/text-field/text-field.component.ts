import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-text-field",
	templateUrl: "./text-field.component.html",
	styleUrls: ["./text-field.component.scss"]
})
export class TextFieldComponent implements OnInit {

	constructor(private httpClient: HttpClient) {}

	readonly TWITTER_STATUS_URL = 'http://localhost:3000/api/twitter/status';

	ngOnInit() {}

	click(txt) {
		if (txt.value) {
			const requestParam = {
				status: txt.value
			};
			this.httpClient.post(this.TWITTER_STATUS_URL , requestParam).toPromise().then(res => {
				alert('Vous venez de tweeter : ' + requestParam.status);
				txt.value = "";
			}).catch(err => {
				alert(err.message);
			});
		}
	}
	
	enter(btn) {
		btn.classList.add("animated", "heartBeat");
	}
	leave(btn) {
		btn.classList.remove("animated", "heartBeat");
	}
}
