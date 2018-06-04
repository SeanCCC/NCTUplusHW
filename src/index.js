import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TodoList from './sections/TodoList';
import './style.scss';

const crender = Component => { 
  render(
    <AppContainer>
        <Component/>
    </AppContainer>,
    document.getElementById('app')
  )
}

crender(TodoList)

if(module.hot) {
  module.hot.accept();
}