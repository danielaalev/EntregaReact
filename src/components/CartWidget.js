import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const notificationCount = 2; // Hardcoded notification count, change this value as needed

function CartWidget() {
  return (
    <>
      <div>
        <ShoppingCart>
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ff0000' }} />
          {notificationCount > 0 && <Notification className="notification">{notificationCount}</Notification>}
        </ShoppingCart>
      </div>
    </>
  );
}

const ShoppingCart = styled.div`
  position: relative;
`;

const Notification = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
`;