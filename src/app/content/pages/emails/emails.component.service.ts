import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class EmailsComponentService {

    constructor(private http: HttpClient) { }

    getEmails(){
        return this.http.get<any[]>(`${environment.backDomainEmails}/email`)
    }

    getEmailsByDate(date: string){
        return this.http.get<any[]>(`${environment.backDomainEmails}/email/${date}`)
    }


    
}
