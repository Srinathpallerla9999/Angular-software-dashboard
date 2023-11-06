import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FormsModule } from '@angular/forms';
import { TopDataCardsComponent } from './components/main-contents-components/top-data-cards/top-data-cards.component';
import { RecentOrdersComponent } from './components/main-contents-components/recent-orders/recent-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TextManipulationPipe } from './pipes/text-manipulation.pipe';
import { NewUserComponent } from './components/main-contents-components/new-user/new-user.component';
import { LineChartComponent } from './components/main-contents-components/line-chart/line-chart.component';
import { PieChartComponent } from './components/main-contents-components/pie-chart/pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ColumnChartComponent } from './components/main-contents-components/column-chart/column-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderMenuComponent,
    MainContentComponent,
    TopDataCardsComponent,
    RecentOrdersComponent,
    TextManipulationPipe,
    NewUserComponent,
    LineChartComponent,
    PieChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
