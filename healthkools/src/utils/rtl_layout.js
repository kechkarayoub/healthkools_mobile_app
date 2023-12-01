export const reverse_property = (is_rtl, property, value) => {
  // Function to reverse property depending on is_rtl parameter
  // Params:
  //  - is_rtl: Boolean indicated if the current_language is rtl
  //  - property: Property to reverse
  //  - value: Value to reverse
  // Returns:
  //  - reversed_property_value: An array contains reversed property and value.
  let show_log = false;
  if(property == "textAlign") show_log = true;
  // if(show_log)console.log("000000000000000000000000000000000000000000000: ")
  // if(show_log)console.log("property: ", property)
  // if(show_log)console.log("value: ", value)
  // if(show_log)console.log('is_rtl: ', is_rtl)
  let reversed_property = property, reversed_value = value;
  if(is_rtl){
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
      case "paddingLeft":
        reversed_property = "paddingRight"
        break;
      case "paddingRight": 
        reversed_property = "paddingLeft"
        break;
      case "marginLeft":
        reversed_property = "marginRight"
        break;
      case "marginRight": 
        reversed_property = "marginLeft"
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
    }
  }
  // if(show_log)console.log("111111111111111111111111111111111111111: ")
  // if(show_log)console.log("reversed_property: ", reversed_property)
  // if(show_log)console.log("reversed_value: ", reversed_value)
  return [reversed_property, reversed_value];
}

export const reverse_style = (current_language, style) => {
  // Function to reverse style depending on current_language
  // Params:
  //  - current_language: Current language selected
  //  - style: Style to reverse
  // Returns:
  //  - reversed_style: Reversed style
  let reverse_style = {};
  style = style || {};
  // console.log("current_language: ", current_language)
  let is_rtl = current_language == "ar";
  Object.keys(style).map(property => {
    let reversed_property_value = reverse_property(is_rtl, property, style[property]);
    reverse_style[reversed_property_value[0]] = reversed_property_value[1];
  });
  // console.log("style: ", style)
  // console.log("reverse_style: ", reverse_style)
  return reverse_style;
};
