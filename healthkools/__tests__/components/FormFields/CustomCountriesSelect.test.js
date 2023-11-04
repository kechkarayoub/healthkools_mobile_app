import CustomCountriesSelect from 'src/Components/FormFields/CustomCountriesSelect';
import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import { get_contries_select_options } from "src/utils/countries_list";

// Use jest.mock to mock the function
jest.mock('src/utils/countries_list');

// Define the mock implementation of get_contries_select_options
get_contries_select_options.mockImplementation((language) => {
  // Mock implementation here
  // I can return whatever mock data you need for your test
  if (language === 'fr') {
    return [
      { label: 'Algerie', value: 'DZ', icon: () => <></> },
      { label: 'Etats unis', value: 'US', icon: () => <></> },
      { label: 'Maroc', value: 'MA', icon: () => <></> },
    ];
  } 
  else {
    return [
      { label: 'Algeria', value: 'DZ', icon: () => <></> },
      { label: 'Morocco', value: 'MA', icon: () => <></> },
      { label: 'United states', value: 'US', icon: () => <></> },
    ];
  }

  // Add additional cases or return values as needed
});

describe('CustomCountriesSelect component', () => {
  it('Renders without crash', async () => {
    const { getByPlaceholderText } = render(
      <CustomCountriesSelect
        placeholder="Select a country"
      />
    );
  });

  it('Renders with a placeholder', async () => {
    const { getByText } = render(
      <CustomCountriesSelect
        placeholder="Select a country"
        current_language="en"
      />
    );
    // Wait for the component to be fully rendered
    await waitFor(() => {
      const element = getByText('Select a country');
      expect(element).toBeTruthy();
    });
  });

  it('Renders with a value', async() => {
    const { getByText } = render(
      <CustomCountriesSelect
        value="US"
        current_language="en"
      />
    );

    // Wait for the component to be fully rendered
    await waitFor(() => {
      const element = getByText('United states');
      expect(element).toBeTruthy();
    });
  });

  it('Calls onSelect when an option is selected', async () => {
    const onSelectMock = jest.fn();
    const { getByTestId, getByText, queryByText } = render(
      <CustomCountriesSelect
        onSelect={onSelectMock}
        test_id="country_select_test_id"
        current_language="en"
        list_mode="SCROLLVIEW"  // Default list_mode value ('MODAL') trigger an error
      />
    );

    // Open the dropdown
    const dropdownButton = getByTestId('country_select_test_id');
    expect(dropdownButton).toBeTruthy();
    expect(queryByText('United states')).toBeNull();
    fireEvent(dropdownButton, 'setOpen', true);
    await waitFor(() => {
      expect(queryByText('United states')).not.toBeNull();
    });
    // Select an option (e.g., "United States")
    const optionToSelect = getByText('United states');
    await act(async () => {
      fireEvent.press(optionToSelect);
      // Check if onSelect was called with the selected value
      expect(onSelectMock).toHaveBeenCalled();
      expect(onSelectMock).toHaveBeenCalledWith('US');
    });
    
  });

  it('Disables the dropdown when disabled prop is true', async () => {
    const { getByTestId, queryByText } = render(
      <CustomCountriesSelect
        disabled={true}
        test_id="country_select_test_id"
      />
    );

    const dropdownButton = getByTestId('country_select_test_id');
    expect(dropdownButton).toBeTruthy();
    expect(queryByText('United states')).toBeNull();
    fireEvent(dropdownButton, 'setOpen', true);
    await waitFor(() => {
      expect(queryByText('United states')).toBeNull();
    });
  });

  it('Renders with a form error', () => {
    const { getByText } = render(
      <CustomCountriesSelect
        form_error="This field is required"
      />
    );
    const errorElement = getByText('This field is required');
    expect(errorElement).toBeTruthy();
  });
});
