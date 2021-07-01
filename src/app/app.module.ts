import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PortfolioModule } from './@components/portfolio/portfolio.module';
import { ServiciosModule } from './@components/servicios/servicios.module';
import { TeamModule } from './@components/team/team.module';
import { ClientsModule } from './@components/clients/clients.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ScrolltopbuttonComponent } from './@components/scrolltopbutton/scrolltopbutton.component';
import { ScrolltopbuttonModule } from './@components/scrolltopbutton/scrolltopbutton.module';
import { ProveedoresComponent } from './@components/proveedores/proveedores.component';
import { ProveedoresModule } from './@components/proveedores/proveedores.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    PortfolioModule,
    CopyrightModule,
    ContactModule,
    AboutModule,
    ServiciosModule,
    TeamModule,
    ClientsModule,
    ScrolltopbuttonModule,
    ProveedoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
