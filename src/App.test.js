import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the application page', () => {
  render(<App />);
});

test('when submit button is clicked input becomes empty', () => {
  render(<App />);

  const inputField = screen.getByTestId('itemInput')
  const submitButton = screen.getByTestId('submitButton')
  
  fireEvent.click(submitButton)

  expect(inputField.value).toBe('')
});