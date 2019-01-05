import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import { SoundEntity, MemberEntity, TransactionEntity } from "../../model";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { scanNearby as ScanNearby } from "./scan/scanNearby";
import { MemberForm } from "./memberForm";
import * as ReactDOM from "react-dom";
import * as randomId from "random-id";
import { BroadcastId } from "../soundActivity/scan/broadcastId";
import Script from "react-load-script";

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
  transaction: TransactionEntity;
  fetchMemberById(soundId: number): MemberEntity;
  fetchReceiveRequest(soundId: number): SoundEntity;
  onSave: (transaction: TransactionEntity) => void;
}

type State = {
  enabled: Boolean;
  member: MemberEntity;
  isSendClicked: Boolean;
  isReceiveClicked: Boolean;
  SoundIdfromChild: number;
  flag: Boolean;
  disableSendButton: boolean;
  disableReceiveButton: boolean;
};

export const SoundActivity = withStyles(styles)(
  class SoundActivity extends React.Component<Props & RouteProps, State> {
    handleClickSend: () => void;
    handleClickReceived: () => void;

    constructor(props) {
      super(props);

      this.state = {
        enabled: false,
        member: null,
        isSendClicked: false,
        SoundIdfromChild: 0,
        flag: false,
        isReceiveClicked: false,
        disableSendButton: false,
        disableReceiveButton: false
      };

      this.onSave = this.onSave.bind(this);
      this.handleNearByDevices = this.handleNearByDevices.bind(this);

      this.handleClickSend = () => {
        this.setState({ isSendClicked: true, disableSendButton: true });
      };

      this.handleClickReceived = () => {
        this.setState(state => ({ enabled: true }));
        this.props.fetchReceiveRequest(this.props.soundId);
      };
    }

    private onSave(amount: number, reason: string) {
      this.props.onSave(
        this.mapToTransaction(
          randomId(10, "0"),
          amount,
          reason,
          "Fetching Member...",
          new Date(),
          "Send",
          this.props.member.id
        )
      );
      this.setState({ disableSendButton: false });
    }

    mapToTransaction = (
      id: number,
      transaction_amount: number,
      transaction_status: string,
      transaction_party: string,
      transaction_time: Date,
      transaction_type: string,
      member_id: number
    ): TransactionEntity => {
      return {
        id: id,
        transaction_amount: transaction_amount,
        transaction_status: transaction_status,
        transaction_time: transaction_time,
        transaction_party: transaction_party,
        transaction_type: transaction_type,
        member_id: member_id
      };
    };

    handleNearByDevices(data) {
      this.setState({ SoundIdfromChild: data }, () => {
        this.props.fetchMemberById(this.state.SoundIdfromChild);
      });
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
      const isSendClicked = this.state.isSendClicked;
      let text, comp;
      if (isSendClicked) {
        text = <h2>{this.props.member.avatar_url}</h2>;
        comp = <ScanNearby handlerFromParent={this.handleNearByDevices} />;
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
            disabled={this.state.disableSendButton}
          >
            Send
          </Button>

          <br />
          {/* <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.handleClickReceived}
          >
            Receive
          </Button> */}

          <BroadcastId memberId={this.props.member.id} />
          {text}
          <br />
          {comp}

          {this.state.flag ? <MemberForm onSave={this.onSave} /> : ""}
        </div>
      );
    }
  }
);
