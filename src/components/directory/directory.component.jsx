import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { sectionSelection } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: sectionSelection,
});

export default connect(mapStateToProps)(Directory);
