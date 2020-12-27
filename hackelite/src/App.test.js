import { render, screen } from '@testing-library/react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import App from './App';
import register from './components/auth'
import landing from './components/layout'
import axios from "axios";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('igonre the cros', () =>  {
      Redirect(<register />)
      const make_route = screen.render(register);
      const close_route = screen.getByText(/register /react/i);
      expect(make_route).toBeInTheDocument();
});


test('set the routes', () =>{
      Redirect(<landing />);
      const make_route_to_login = screen.render(landing);
      const close_route_to_login = screen.getByText(/landing /react/i);
      expect(make_route_to_login).toBeInTheDocument;

});


test('api fetch fail', () =>{
      localStorage.setItem('log', true);
      localStorage.setItem('username', register.registerData);
      localStorage.setItem('user_data_credentials', register.dataCredentials);
      localStorage.setItem('api_fetch_request', axios.get('http://dc90157b1306.ngrok.io/login').dispose);
      fetched_data =  localStorage.getItem('api_fetch_request');

});