import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProdutosCadastroComponentService } from './produtos-cadastro.component.service';

@Component({
    selector: 'app-produtos-cadastro',
    templateUrl: './produtos-cadastro.component.html',
    styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

    constructor(private produtoCadastroService: ProdutosCadastroComponentService) { }

    ngOnInit(): void {
    }

    async onSubmit(evt: any) {
        evt.preventDefault()

        const data = {
            idProduto: evt.target[0].value,
            nomeProduto: evt.target[1].value,
            valorPreco: evt.target[2].value,
            valorTamanho: evt.target[3].value,
            dtCadastro: new Date().toLocaleString()
        }
        
        await lastValueFrom(this.produtoCadastroService.saveProduto(data))
        alert('Enviado com sucesso!')

    }

}
