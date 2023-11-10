import CustomTouchableOpacityWithIcon from 'src/Components/FormFields/CustomTouchableOpacityWithIcon';
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('CustomTouchableOpacity component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomTouchableOpacityWithIcon />
    );
  });

  test('Should contains props data', async () => {
    render(
      <CustomTouchableOpacityWithIcon
        test_id='test_id'
        text='Text test'
      />
    );
    const touchable_opacities_with_icons_by_test_id = screen.queryAllByTestId('test_id');
    expect(touchable_opacities_with_icons_by_test_id).toHaveLength(1);
    const touchable_opacities_with_icons_by_text = screen.queryAllByText('Text test');
    expect(touchable_opacities_with_icons_by_text).toHaveLength(1);
    // screen.debug()
  });
  
  test('Should onPress called', async () => {
    const onPress = jest.fn();
    render(
      <CustomTouchableOpacityWithIcon
        onPress={onPress}
        test_id='test_id'
        text='Text test'
      />
    );
    const touchable_opacity_with_icon_by_test_id = screen.queryByTestId('test_id');
    fireEvent.press(touchable_opacity_with_icon_by_test_id);
    expect(onPress).toHaveBeenCalled();
    // screen.debug()
  });
  
  test('Should onPress not called id disabled props is true', async () => {
    const onPress = jest.fn();
    render(
      <CustomTouchableOpacityWithIcon
        disabled={true}
        onPress={onPress}
        test_id='test_id'
        text='Text test'
      />
    );
    const touchable_opacity_with_icon_by_test_id = screen.queryByTestId('test_id');
    fireEvent.press(touchable_opacity_with_icon_by_test_id);
    expect(onPress).not.toHaveBeenCalled();
  });
});
