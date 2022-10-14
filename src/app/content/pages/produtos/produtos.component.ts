import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProdutosComponentService } from './produtos.component.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: null | any[] = []

  constructor(private produtosService: ProdutosComponentService) { }

  ngOnInit(): void {
    this.loadData()
  }

  async loadData() {
    this.produtos = await lastValueFrom(this.produtosService.getProdutos())
  }

}
