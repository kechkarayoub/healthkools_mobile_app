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
        text='Text test'
        test_id='test_id'
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
        text='Text test'
        test_id='test_id'
        onPress={onPress}
      />
    );
    const touchable_opacity_with_icon_by_test_id = screen.queryByTestId('test_id');
    fireEvent.press(touchable_opacity_with_icon_by_test_id);
    expect(onPress).toHaveBeenCalled();
    // screen.debug()
  });
});
