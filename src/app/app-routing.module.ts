import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsComponent } from './content/pages/emails/emails.component';
import { HomeComponent } from './content/pages/home/home.component';
import { ProdutosCadastroComponent } from './content/pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosComponent } from './content/pages/produtos/produtos.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'emails', component: EmailsComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'produtos/cadastro', component: ProdutosCadastroComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
