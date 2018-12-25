import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import { SoundEntity, MemberEntity } from "../../model";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
      let text;
      if (isClicked) {
        text = <h2>{this.props.member.avatar_url}</h2>;
      } else {
        text = <h2>Click to send data!!</h2>;
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
        </div>
      );
    }
  }
);
