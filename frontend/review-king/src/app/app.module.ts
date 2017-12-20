import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddReview} from '../pages/add-review/add-review';
import { Reviews } from '../providers/reviews/reviews';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReview

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReview
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Reviews
  ]
})
export class AppModule {}
