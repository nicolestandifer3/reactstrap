import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
};

function ModalBody(props) {
  const { className, cssModule, tag: Tag = 'div', ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'modal-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

ModalBody.propTypes = propTypes;

export default ModalBody;
