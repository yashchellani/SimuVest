import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { InvestmentStrategiesComponent } from './investment-strategies/investment-strategies.component'
import { StocksComponent } from './stocks/stocks.component';
import { IndexComponent } from './index/index.component'

const appRoutes: Routes = [

    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Investment-Strategies', component: InvestmentStrategiesComponent },
    { path: 'Stocks', component: StocksComponent },
    { path: 'Index', component: IndexComponent },
   
    //code to redirect to "COMPONENT" on page load
    { path: '', component: DashboardComponent, pathMatch: 'full'}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
