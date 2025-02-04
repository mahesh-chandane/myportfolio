import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component'; 
import { FooterComponent } from './footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MyPortfolioComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // MatButtonModule,
    // MatIconModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
