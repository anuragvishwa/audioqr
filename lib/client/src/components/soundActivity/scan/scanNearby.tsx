import * as React from "react";
import * as quiet from "./quiet";
import Script from "react-load-script";
import * as Rx from "rxjs";
import postscribe from "postscribe";
import * as sendText from "./sendtext";
import * as quietems from "./quiet-emscripten";
import { SoundEntity } from "../../../model";
import * as ReactDOM from "react-dom";

import EventListener, { withOptions } from "react-event-listener";

interface Props {
  // sound: SoundEntity;
  // onChange: (fieldName: string, value: string) => void;
  // onSave: () => void;
  handlerFromParent: (data) => void;
}

type State = {
  isValid: Boolean;
  text: String;
};

export class scanNearby extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { text: "Waiting to Receive Sound", isValid: false };
  }

  componentDidMount() {
    const container = document.querySelector(
      "[data-quiet-receive-text-target]"
    );
    container.addEventListener("change", this.handleOnChange.bind(this));
  }

  handleOnChange = event => {
    this.setState({ text: event.target.value }, () =>
      this.props.handlerFromParent(this.state.text)
    );
  };

  render() {
    var flag = true;

    return (
      <div id="container">
        <Script url="../src/components/soundActivity/scan/fileLoader.js" />
        <div className="hidden" data-quiet-profile-name="audible" />
        <div className="wrapper">
          <section>
            <div className="hidden" data-quiet-warning />
            <form>
              <input id="kilo" type="hidden" data-quiet-receive-text-target />
            </form>
          </section>
          <header>
            <h1>Send Text</h1>
          </header>
          <section>
            <div className="hidden" data-quiet-warning />
            <div className="form-group">
              <textarea className="form-control" data-quiet-text-input />
            </div>
            <button
              id="send"
              type="button"
              className="btn btn-default"
              data-quiet-send-button
              data-flag={flag}
              data-quiet-sending-text="Sending..."
            >
              Send
            </button>
          </section>
        </div>
      </div>
    );
  }
}
