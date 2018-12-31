import * as React from "react";
import * as quiet from "./quiet";
import Script from "react-load-script";
import postscribe from "postscribe";
import * as sendText from "./sendtext";
import * as quietems from "./quiet-emscripten";
import { SoundEntity } from "../../../model";

interface Props {
  // sound: SoundEntity;
  // onChange: (fieldName: string, value: string) => void;
  // onSave: () => void;
}

type State = {
  isValid: Boolean;
  text: String;
};

export class scanNearby extends React.Component<Props, State> {
  handleClickSend: (value: String) => void;
  constructor(props) {
    super(props);
    this.state = { text: "anurag", isValid: false };

    this.handleClickSend = (value: String) => {
      this.setState({ text: value });
    };
  }

  render() {
    var flag = true;
    let value;
    if (this.state.text != "anurag") {
      value = this.state.text;
    } else {
      value = "";
    }
    return (
      <div>
        <Script url="../src/components/soundActivity/scan/quiet.js" />
        <Script
          async
          url="../src/components/soundActivity/scan/receivetext.js"
        />
        <Script async url="../src/components/soundActivity/scan/sendtext.js" />
        <Script
          async
          url="../src/components/soundActivity/scan/quiet-emscripten.js"
        />
        <div className="hidden" data-quiet-profile-name="audible" />
        <div className="wrapper">
          <header>
            <h1>Receive Text</h1>
          </header>
          <section>
            <div className="hidden" data-quiet-warning />
            <pre data-quiet-receive-text-target>
              Your received text will show up here. Waiting...
            </pre>
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
        <h4>{value}</h4>
      </div>
    );
  }
}
