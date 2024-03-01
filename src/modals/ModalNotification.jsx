import React from 'react';
import PropTypes from 'prop-types';
import { Notification, useToaster } from 'rsuite';

const ModalNotification = ({ type, header, content }) => {
  const toaster = useToaster();

  const showNotification = () => {
    toaster.push(
      <Notification type={type} header={header}>
        {content}
      </Notification>
    );
  };

  React.useEffect(() => {
    showNotification();
  }, []); 

  return null; 
};

ModalNotification.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default ModalNotification;