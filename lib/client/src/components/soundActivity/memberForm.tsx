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
    }
  });

const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];

interface Props extends WithStyles<typeof styles> {
  //onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

type State = {
  expanded: boolean;
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: Boolean;
};

export const MemberForm = withStyles(styles)(
  class MemberForm extends React.Component<Props & RouteProps, State> {
    constructor(props) {
      super(props);
      this.state = {
        expanded: false,
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
      };
      this.handleWeight = this.handleWeight.bind(this);
      this.handleWeightRange = this.handleWeightRange.bind(this);
      this.handleAmount = this.handleAmount.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
    }

    handleWeight(event) {
      this.setState({
        weight: event.target.value
      });
    }

    handleWeightRange(event) {
      this.setState({
        weightRange: event.target.value
      });
    }

    handleAmount(event) {
      this.setState({
        amount: event.target.value
      });
    }

    handlePassword(event) {
      this.setState({
        password: event.target.value
      });
    }

    handleClickShowPassword = () => {
      this.setState(function(state, props) {
        return {
          showPassword: !state.showPassword
        };
      });
    };

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <TextField
            id="outlined-simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="With outlined TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              )
            }}
          />
          <TextField
            select
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="With Select"
            value={this.state.weightRange}
            onChange={this.handleWeightRange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              )
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-adornment-amount"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Amount"
            value={this.state.amount}
            onChange={this.handleAmount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
          <TextField
            id="outlined-adornment-weight"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Weight"
            value={this.state.weight}
            onChange={this.handleWeight}
            helperText="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>
            }}
          />
          <TextField
            id="outlined-adornment-password"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            value={this.state.password}
            onChange={this.handlePassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.props.onSave}
          >
            Primary
          </Button>
        </div>
      );
    }
  }
);
