import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EmailsComponentService } from './emails.component.service';

@Component({
    selector: 'app-emails',
    templateUrl: './emails.component.html',
    styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

    emails: null | any[] = []

    constructor(private emailsComponentService: EmailsComponentService) { }

    ngOnInit(): void {
        this.loadData()
    }

    async loadData() {
        this.emails = await lastValueFrom(this.emailsComponentService.getEmails())
    }

    async onSubmit(evt: any) {
        evt.preventDefault()

        const dtEnvio = evt.target[0].value
        
        await lastValueFrom(this.emailsComponentService.getEmailsByDate(dtEnvio))
        alert('Enviado com sucesso!')

    }

}
