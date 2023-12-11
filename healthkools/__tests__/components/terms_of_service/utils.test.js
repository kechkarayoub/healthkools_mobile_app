import moment from "moment";
import { empty_text, render_term_service_custom_item, render_term_service_link, render_transparent_text } from 'src/Components/terms_of_service/utils';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { set } from 'src/Store/locale';

jest.mock('react-native-localize', () => ({
  // Mock getLocales for testing
  getLocales: jest.fn(() => [{ countryCode: 'FR', languageTag: 'fr-FR' }]),
}));

describe('Render_term_service_link function', () => {
    test('Test render_term_service_link render without crush', () => {
        render(<>
            {render_term_service_link()}
        </>);
    });
    test('Test render_term_service_link depending on props', () => {
        const onOpen = jest.fn();
        const { getByText } = render(<>
            {render_term_service_link('link_url', 'link_label', onOpen, {})}
        </>);
        var element = getByText('link_label');
        expect(element).toBeTruthy();     
        
        fireEvent.press(element);
        expect(onOpen).toHaveBeenCalled();   
        expect(onOpen).toHaveBeenCalledWith('link_url');   
    });
    
});

describe('Render_term_service_custom_item function', () => {
    test('Test render_term_service_custom_item render without crush', () => {
        render(<>
            {render_term_service_custom_item()}
        </>);
    });
    test('Test render_term_service_custom_item depending on props', () => {
        const { getByText } = render(<>
            {render_term_service_custom_item('label', {})}
        </>);
        var element = getByText('label');
        expect(element).toBeTruthy();  
    });
    
});

describe('Render_transparent_text function', () => {
    test('Test render_transparent_text render without crush', () => {
        render(<>
            {render_transparent_text()}
        </>);
    });
    test('Test render_transparent_text when nbr_chars props is 1', () => {
        const { getByText } = render(<>
            {render_transparent_text({}, 1)}
        </>);
        
        var element = getByText(empty_text.substring(0, 1 + 250));
        expect(element).toBeTruthy();        
    });
    test('Test render_transparent_text when nbr_chars props is 100', () => {
        const { getByText } = render(<>
            {render_transparent_text({}, 100)}
        </>);
        
        var element = getByText(empty_text.substring(0, 100 + 250));
        expect(element).toBeTruthy();        
    });
    test('Test render_transparent_text when nbr_chars props is 1 and is_portrait is true', () => {
        const { getByText } = render(<>
            {render_transparent_text({}, 1, true)}
        </>);
        
        var element = getByText(empty_text.substring(0, 1));
        expect(element).toBeTruthy();        
    });
    test('Test render_transparent_text when nbr_chars props is 100 and is_portrait is true', () => {
        const { getByText } = render(<>
            {render_transparent_text({}, 100, true)}
        </>);
        
        var element = getByText(empty_text.substring(0, 100));
        expect(element).toBeTruthy();        
    });
});

