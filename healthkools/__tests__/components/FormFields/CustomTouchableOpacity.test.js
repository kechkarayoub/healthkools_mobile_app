import CustomTouchableOpacity from 'src/Components/FormFields/CustomTouchableOpacity';
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('CustomTouchableOpacity component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomTouchableOpacity />
    );
  });

  test('Should contains props data', async () => {
    render(
      <CustomTouchableOpacity
        test_id='test_id'
        text='Text test'
      />
    );
    const touchable_opacities_by_test_id = screen.queryAllByTestId('test_id');
    expect(touchable_opacities_by_test_id).toHaveLength(1);
    const touchable_opacities_by_text = screen.queryAllByText('Text test');
    expect(touchable_opacities_by_text).toHaveLength(1);
    // screen.debug()

  });
  
  test('Should onPress called', async () => {
    const onPress = jest.fn();
    render(
      <CustomTouchableOpacity
      onPress={onPress}
      test_id='test_id'
      text='Text test'
      />
    );
    const touchable_opacity_by_test_id = screen.queryByTestId('test_id');
    fireEvent.press(touchable_opacity_by_test_id);
    expect(onPress).toHaveBeenCalled();
    // screen.debug()
  });
  
  test('Should onPress not called if disabled props is true', async () => {
    const onPress = jest.fn();
    render(
      <CustomTouchableOpacity
        disabled={true}
        onPress={onPress}
        test_id='test_id'
        text='Text test'
      />
    );
    const touchable_opacity_by_test_id = screen.queryByTestId('test_id');
    fireEvent.press(touchable_opacity_by_test_id);
    expect(onPress).not.toHaveBeenCalled();
    // screen.debug()
  });
});
