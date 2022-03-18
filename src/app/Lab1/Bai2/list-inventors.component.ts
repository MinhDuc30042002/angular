import { Component } from "@angular/core";
import { inventors } from "./inventors";

@Component({
    selector: 'app-list-inventors',
    templateUrl: './list-inventor.component.html',
    styleUrls: ['./list-inventor.component.css']
})


export class InventorsListComponent
{
    inventors = inventors
    title = "Page Inventors"
}


