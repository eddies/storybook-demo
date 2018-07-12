import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const CustomButton = glamorous(({ children, ...rest }) => <button {...rest}>{children}</button>)({
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
});

CustomButton.displayName = 'Button';
CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default CustomButton;
