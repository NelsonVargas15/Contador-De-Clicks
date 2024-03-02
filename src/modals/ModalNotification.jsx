import React from 'react';
import PropTypes from 'prop-types';
import { Notification, useToaster } from 'rsuite';

const ModalNotification = ({ type, header, content }) => {
  const toaster = useToaster();

  const playNotificationSound = () => {
    const audio = new Audio('src/assets/extras/levelup_sVAqjan.mp3');
    audio.play();
  };

  const showNotification = () => {
    playNotificationSound(); 
    
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