import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarrersComponent } from './statics/carrers/carrers.component';
import { BookingComponent } from './booking/booking.component';
import { PrivacyStatementComponent } from './statics/privacy-statement/privacy-statement.component';
import { TermsAndConditionsComponent } from './statics/terms-and-conditions/terms-and-conditions.component';
import { IndexComponent } from './statics/index/index.component';

export const routes: Routes = [
    { path:'', component: IndexComponent },
    { path:'booking', component: BookingComponent },
    { path:'carrers', component: CarrersComponent },
    { path:'privacy-statement', component: PrivacyStatementComponent },
    { path:'terms-and-conditions', component: TermsAndConditionsComponent },
];
