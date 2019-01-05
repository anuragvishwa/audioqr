import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import { withStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { WithStyles, createStyles, WithTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Drawer } from "../common/components/drawer";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  });

interface Props extends WithStyles<typeof styles> {
  theme: Theme;
}

type State = {
  expanded: boolean;
};

export const Header = withStyles(styles, { withTheme: true })(
  class Header extends React.Component<Props & RouteProps, State> {
    constructor(props) {
      super(props);
    }

    render() {
      const { classes, theme } = this.props;

      return (
        <div className={classes.root}>
          <Drawer />
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.grow}
              />
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
);
