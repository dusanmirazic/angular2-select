export class Option {

    value: string;
    label: string;

    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;

    cssClass: string;
    hidden: boolean;

    constructor(value: string, label: string, cssClass: string, hidden: boolean) {
        this.value = value;
        this.label = label;
        this.cssClass = cssClass || '';
        this.hidden = hidden || false;

        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }

    show() {
        this.shown = true;
    }

    hide() {
        this.shown = false;
    }

    disable() {
        this.disabled = true;
    }

    enable() {
        this.disabled = false;
    }

    undecoratedCopy() {
        return {
            label: this.label,
            value: this.value,
            selected: this.selected,
            cssClass: this.cssClass,
            hidden: this.hidden
        };
    }
}
