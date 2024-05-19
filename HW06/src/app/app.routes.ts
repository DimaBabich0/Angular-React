import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppleComponent } from './apple/apple.component';
import { AsusComponent } from './asus/asus.component';
import { HpComponent } from './hp/hp.component';
import { AcerComponent } from './acer/acer.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { SamsungComponent } from './samsung/samsung.component';
import { DellComponent } from './dell/dell.component';
import { CanonComponent } from './canon/canon.component';
import { TpLinkComponent } from './tp-link/tp-link.component';
import { LogitechComponent } from './logitech/logitech.component';

export const routes: Routes = [
    {path: '', component:NavBarComponent},
    {path: 'apple', component:AppleComponent},
    {path: 'asus', component:AsusComponent},
    {path: 'hp', component:HpComponent},
    {path: 'acer', component:AcerComponent},
    {path: 'lenovo', component:LenovoComponent},
    {path: 'samsung', component:SamsungComponent},
    {path: 'dell', component:DellComponent},
    {path: 'canon', component:CanonComponent},
    {path: 'tp-link', component:TpLinkComponent},
    {path: 'logitech', component:LogitechComponent}
];
