import InitialsColor from 'src/Components/Common/InitialsColor';
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react-native';

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
        initials="KA"
        test_id='test_id'
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
        initials="KA"
        onPress={onPress}
        test_id='test_id'
      />
    );
    const initials_color_by_test_id = screen.queryByText('KA');
    fireEvent.press(initials_color_by_test_id);
    expect(onPress).toHaveBeenCalled();
    //screen.debug()
  });

  test('Should onPress not called if disabled props is true', async () => {
    const onPress = jest.fn();
    render(
      <InitialsColor
        disabled={true}
        initials="KA"
        onPress={onPress}
        test_id='test_id'
      />
    );
    const initials_color_by_test_id = screen.queryByText('KA');
    fireEvent.press(initials_color_by_test_id);
    expect(onPress).not.toHaveBeenCalled();
    //screen.debug()
  });
});
