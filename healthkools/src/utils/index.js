// import {supported_languages} from 'src/config/global';
import {get} from 'src/Store/locale';
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

export const COLORS = ["#f36422", "#ffee02", "#f070a9", "#00adef", "#7cc142", "#d02b49"];
export const get_date_format = (moment_obj) => {
  return moment_obj.format("DD/MM/YYYY");
};
export const line_return = (nbr_line_return) => {
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
  return moment_obj.format("DD/MM/YYYY HH:mm");
};
export const get_time_format = (moment_obj) => {
  return moment_obj.format("HH:mm");
};
export const get_current_languages = async (callback) => {
  await get('current_language', cl => {
    callback(cl);
  });
};
export const get_local_number_from_international = (international_number) => {
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
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}