import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';


class ExternalLinks extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 25,
              color: "var(--custom-text-color)"
            }}
          ></GitHubIcon>
        </a>
      </span>
    );
  }
}

export default ExternalLinks;