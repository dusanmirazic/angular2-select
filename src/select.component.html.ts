export const TEMPLATE = `<div
    #selection
    [attr.tabindex]="disabled ? null : 0"
    [ngClass]="{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}"
    (click)="onSelectContainerClick($event)"
    (focus)="onSelectContainerFocus()"
    (keydown)="onSelectContainerKeydown($event)"
    (window:click)="onWindowClick()"
    (window:resize)="onWindowResize()">

    <div class="single"
        *ngIf="!multiple">
        <div class="value"
            *ngIf="optionList.hasSelected()">
            {{optionList.selection[0].label}}
        </div>
        <div class="placeholder"
            *ngIf="!optionList.hasSelected()">
            {{placeholderView}}
        </div>
        <div class="clear"
            *ngIf="allowClear"
            (click)="onClearSelectionClick($event)">
            &#x2715;
        </div>
        <div class="toggle"
            *ngIf="isOpen">
            &#x25B2;
        </div>
        <div class="toggle"
            *ngIf="!isOpen">
            &#x25BC;
        </div>
    </div>

    <div class="multiple"
        *ngIf="multiple">
        <div class="option"
            *ngFor="let option of optionList.selection">
            <span class="deselect-option"
                (click)=onDeselectOptionClick(option)>
                &#x2715;
            </span>
            {{option.label}}
        </div>
        <input
            *ngIf="filterEnabled"
            #filterInput
            tabindex="-1"
            [placeholder]="placeholderView"
            [ngStyle]="{'width.px': filterInputWidth}"
            (input)="onMultipleFilterInput($event)"
            (keydown)="onMultipleFilterKeydown($event)"/>
    </div>

</div>
<select-dropdown
    *ngIf="isOpen"
    #dropdown
    [multiple]="multiple"
    [optionList]="optionList"
    [notFoundMsg]="notFoundMsg"
    [highlightColor]="highlightColor"
    [highlightTextColor]="highlightTextColor"
    [filterEnabled]="filterEnabled"
    [width]="width"
    [top]="top"
    [left]="left"
    (close)="onDropdownClose($event)"
    (optionClicked)="onDropdownOptionClicked($event)"
    (singleFilterClick)="onSingleFilterClick()"
    (singleFilterInput)="onSingleFilterInput($event)"
    (singleFilterKeydown)="onSingleFilterKeydown($event)">
</select-dropdown>
`;