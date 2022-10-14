import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/pages/home/home.component';
import { ProdutosComponent } from './content/pages/produtos/produtos.component';
import { ProdutosCadastroComponent } from './content/pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { EmailsComponent } from './content/pages/emails/emails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutosCadastroComponent,
    EmailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
