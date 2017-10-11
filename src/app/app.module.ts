import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductModule
  ],
  providers: [HttpClient, 
              { provide: HTTP_INTERCEPTORS, 
                useClass: AuthInterceptorService,
               multi: true} 
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
