import CustomInputText from 'src/Components/FormFields/CustomInputText';
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react-native';

const current_language = "en";

describe('CustomInputText component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomInputText current_language={current_language} />
    );
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(0);
  });

  test('Should contains props data', async () => {
    render(
      <CustomInputText
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
      />
    );
    const inputs_text_by_test_id = screen.queryAllByTestId('test_id');
    expect(inputs_text_by_test_id).toHaveLength(1);
    const inputs_texts_by_placeholder = screen.queryAllByPlaceholderText('PlaceholderTest');
    expect(inputs_texts_by_placeholder).toHaveLength(1);
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(1);
    // screen.debug()

  });

  test('Should contains props data 2', async () => {
    render(
      <CustomInputText
        current_language={"fr"}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="value_test"
      />
    );
    const input_text_by_test_id = screen.queryByTestId('test_id');
    expect(input_text_by_test_id.props.value).toBe("value_test");
    // console.log(input_text_by_test_id.props)
    // screen.debug()

  });

  test('Should value change', async () => {
    render(
      <CustomInputText
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="value_test"
        onChangeText={null}
      />
    );

    var input_text_by_test_id = screen.queryByTestId('test_id');
    expect(input_text_by_test_id.props.value).toBe("value_test");
    fireEvent(input_text_by_test_id, 'onChangeText', "new_val_test");
    input_text_by_test_id = screen.queryByTestId('test_id');
    expect(input_text_by_test_id.props.value).toBe("new_val_test");
    // screen.debug()
  });
  
  test('Should value change with onChangeText props', async () => {
    const onChangeText = jest.fn();
    render(
      <CustomInputText
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value="value_test"
        onChangeText={onChangeText}
      />
    );
    var input_text_by_test_id = screen.queryByTestId('test_id');
    expect(input_text_by_test_id.props.value).toBe("value_test");
    fireEvent(input_text_by_test_id, 'onChangeText', "new_val_test");
    expect(onChangeText).toHaveBeenCalled();
    // if onSelect exists in props, value will be changed by the props.value not by setState function
    input_text_by_test_id = screen.queryByTestId('test_id');
    expect(input_text_by_test_id.props.value).toBe("value_test");

    // screen.debug()
  });
});
