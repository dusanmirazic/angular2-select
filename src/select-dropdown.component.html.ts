export const TEMPLATE = `<div
    [ngStyle]="{'top.px': top, 'left.px': left, 'width.px': width}">

    <div class="filter"
        *ngIf="!multiple">
        <input
            *ngIf="filterEnabled"
            #filterInput
            (click)="onSingleFilterClick($event)"
            (input)="onSingleFilterInput($event)"
            (keydown)="onSingleFilterKeydown($event)">
    </div>

    <div class="options"
        #optionsList>
        <ul
            (wheel)="onOptionsWheel($event)">
            <li *ngFor="let option of optionList.filtered"
                [ngClass]="{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, option.class: option.class}"
                [ngStyle]="getOptionStyle(option)"
                (click)="onOptionClick(option)"
                (mouseover)="onOptionMouseover(option)">
                {{option.label}}
            </li>
            <li
                *ngIf="!optionList.hasShown()"
                class="message">
                {{notFoundMsg}}
            </li>
        </ul>
    </div>
</div>
`;