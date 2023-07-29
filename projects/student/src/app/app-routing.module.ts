import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { AddstudentComponent } from "./addstudent/addstudent.component";
import { DeletestudentComponent } from "./deletestudent/deletestudent.component";
import { UpdatestudentComponent } from "./updatestudent/updatestudent.component";

const routes : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'addstudent', component: AddstudentComponent},
    {path: 'deletestudent', component: DeletestudentComponent},
    {path: 'updatestudent', component: UpdatestudentComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}