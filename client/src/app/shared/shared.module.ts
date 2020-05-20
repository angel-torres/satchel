import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatListModule, MatCardModule  } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './widgets/table/table.component';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { AnnouncementsComponent } from '../modules/announcements/announcements.component';
import { NotificationsComponent } from '../modules/notifications/notifications.component';
import { NewsComponent } from '../modules/news/news.component';
import { AnnouncementCardComponent } from './components/announcement-card/announcement-card.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    PostCardComponent,
    AnnouncementsComponent,
    NotificationsComponent,
    NewsComponent,
    AnnouncementCardComponent,
    NotificationCardComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule  
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    PostCardComponent
  ],
})
export class SharedModule { }
