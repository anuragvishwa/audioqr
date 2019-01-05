import * as React from "react";

import { Link, RouteProps } from "react-router-dom";

import * as PropTypes from "prop-types";
import { withStyles, Theme } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { WithStyles, createStyles, WithTheme } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 151
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    playIcon: {
      height: 38,
      width: 38
    }
  });

interface Props extends WithStyles<typeof styles> {
  theme: Theme;
}

type State = {
  expanded: boolean;
};

export const ProfilePage = withStyles(styles, { withTheme: true })(
  class ProfilePage extends React.Component<Props & RouteProps, State> {
    handleExpandClick: () => void;

    constructor(props) {
      super(props);
      this.state = { expanded: false };

      this.handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };
    }

    public componentDidMount() {}

    render() {
      const { classes, theme } = this.props;

      return (
        <div>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Live From Space
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Mac Miller
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="Previous">
                  {theme.direction === "rtl" ? (
                    <SkipNextIcon />
                  ) : (
                    <SkipPreviousIcon />
                  )}
                </IconButton>
                <IconButton aria-label="Play/pause">
                  <PlayArrowIcon className={classes.playIcon} />
                </IconButton>
                <IconButton aria-label="Next">
                  {theme.direction === "rtl" ? (
                    <SkipPreviousIcon />
                  ) : (
                    <SkipNextIcon />
                  )}
                </IconButton>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://tinyjpg.com/images/social/website.jpg"
              title="Live from space album cover"
            />
          </Card>
        </div>
      );
    }
  }
);
