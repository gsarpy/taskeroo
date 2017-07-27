import React, { Component } from ‘react’;
import style from ‘./style’;
import marked from 'marked';

export default Comment extends Component {
  rawMark() {
    let addMarkup = marked(this.props.children.toString());

    return { __html: addMarkup };
  }

  render() {
    return (
      <div style={style.comment}
        <h3>{this.props.author}</h3>
        <span
          dangerouslySetInnerHTML={this.addMarkup()}>
        </span>
      </div>
    );
  }
}
