// NgModules
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// 3rd Party Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Project Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

// Components
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FontAwesomeModule,

    SharedModule,
    UsersModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(Effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
