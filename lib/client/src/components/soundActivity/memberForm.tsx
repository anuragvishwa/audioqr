import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import classNames from "classnames";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { MemberEntity, MemberErrors } from "../../model";
import { withStyles, Theme } from "@material-ui/core/styles";
import { WithStyles, createStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { TransactionEntity } from "../../model";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing.unit
    },
    textField: {
      flexBasis: 200
    },
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: "none"
    },
    avatar: {
      margin: 10
    },
    orangeAvatar: {
      margin: 10,
      color: "#fff",
      backgroundColor: deepOrange[500]
    },
    purpleAvatar: {
      margin: 10,
      color: "#fff",
      backgroundColor: deepPurple[500]
    }
  });

interface Props extends WithStyles<typeof styles> {
  onSave: (amount: number, reason: string) => void;
}

type State = {
  amount: number;
  reason: string;
};

export const MemberForm = withStyles(styles)(
  class MemberForm extends React.Component<Props & RouteProps, State> {
    constructor(props) {
      super(props);
      this.state = {
        amount: 0,
        reason: ""
      };
      this.handleReason = this.handleReason.bind(this);
      this.handleAmount = this.handleAmount.bind(this);
      this.onSave = this.onSave.bind(this);
    }

    onSave(event) {
      if (this.state.amount != 0 && this.state.reason != "") {
        this.props.onSave(this.state.amount, this.state.reason);
      }
    }

    handleReason(event) {
      this.setState({
        reason: event.target.value
      });
    }

    handleAmount(event) {
      this.setState({
        amount: event.target.value
      });
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Grid container justify="center" alignItems="center">
            <Avatar className={classes.orangeAvatar}>H</Avatar>
            -->
            <Avatar className={classes.purpleAvatar}>O</Avatar>
          </Grid>
          <TextField
            id="outlined-adornment-amount"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Amount"
            value={this.state.amount}
            onChange={this.handleAmount}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              )
            }}
          />
          <TextField
            id="outlined-adornment-reason"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Reason"
            required
            value={this.state.reason}
            onChange={this.handleReason}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onSave}
          >
            Send
          </Button>
        </div>
      );
    }
  }
);
