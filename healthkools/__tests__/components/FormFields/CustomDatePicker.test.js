import CustomDatePicker from 'src/Components/FormFields/CustomDatePicker';
import moment from 'moment';
import React from "react";
import { act,fireEvent, render, screen } from '@testing-library/react-native';
import { get_date_format } from "src/utils/index";

const current_language = "en";

jest.mock('react-native-localize', () => ({
  // Mock getLocales for testing
  getLocales: jest.fn(() => [{ countryCode: 'US', languageTag: 'en-US' }]),
}));

describe('CustomDatePicker component', () => {
  test('Should render without crash', async () => {
    render(
      <CustomDatePicker/>
    );
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(0);
  });

  test('Should contains props data', async () => {
    render(
      <CustomDatePicker
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
      />
    );
    const dates_pickers_by_test_id = screen.queryAllByTestId('test_id');
    expect(dates_pickers_by_test_id).toHaveLength(0);
    const dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
    expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
    const dates_pickers_date_btn_by_placeholder = screen.queryAllByText('PlaceholderTest');
    expect(dates_pickers_date_btn_by_placeholder).toHaveLength(1);
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(1);
    // screen.debug()
  });
  
  test('Should contains props data 2', async () => {
    render(
      <CustomDatePicker
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        value={moment().toDate()}
      />
    );
    const str_to_search = get_date_format(moment());
    const dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
    expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
    const dates_pickers_date_btn_by_placeholder = screen.queryAllByText('PlaceholderTest');
    expect(dates_pickers_date_btn_by_placeholder).toHaveLength(0);
    const dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
    expect(dates_pickers_date_btn_by_text).toHaveLength(1);
    const components_errors_by_text = screen.queryAllByText('form_error');
    expect(components_errors_by_text).toHaveLength(0);
    // screen.debug()
  });

  test('Should DatePicker appear wen clicking date str', async () => {
    render(
      <CustomDatePicker
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
        value={moment().toDate()}
        onChange={null}
      />
    );
    await act(async () => {
      const str_to_search = get_date_format(moment());
      var dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      const date_picker_date_btn_by_test_id = screen.queryByTestId('test_id_date_btn');
      await act(async () => {
        fireEvent.press(date_picker_date_btn_by_test_id);
      });
      dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_modal_by_test_id = screen.queryAllByTestId('test_id');
      expect(dates_pickers_modal_by_test_id).toHaveLength(1);
      //screen.debug()
    });
  });

  test('Should date change', async () => {
    render(
      <CustomDatePicker
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
        value={moment().toDate()}
        onChange={null}
      />
    );
    await act(async () => {
      const str_to_search = get_date_format(moment());
      const new_str_to_search = get_date_format(moment().add(1, "days"));
      var dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      const date_picker_date_btn_by_test_id = screen.queryByTestId('test_id_date_btn');
      await act(async () => {
        fireEvent.press(date_picker_date_btn_by_test_id);
      });
      dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_modal_by_test_id = screen.queryAllByTestId('test_id');
      expect(dates_pickers_modal_by_test_id).toHaveLength(1);
      const date_picker_modal_by_test_id = screen.queryByTestId('test_id');
      await act(async () => {
        fireEvent(date_picker_modal_by_test_id, 'change', {
          nativeEvent: { timestamp: moment().add(1, "days").toDate().getTime() },
        });
      });
      await act(async () => {
        fireEvent.press(screen.queryByText(/confirm/i));
      });
      dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(0);
      dates_pickers_date_btn_by_text = screen.queryAllByText(new_str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      //screen.debug()
    })
  });

  test('Should date change with onChange props', async () => {
    const onChange = jest.fn();
    render(
      <CustomDatePicker
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
        value={moment().toDate()}
        onChange={onChange}
      />
    );
    await act(async () => {
      const str_to_search = get_date_format(moment());
      const new_str_to_search = get_date_format(moment().add(1, "days"));
      var dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      const date_picker_date_btn_by_test_id = screen.queryByTestId('test_id_date_btn');
      await act(async () => {
        fireEvent.press(date_picker_date_btn_by_test_id);
      });
      dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_modal_by_test_id = screen.queryAllByTestId('test_id');
      expect(dates_pickers_modal_by_test_id).toHaveLength(1);
      const date_picker_modal_by_test_id = screen.queryByTestId('test_id');
      await act(async () => {
        fireEvent(date_picker_modal_by_test_id, 'change', {
          nativeEvent: { timestamp: moment().add(1, "days").toDate().getTime() },
        });
      });
      await act(async () => {
        fireEvent.press(screen.queryByText(/confirm/i));
      });
      dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      dates_pickers_date_btn_by_text = screen.queryAllByText(new_str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(0);
      expect(onChange).toHaveBeenCalled();
      //screen.debug()
    });
  });

  test('Should cancel not changing date', async () => {
    const onChange = jest.fn();
    render(
      <CustomDatePicker
        current_language={current_language}
        test_id='test_id'
        placeholder="PlaceholderTest"
        form_error="form_error"
        value={moment().toDate()}
        onChange={onChange}
      />
    );
    await act(async () => {
      const str_to_search = get_date_format(moment());
      const new_str_to_search = get_date_format(moment().add(1, "days"));
      var dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      const date_picker_date_btn_by_test_id = screen.queryByTestId('test_id_date_btn');
      await act(async () => {
        fireEvent.press(date_picker_date_btn_by_test_id);
      });
      dates_pickers_date_btn_by_test_id = screen.queryAllByTestId('test_id_date_btn');
      expect(dates_pickers_date_btn_by_test_id).toHaveLength(1);
      var dates_pickers_modal_by_test_id = screen.queryAllByTestId('test_id');
      expect(dates_pickers_modal_by_test_id).toHaveLength(1);
      const date_picker_modal_by_test_id = screen.queryByTestId('test_id');
      await act(async () => {
        fireEvent(date_picker_modal_by_test_id, 'change', {
          nativeEvent: { timestamp: moment().add(1, "days").toDate().getTime() },
        });
      });
      await act(async () => {
        fireEvent.press(screen.queryByText(/Cancel/i));
      });
      dates_pickers_date_btn_by_text = screen.queryAllByText(str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(1);
      dates_pickers_date_btn_by_text = screen.queryAllByText(new_str_to_search);
      expect(dates_pickers_date_btn_by_text).toHaveLength(0);
      expect(onChange).not.toHaveBeenCalled();
      //screen.debug()
    });
  });
});
