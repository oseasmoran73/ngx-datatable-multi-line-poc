import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent {
  @ViewChild("content") content; // reference to span element

  @Input() isMultiLine: boolean = false; // single or double line render on cell

  limit: number = 1; // max number of data displayed at a given time

  editing: object = {}; // cell edited

  // data to render (row based)
  rows: Array<object> = [
    {
      name: "This is a long text that is suppose to overflow",
      age: 44,
      gender: "m"
    }
  ];

  // header to render (column based)
  columns: Array<string> = ["Name", "Age", "Gender"];

  /**
   * Update cell according to reference
   * https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/inline.component.ts
   * @param event input html
   * @param cell column reference
   * @param rowIndex row reference
   */
  updateValue(event, cell, rowIndex) {
    console.log("row", rowIndex);
    console.log("cell", cell);
    this.editing[rowIndex + "-" + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Determine if cell overflow. Based on isMultiLine enabled/disabled
   * If overflow, popover displayed to show truncated information
   * @param spanElement html reference
   */
  displayPopoverText(spanElement) {
    let showPopover = false; // boolean to determine if text is overflowed
    const popoverContainerElement = spanElement.nextSibling;
    if (this.isMultiLine) {
      // multi-line: enabled
      if (spanElement.offsetHeight < spanElement.scrollHeight) {
        showPopover = true;
      }
    } else {
      // multi-line: disabled
      if (spanElement.offsetWidth < spanElement.scrollWidth) {
        showPopover = true;
      }
    }

    // overflow detected
    if (showPopover) {
      popoverContainerElement.style.display = "block";
    }
  }

  /**
   * Hides popover if it is displayed
   * @param spanElement html reference
   */
  hidePopoverText(spanElement) {
    const popoverContainerElement = spanElement.nextSibling;
    popoverContainerElement.style.display = "none";
  }
}
