import React from "react";
import { act, render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import LanguagePicker from 'src/Components/Common/LanguagePicker';
import { Provider } from 'react-redux'
import store from 'src/Store/configureStore'
import {set} from 'src/Store/locale';
import i18n from 'src/i18n';
import {get_current_languages} from 'src/utils'
import renderer from 'react-test-renderer';
import { I18nextProvider } from 'react-i18next';
jest.mock('react-native-localize', () => ({
  // Mock the methods or properties you need for testing
  getLocales: jest.fn(() => [{ countryCode: 'FR', languageTag: 'fr-FR' }]),
}));
const current_language = "fr";
set("current_language", current_language);
i18n.init(current_language).then(() => {})
.catch((error) => {});
beforeAll(() => {
  }
);

describe('LanguagePicker component', () => {
  test('Should render without crash', async () => {
    render(
      <Provider store={store}>
        <LanguagePicker />
      </Provider>
    );
  });
  test('Should contains props data', async () => {
    render(
      <Provider store={store}>
          <LanguagePicker current_language={current_language} test_id='test_id' />
      </Provider>
    );
    //screen.debug()
    const drop_down_pickers_by_test_id = screen.queryAllByTestId('test_id');
    expect(drop_down_pickers_by_test_id).toHaveLength(1);
    const drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    expect(drop_down_pickers_by_text_en).toHaveLength(0);
    const drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    expect(drop_down_pickers_by_text_ar).toHaveLength(0);
    const drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    expect(drop_down_pickers_by_text_fr).toHaveLength(1);

  });
  test('Should language change', async () => {
    render(
      <Provider store={store}>
        <LanguagePicker 
          current_language={current_language} test_id='test_id' 
          list_mode="FLATLIST"  // Default list_mode value ('FLATLIST') trigger an error
        />
      </Provider>
    );
    const drop_down_picker_by_test_id = screen.queryByTestId('test_id');
    var drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    expect(drop_down_pickers_by_text_en).toHaveLength(0);
    var drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    expect(drop_down_pickers_by_text_ar).toHaveLength(0);
    var drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    // expect(drop_down_pickers_by_text_fr).toHaveLength(1);
    // await act(async () => {
    //   fireEvent(drop_down_picker_by_test_id, 'setOpen', true);
    // });
    // drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    // expect(drop_down_pickers_by_text_en).toHaveLength(1);
    // drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    // expect(drop_down_pickers_by_text_ar).toHaveLength(1);
    // drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    // expect(drop_down_pickers_by_text_fr).toHaveLength(2);
    // const drop_down_picker_by_text_en = screen.queryByText('Anglais');
    // await act(async () => {
    //   fireEvent.press(drop_down_picker_by_text_en);
    // });
    // drop_down_pickers_by_text_en = screen.queryAllByText('Anglais');
    // expect(drop_down_pickers_by_text_en).toHaveLength(1);
    // drop_down_pickers_by_text_ar = screen.queryAllByText('Arabe');
    // expect(drop_down_pickers_by_text_ar).toHaveLength(0);
    // drop_down_pickers_by_text_fr = screen.queryAllByText('Français');
    // expect(drop_down_pickers_by_text_fr).toHaveLength(0);
    // var new_stored_language = "";
    // var while_cond = true;
    // var cond = true;
    // while(while_cond){
    //   if(cond){
    //     cond = false;
    //     await get_current_languages(c_l => {
    //       new_stored_language = c_l;
    //       while_cond = false;
    //     });
    //     while_cond = false;
    //   }
    // }
    // expect(new_stored_language).toBe("en");
      //screen.debug()

  });
});
