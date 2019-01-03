import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { WithStyles, createStyles } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { TransactionEntity } from "../../model";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: "auto",
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  });

interface Props extends WithStyles<typeof styles> {
  transaction: TransactionEntity;
}

type State = {
  expanded: boolean;
};

class TransactionCol extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {this.props.transaction.transaction_type}
                  </Typography>
                  <Typography gutterBottom>
                    {this.props.transaction.transaction_status}
                  </Typography>
                  <Typography color="textSecondary">
                    {this.props.transaction.id}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ cursor: "pointer" }}>Remove</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {this.props.transaction.transaction_amount}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TransactionCol);
