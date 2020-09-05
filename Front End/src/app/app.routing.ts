import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { InvestmentStrategiesComponent } from './investment-strategies/investment-strategies.component'
// import { TestIntegrationComponent } from './test-integration/test-integration.component';

const appRoutes: Routes = [

    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Investment-Strategies', component: InvestmentStrategiesComponent },

   
    //code to redirect to "COMPONENT" on page load
    { path: '', component: LoginComponent, pathMatch: 'full'}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
