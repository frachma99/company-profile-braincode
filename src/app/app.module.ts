import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NGXS_DATA_STORAGE_CONTAINER, NGXS_DATA_STORAGE_EXTENSION } from '@ngxs-labs/data/storage';
import { NgxsDataUtilsModule } from '@ngxs-labs/data/utils';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { LoginState } from './login/login.state';
import { LoginService } from './login/login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { DetailComponent } from './landing-page/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,

    NgxsModule.forRoot([LoginState], {
      executionStrategy: NoopNgxsExecutionStrategy
    }),
    NgxsDataPluginModule.forRoot([NGXS_DATA_STORAGE_EXTENSION, NGXS_DATA_STORAGE_CONTAINER]),
    NgxsDataUtilsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
