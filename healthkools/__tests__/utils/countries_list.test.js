import { get_countries, get_contries_select_options, get_contry_by_code } from 'src/utils/countries_list';


describe('Test get_countries', () => {
  test('Should get all countries', async () => {
    var countries = get_countries("en");
    expect(countries).toHaveLength(212);
  });
  
  test('Should order countries based on selected language', async () => {
    var countries = get_countries("en");
    var second_country = countries[1];
    expect(second_country.country_code).toBe("AX");
    countries = get_countries("fr");
    second_country = countries[1];
    expect(second_country.country_code).toBe("ZA");
    countries = get_countries("ar");
    second_country = countries[1];
    expect(second_country.country_code).toBe("ET");
  });
});

describe('Test get_contries_select_options', () => {
  test('Should get all countries', async () => {
    var countries_options = get_contries_select_options("en");
    expect(countries_options).toHaveLength(212);
  });

  test('Should order countries based on selected language', async () => {
    var countries_options = get_contries_select_options("en");
    var second_country_option = countries_options[1];
    expect(second_country_option.value).toBe("AX");
    expect(second_country_option.label).toBe("Aland Islands");
  });
});

describe('Test get_contry_by_code', () => {
  test('Should get by country code', async () => {
    var country = get_contry_by_code("TR");
    expect(country.translations.en).toBe("Turkey");
  });

  test('Should get by phone code int', async () => {
    var country = get_contry_by_code(216);
    expect(country.translations.en).toBe("Tunisia");
  });

  test('Should get by phone code str', async () => {
    var country = get_contry_by_code("+212");
    expect(country.translations.en).toBe("Morocco");
  });
});
