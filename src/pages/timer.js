import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import config from "../../content/meta/config";
import Clock from "../components/Clock";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Clock & Timer" />
        <Content>
            <Clock />
        </Content>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
