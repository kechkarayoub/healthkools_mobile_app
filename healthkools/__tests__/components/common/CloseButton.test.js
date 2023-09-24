import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import CloseButton from 'src/Components/Common/CloseButton';

describe('CloseButton component', () => {
  test('Should render without crash', async () => {
    render(
      <CloseButton />
    );
  });
  test('Should contains props data', async () => {
    render(
      <CloseButton
        test_id='test_id'
      />
    );
    const close_buttons_by_test_id = screen.queryAllByTestId('test_id');
    expect(close_buttons_by_test_id).toHaveLength(1);
    // screen.debug()

  });
  test('Should onPress called', async () => {
    const onPress = jest.fn();
    render(
      <CloseButton
        test_id='test_id'
        onPress={onPress}
      />
    );
    const close_button_by_test_id = screen.queryByTestId('test_id');
    fireEvent.press(close_button_by_test_id);
    expect(onPress).toHaveBeenCalled();
    //screen.debug()
  });
});
