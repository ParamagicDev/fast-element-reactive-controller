import {html, customElement} from '@microsoft/fast-element';
import {ClockController} from './clock-controller';
import {ReactiveFASTElement, ReactiveControllerHost} from "../../";

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
});

const template = html<ClockElement>`
  <div>Current Time: ${x => x.formattedTime()}</div>
`

@customElement({
  name: 'clock-element',
  template,
})
export class ClockElement extends ReactiveFASTElement implements ReactiveControllerHost {
  private clock: ClockController

  constructor () {
    super()

    // Create the controller and store it
    this.clock = new ClockController(this, 100);
  }

  formattedTime () {
    return timeFormat.format(this.clock.value)
  }
}
