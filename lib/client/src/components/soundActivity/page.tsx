import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import { SoundEntity, MemberEntity } from "../../model";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { scanNearby as ScanNearby } from "./scan/scanNearby";

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
}

type State = {
  enabled: string;
  member: MemberEntity;
  isClicked: Boolean;
};

export const SoundActivity = withStyles(styles)(
  class SoundActivity extends React.Component<Props & RouteProps, State> {
    handleClickSend: () => void;
    handleClickReceived: () => void;

    constructor(props) {
      super(props);
      this.state = { enabled: "", member: null, isClicked: false };

      this.handleClickSend = () => {
        this.setState({ isClicked: true });
        //1.Scan for nearby devices.
        //2.Give a list of users.(Only 1 user)
        //3.Fetch the data for selected user.

        this.props.fetchMemberById(this.props.soundId);
      };

      this.handleClickReceived = () => {
        this.setState(state => ({ enabled: "disabled" }));
        this.props.fetchReceiveRequest(this.props.soundId);
      };
    }

    render() {
      const { classes } = this.props;
      const isClicked = this.state.isClicked;
      let text, comp;
      if (isClicked) {
        text = <h2>{this.props.member.avatar_url}</h2>;
        comp = <ScanNearby />;
      } else {
        text = "";
        comp = "";
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
        </div>
      );
    }
  }
);
