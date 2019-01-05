import * as React from "react";
import Script from "react-load-script";

interface Props {
  memberId: number;
}

type State = {
  isValid: Boolean;
  text: String;
};

export class BroadcastId extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { text: "Waiting to Receive Sound", isValid: false };
  }

  componentDidMount() {
    var broadcast = document.querySelector("[data-send-para]");
    broadcast.innerHTML = this.props.memberId.toString();
  }

  render() {
    var flag = true;

    return (
      <div id="container">
        <Script url="../src/components/soundActivity/scan/fileLoader.js" />
        <div className="hidden" data-quiet-profile-name="audible" />

        <section>
          <button
            id="send"
            type="button"
            className="btn btn-default"
            data-quiet-send-button
            data-flag={flag}
            data-quiet-sending-text="Sending..."
          >
            Receive
          </button>
          <p hidden data-send-para />
        </section>
      </div>
    );
  }
}
