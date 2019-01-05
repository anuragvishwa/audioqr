import * as React from "react";
import { Link, RouteProps } from "react-router-dom";
import { withStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { WithStyles, createStyles, WithTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = (theme: Theme) =>
  createStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    }
  });

interface Props extends WithStyles<typeof styles> {
  theme: Theme;
}

type State = {
  open: boolean;
};

export const Drawer = withStyles(styles, { withTheme: true })(
  class Drawer extends React.Component<Props & RouteProps, State> {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };

      this.closeDrawer = this.closeDrawer.bind(this);
      this.openDrawer = this.openDrawer.bind(this);
    }

    closeDrawer = () => {
      this.setState(state => ({ open: false }));
    };
    openDrawer = () => {
      this.setState(state => ({ open: false }));
    };

    render() {
      const { classes } = this.props;
      const sideList = (
        <div className={classes.list}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

      const fullList = (
        <div className={classes.fullList}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

      return (
        <div>
          <Button onClick={this.openDrawer}>Open Left</Button>

          <SwipeableDrawer
            open={this.state.open}
            onClose={this.closeDrawer}
            onOpen={this.openDrawer}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.closeDrawer}
              onKeyDown={this.closeDrawer}
            >
              {sideList}
            </div>
          </SwipeableDrawer>
        </div>
      );
    }
  }
);
