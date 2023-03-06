import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

/**
 * @title Progress spinner container for spinner circle background
 */
@Component({
  selector: 'spinner-container',
  templateUrl: 'spinner-container.html',
  styleUrls: ['spinner-container.scss'],
  host: {
    'class': 'spinner-container'
  },
  inputs: ['color', 'diameter', 'mode', 'strokeWidth', 'value'],

})
export class SpinnerContainer {
  @Input() color: ThemePalette;
  @Input() diameter: number;
  @Input() display: string | number;
  @Input() mode: ProgressSpinnerMode;
  @Input() strokeWidth: number;
  @Input() value: number;
}
