export const reverse_property = (convert, property, value, only_value, reversed_value_) => {
  // Function to reverse property depending on convert parameter
  // Params:
  //  - convert: Boolean indicated if the current_language is rtl or only forcing convertion
  //  - property: Property to reverse
  //  - value: Value to reverse
  // Returns:
  //  - reversed_property_value: An array contains reversed property and value.
  let show_log = false;
  if(property == "textAlign") show_log = true;
  // if(show_log)console.log("000000000000000000000000000000000000000000000: ")
  // if(show_log)console.log("property: ", property)
  // if(show_log)console.log("value: ", value)
  // if(show_log)console.log('convert: ', convert)
  let reversed_property = property, reversed_value = value;
  if(convert){
    if(only_value){
      reversed_value = reversed_value_;
    }
    else{
      switch(property){
        case "alignItems":
          if(show_log)console.log('555555555555555')
          switch(value){
            case 'flex-end':
              reversed_value = 'flex-start';
              break;
            case 'flex-start':
              reversed_value = 'flex-end';
              break;
          }
          break;
        case "alignSelf":
          switch(value){
            case 'flex-end':
              reversed_value = 'flex-start';
              break;
            case 'flex-start':
              reversed_value = 'flex-end';
              break;
          }
          break;
        case "direction":
          switch(value){
            case 'rtl':
              reversed_value = 'ltr';
              break;
            case 'ltr':
              reversed_value = 'rtl';
              break;
          }
          break;
        case "flexDirection":
          switch(value){
            case 'row':
              reversed_value = 'row-reverse';
              break;
            case 'row-reverse':
              reversed_value = 'row';
              break;
          }
          break;
        case "justifyContent":
          switch(value){
            case 'flex-end':
              reversed_value = 'flex-start';
              break;
            case 'flex-start':
              reversed_value = 'flex-end';
              break;
          }
          break;
        case "left":
          reversed_property = "right"
          break;
        case "marginLeft":
          reversed_property = "marginRight"
          break;
        case "marginRight": 
          reversed_property = "marginLeft"
          break;
        case "paddingLeft":
          reversed_property = "paddingRight"
          break;
        case "paddingRight": 
          reversed_property = "paddingLeft"
          break;
        case "right":
          reversed_property = "left"
          break;
        case "textAlign":
          switch(value){
            case 'left':
              reversed_value = 'right';
              break;
            case 'right':
              reversed_value = 'left';
              break;
          }
          break;
        case "writingDirection":
          switch(value){
            case 'rtl':
              reversed_value = 'ltr';
              break;
            case 'ltr':
              reversed_value = 'rtl';
              break;
          }
          break;
      }
    }
  }
  // if(show_log)console.log("111111111111111111111111111111111111111: ")
  // if(show_log)console.log("reversed_property: ", reversed_property)
  // if(show_log)console.log("reversed_value: ", reversed_value)
  return [reversed_property, reversed_value];
}

export const reverse_style = (current_language, style, force_convertion, to_not_convert) => {
  // Function to reverse style depending on current_language
  // Params:
  //  - current_language: Current language selected
  //  - style: Style to reverse
  // Returns:
  //  - reversed_style: Reversed style
  let reversed_style = {};
  style = style || {};
  to_not_convert = to_not_convert || [];
  // console.log("current_language: ", current_language)
  let convert = force_convertion || current_language == "ar";
  Object.keys(style).map(property => {
    if(to_not_convert.indexOf(property) !== -1){
      reversed_style[property] = style[property];
    }
    else{
      let reversed_property_value = reverse_property(convert, property, style[property]);
      reversed_style[reversed_property_value[0]] = reversed_property_value[1];
    }
  });
  // console.log("style: ", style)
  // console.log("reversed_style: ", reversed_style)
  return reversed_style;
};
