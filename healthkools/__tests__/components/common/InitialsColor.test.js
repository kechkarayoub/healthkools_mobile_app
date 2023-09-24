import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import InitialsColor from 'src/Components/Common/InitialsColor';

describe('InitialsColor component', () => {
  test('Should render without crash', async () => {
    render(
      <InitialsColor />
    );
    const initials_color_by_test_id = screen.queryAllByTestId('initials_color_test_id');
    expect(initials_color_by_test_id).toHaveLength(1);
  });
  test('Should contains props data', async () => {
    render(
      <InitialsColor
        test_id='test_id'
        initials="KA"
      />
    );
    const initials_color_by_test_id = screen.queryAllByTestId('test_id');
    expect(initials_color_by_test_id).toHaveLength(1);
    const initials_color_by_text = screen.queryAllByText('KA');
    expect(initials_color_by_text).toHaveLength(1);
    // screen.debug()

  });
  test('Should onPress called', async () => {
    const onPress = jest.fn();
    render(
      <InitialsColor
        test_id='test_id'
        initials="KA"
        onPress={onPress}
      />
    );
    const initials_color_by_test_id = screen.queryByText('KA');
    fireEvent.press(initials_color_by_test_id);
    expect(onPress).toHaveBeenCalled();
    //screen.debug()
  });
});
