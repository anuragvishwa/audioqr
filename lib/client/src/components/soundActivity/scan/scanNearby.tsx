import * as React from "react";
import Script from "react-load-script";

interface Props {
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

    var broadcast = document.querySelector("[data-send-para]");
    broadcast.innerHTML = "vishwa";
  }

  handleOnChange = event => {
    this.setState({ text: event.target.value }, () =>
      this.props.handlerFromParent(this.state.text)
    );
  };

  render() {
    return (
      <div id="container">
        <Script url="../src/components/soundActivity/scan/receivetext.js" />
        <div className="wrapper">
          <section>
            <div className="hidden" data-quiet-warning />
            <form>
              <input id="kilo" type="hidden" data-quiet-receive-text-target />
            </form>
          </section>
        </div>
      </div>
    );
  }
}
