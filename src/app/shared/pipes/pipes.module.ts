import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlCustomPipe} from './safe-html.pipe';
import {SortPipe} from './sort.pipe';
import {RoleModifyPipe} from './role-modify.pipe';
import {NumberMinDigitPipe} from './number-min-digit.pipe';
import {SlugToNormalPipe} from './slug-to-normal.pipe';
import {ArrayStringPipe} from './array-string.pipe';
import {TextWrapPipe} from './text-wrap.pipe';
import {FormatBytesPipe} from './format-bytes.pipe';
import {MomentDatePipe} from "./moment-date.pipe";
import { CharacterCountPipe } from './character-count.pipe';


@NgModule({
  declarations: [
    SafeHtmlCustomPipe,
    SortPipe,
    RoleModifyPipe,
    NumberMinDigitPipe,
    SlugToNormalPipe,
    ArrayStringPipe,
    TextWrapPipe,
    FormatBytesPipe,
    MomentDatePipe,
    CharacterCountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlCustomPipe,
    SortPipe,
    RoleModifyPipe,
    NumberMinDigitPipe,
    SlugToNormalPipe,
    TextWrapPipe,
    FormatBytesPipe,
    MomentDatePipe,
    CharacterCountPipe
  ]
})
export class PipesModule {
}
