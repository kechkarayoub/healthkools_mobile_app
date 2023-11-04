import CustomTextArea from 'src/Components/FormFields/CustomTextArea';
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react-native';

const current_language = "en";

describe('CustomTextArea component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomTextArea current_language={current_language} />
    );
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(0);
  });

  test('Should contains props data', async () => {
    render(
      <CustomTextArea
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
      />
    );
    const textareas_by_test_id = screen.queryAllByTestId('test_id');
    expect(textareas_by_test_id).toHaveLength(1);
    const textareas_by_placeholder = screen.queryAllByPlaceholderText('PlaceholderTest');
    expect(textareas_by_placeholder).toHaveLength(1);
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(1);
    // screen.debug()
  });

  test('Should contains props data 2', async () => {
    render(
      <CustomTextArea
        current_language={"fr"}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="value_test"
      />
    );
    const textarea_by_test_id = screen.queryByTestId('test_id');
    expect(textarea_by_test_id.props.value).toBe("value_test");
    // console.log(textarea_by_test_id.props)
    // screen.debug()
  });

  test('Should value change', async () => {
    render(
      <CustomTextArea
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="value_test"
        onChangeText={null}
      />
    );

    var textarea_by_test_id = screen.queryByTestId('test_id');
    expect(textarea_by_test_id.props.value).toBe("value_test");
    fireEvent(textarea_by_test_id, 'onChangeText', "new_val_test");
    textarea_by_test_id = screen.queryByTestId('test_id');
    expect(textarea_by_test_id.props.value).toBe("new_val_test");
    // screen.debug()
  });
  
  test('Should value change with onChangeText props', async () => {
    const onChangeText = jest.fn();
    render(
      <CustomTextArea
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="value_test"
        onChangeText={onChangeText}
      />
    );
    var textarea_by_test_id = screen.queryByTestId('test_id');
    expect(textarea_by_test_id.props.value).toBe("value_test");
    fireEvent(textarea_by_test_id, 'onChangeText', "new_val_test");
    expect(onChangeText).toHaveBeenCalled();
    // if onSelect exists in props, value will be changed by the props.value not by setState function
    textarea_by_test_id = screen.queryByTestId('test_id');
    expect(textarea_by_test_id.props.value).toBe("value_test");
    // screen.debug()
  });
});
