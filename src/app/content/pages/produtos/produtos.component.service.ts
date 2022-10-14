import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ProdutosComponentService {

    constructor(private http: HttpClient) { }

    getProdutos(){
        return this.http.get<any[]>(`${environment.backDomainProdutos}/v1/produtos`)
    }

    
}
