import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        { path: 'members', component: MemberListComponent},
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent }
    ]
},
{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];