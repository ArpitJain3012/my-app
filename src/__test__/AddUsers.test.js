import { render, screen } from '@testing-library/react';

import React from 'react';
import { createMemoryHistory } from 'history';
//import AddUsers from './components/AddUsers';
import { Router } from 'react-router-dom';
import App from '../App';
import AddUsers from '../components/AddUsers';




//Test for Add user componenet----------------------------------------------------------------------------
describe("Test the Add User Component", () => {
   
    test('should render the Add User page', () => {
      const { container } = render(<App variant="container py-3" />);
      expect(container.getElementsByClassName("container py-3").length).toBe(1);
    })
  
  });