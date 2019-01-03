import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import { SoundEntity, MemberEntity } from "../../model";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { scanNearby as ScanNearby } from "./scan/scanNearby";
import { MemberForm } from "./memberForm";
import * as ReactDOM from "react-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

interface Props extends WithStyles<typeof styles> {
  soundId: number;
  sound: SoundEntity;
  member: MemberEntity;
  fetchMemberById(soundId: number): MemberEntity;
  fetchReceiveRequest(soundId: number): SoundEntity;
  onSave: (member: MemberEntity) => void;
}

type State = {
  enabled: string;
  member: MemberEntity;
  isClicked: Boolean;
  SoundIdfromChild: number;
  flag: Boolean;
};

export const SoundActivity = withStyles(styles)(
  class SoundActivity extends React.Component<Props & RouteProps, State> {
    handleClickSend: () => void;
    handleClickReceived: () => void;

    constructor(props) {
      super(props);

      this.state = {
        enabled: "",
        member: null,
        isClicked: false,
        SoundIdfromChild: 0,
        flag: false
      };

      this.onSave = this.onSave.bind(this);
      this.handleNearByDevices = this.handleNearByDevices.bind(this);

      this.handleClickSend = () => {
        this.setState({ isClicked: true });
      };

      this.handleClickReceived = () => {
        this.setState(state => ({ enabled: "disabled" }));
        this.props.fetchReceiveRequest(this.props.soundId);
      };
    }

    private onSave() {
      this.props.onSave(this.props.member);
    }

    handleNearByDevices(data) {
      this.setState({ SoundIdfromChild: data }, () =>
        this.props.fetchMemberById(this.state.SoundIdfromChild)
      );
      this.setState({ flag: true });
      // this.setMemberForm(<MemberForm />);

      //1.Scan for nearby devices.
      //2.Give a list of users.(Only 1 user)

      //3.Fetch the data for selected user.

      //Show the form to fill money.
      //Show notification.
    }

    render() {
      const { classes } = this.props;
      const isClicked = this.state.isClicked;
      let text, comp, fields;
      if (isClicked) {
        text = <h2>{this.props.member.avatar_url}</h2>;
        comp = <ScanNearby handlerFromParent={this.handleNearByDevices} />;
      } else {
        text = "";
        comp = "";
        fields = "";
      }
      return (
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleClickSend}
          >
            Send
          </Button>

          <br />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.handleClickReceived}
          >
            Receive
          </Button>
          {text}
          <br />
          {comp}
          <h5>
            Received By Parent:
            <br />
            {this.state.SoundIdfromChild}
          </h5>
          {this.state.flag ? <MemberForm onSave={this.onSave} /> : ""}
        </div>
      );
    }
  }
);
