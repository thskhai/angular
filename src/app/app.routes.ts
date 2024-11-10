import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexdmComponent } from './danhmuc/indexdm/indexdm.component';
import { EditdmComponent } from './danhmuc/editdm/editdm.component';
import { CreatedmComponent } from './danhmuc/createdm/createdm.component';

export const routes: Routes = [
    { path: "", redirectTo:'index', pathMatch:'full' },
    { path: 'index', component:HomeComponent},
    { path: 'danhmuc/indexdm', component:IndexdmComponent},
    { path: 'danhmuc/createdm', component:CreatedmComponent},
    { path: 'danhmuc/:DmId/edit', component:EditdmComponent},

];
