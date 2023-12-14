// import {supported_languages} from 'src/config/global';
import { get } from 'src/Store/locale';
import { Linking } from 'react-native';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

export const COLORS = ["#f36422", "#ffee02", "#f070a9", "#00adef", "#7cc142", "#d02b49"];

export const get_date_format = (moment_obj) => {
  // Function to format a moment object to a custom date string
  // Params:
  //  - moment_obj (object): A moment.js object representing a date
  // Returns:
  //  - (string): Formatted date string in the "DD/MM/YYYY" format
  return toStrRegularNumerals(moment_obj.format("DD/MM/YYYY"));
};

export const line_return = (nbr_line_return) => {
  // Function to generate a string with a specified number of line breaks
  // Params:
  //  - nbr_line_return (number or string): Number of line breaks to generate
  // Returns:
  //  - (string): String with the specified number of line breaks ("\n")
  try{
    nbr_line_return = parseInt(nbr_line_return) || 1;
  }
  catch{
    nbr_line_return = 1;
  }
  var i = 0;
  var res = "";
  while(i < nbr_line_return){
    res += "\n";
    i++;
  }
  return res;
};

export const get_datetime_format = (moment_obj) => {
  // Function to format a moment object to a custom datetime string
  // Params:
  //  - moment_obj (object): A moment.js object representing a datetime
  // Returns:
  //  - (string): Formatted date string in the "DD/MM/YYYY HH:mm" format
  return moment_obj.format("DD/MM/YYYY HH:mm");
};

export const get_time_format = (moment_obj) => {
  // Function to format a moment object to a custom datetime string
  // Params:
  //  - moment_obj (object): A moment.js object representing a datetime
  // Returns:
  //  - (string): Formatted date string in the "HH:mm" format
  return moment_obj.format("HH:mm");
};

export const get_current_language = async (callback) => {
  // Async function to retrieve the current language from local storage
  // Params:
  // - callback (function): A callback function to handle the retrieved language
  //   - Receives the current language as an argument
  await get('current_language', cl => {
    callback(cl);
  });
};

export const get_local_number_from_international = (international_number) => {
  // Function to convert an international phone number to a local format
  // Params:
  //  - international_number (string): The international phone number to be converted
  // Returns:
  //  - (string): Converted local phone number or the original input if conversion fails

  var international_number_ = international_number;
  if(international_number && international_number.charAt(0) !== "0" && international_number.charAt(0) !== "+"){
    international_number_ = "+" + international_number_;
  }
  try{
    var pu = phoneUtil.parse(international_number_);
    if(!phoneUtil.isValidNumber(pu)){
      return international_number;
    }
    var country_code = pu.getCountryCode();
    if(international_number_.indexOf("+" + country_code) !== -1){
      return international_number_.replace("+" + country_code, "0");
    }
    return international_number_.replace(country_code, "0");
  } catch(err){
    return international_number;
  }
};

export const get_country_phone_code_from_number = (international_number) => {
  // Function to extract the country phone code from an international phone number
  // Params:
  //  - international_number (string): The international phone number to extract the country code from
  // Returns:
  //  - (string): Extracted country phone code in the format "+{code}", or an empty string if extraction fails

  var international_number_ = international_number;
  if(international_number && international_number.charAt(0) !== "0" && international_number.charAt(0) !== "+"){
    international_number_ = "+" + international_number_;
  }
  try{
    var pu = phoneUtil.parse(international_number_);
    if(!phoneUtil.isValidNumber(pu)){
      return "";
    }
    var country_phone_code = pu.getCountryCode();
    if(country_phone_code){
      country_phone_code += "";
      return country_phone_code.indexOf("+") !== -1 ? country_phone_code : "+" + country_phone_code;
    }
    return "";
  } catch(err){
    return "";
  }
};

export const get_random_color = () => {
  // Function to generate a random color from a predefined array of colors
  // Returns:
  //  - (string): A randomly selected color from the COLORS array
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};




export const handleOpenUrl = async (url) => {
  // Asynchronous function to handle the opening of a URL
  // Params:
  //  - url (string): The URL to be opened
  // decodeURIComponent(url): Decode the URL before opening it asynchronously using Linking API
  await Linking.openURL(decodeURIComponent(url));
}

export const toStrRegularNumerals = numerals_str => {
  // Function to convert arabic numbers to standars numbers. 
  // Params:
  //  - numerals_str (string): The arabic numbers string to convert.
  // Returns:
  //  - (string): The converted string with the standars numbers
  return (numerals_str || "").replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));  
};
