import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";


const styles = theme => ({
  search: {
    marginTop: "1em",
    "& .ais-SearchBox": {
      width: "100%"
    },
    "& .ais-SearchBox-form": {
      position: "relative",
      borderBottom: "2px solid #aaa",
      display: "flex",
      justifyContent: "space-between"
    },
    "& .ais-SearchBox-input": {
      border: "none",
      color: theme.main.colors.content,
      background: "none",
      fontFamily: theme.base.fonts.styledFamily,
      padding: ".4em",
      fontSize: "1em",
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: "1.4em"
      },
      flexGrow: 1
    },
    "& .ais-SearchBox-submit, & .ais-SearchBox-reset": {
      background: "none",
      border: "none",
      fill: "#666",
      flexGrow: 0
    },
    "& .ais-Stats": {
      margin: ".5em 0 2em .3em",
      fontSize: ".9em",
      color: "#999",
      display: "block"
    },
    "& .ais-Hits-list": {
      listStyle: "none",
      padding: 0
    },
    "& .ais-Pagination-list": {
      display: "flex",
      listStyle: "none",
      justifyContent: "center",
      padding: 0
    },
    "& .ais-Pagination-item": {
      "& a, & span": {
        color: "#666",
        fontSize: "1.2em",
        display: "block",
        padding: ".5em .5em 2em",
        [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
          fontSize: "1.3em",
          padding: ".5em .7em 0"
        }
      },
      "& a": {
        "&:hover": {
          color: theme.base.colors.link
        }
      },
      "&.ais-Pagination-item--firstPage, &.ais-Pagination-item--previousPage, &.ais-Pagination-item--nextPage": {
        "& a, & span": {
          padding: ".4em .5em .6em",
          [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
            padding: ".4em .7em .6em"
          }
        }
      }
    },
    "& a": {
      fontWeight: 400
    }
  }
});

const Search = props => {
  const { classesa } = props;

  return (
    <div className={classes.search}>
  
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Search);
