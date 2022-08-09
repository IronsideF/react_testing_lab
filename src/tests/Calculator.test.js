import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers correctly', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5')
  });

  it('should subtract two numbers correctly', () => {
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3')
  });

  it('should multiply two numbers correctly', () => {
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15')
  });

  it('should divide two numbers correctly', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3')
  });

  it('should concatenate numbers', () => {
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button5);
    fireEvent.click(button6);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('565')
  });

  it('should chain operations', () => {
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const add = container.getByTestId('operator-add');
    const multiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button5);
    fireEvent.click(multiply);
    fireEvent.click(add);
    fireEvent.click(button6);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('31')
  });

  it('should clear running total without affecting calc', () => {
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const add = container.getByTestId('operator-add');
    const multiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const equals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear');
    fireEvent.click(button5);
    fireEvent.click(add);
    fireEvent.click(button6);
    fireEvent.click(multiply);
    fireEvent.click(clear);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('55')
  });
})

