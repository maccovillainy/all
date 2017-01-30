import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';


export default class Portal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { created: false };    
    this._portal = null;
    this.el = null;
  }

  componentDidMount() {    
    this.open();
  }

  componentWillReceiveProps(newProps) {  
    this._render(newProps);
  }

  componentWillUnmount() {
    this.close(true);
  }

  open(props = this.props) {
    this.setState({ created: true });
    this._render(props, true);
  }

  close(isMount = false) {
    const restate = () => {
      if (this.el) {
        ReactDOM.unmountComponentAtNode(this.el);
        document.body.removeChild(this.el);
      }
      this._portal = null;
      this.el = null;

      if (isMount !== true) {
        this.setState({ created: false });
      }
    };

    if (this.state.created) {
      restate();
    }
  }  

  _render(props, isOpening) {
    if (!this.el) {
      this.el = document.createElement('div');
      document.body.appendChild(this.el);
    }

    let children = props.children;
  
    if (typeof props.children.type === 'function') {
      children = React.cloneElement(props.children);
    }

    this._portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.el
    );
  }

  render() {
    return null;
  }
}

Portal.propTypes = {
  children: React.PropTypes.element.isRequired,  
};
