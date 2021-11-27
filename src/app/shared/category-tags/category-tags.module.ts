import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTagsComponent } from './category-tags.component';



@NgModule({
    declarations: [
        CategoryTagsComponent
    ],
    exports: [
        CategoryTagsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CategoryTagsModule { }
