import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");
;
const styles = theme => ({
  footer: {
    // margin: "0 0 3em",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "flex-start",
    // alignContent: "center"
  },
  note: {
    color: theme.main.colors.content,
    fontSize: `${theme.main.fonts.content.size}em`,
    letterSpacing: "-0.04em",
    lineHeight: theme.main.fonts.content.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  logo: {
    width: "25px",
    display: "block",
    margin: "0.1em 0 0 0.5em",
    [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "20px"
    }
  }
});
const SearchPage = props => {
  const { data, classes } = props;

  return;
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default injectSheet(styles)(SearchPage);
;