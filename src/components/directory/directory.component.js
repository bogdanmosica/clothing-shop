import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "../../data/sections.data";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...theProps }) => {
          return <MenuItem key={id} {...theProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
