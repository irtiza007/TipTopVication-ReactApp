import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default ({ field, form, ...props }) => {
  const [phone, setPhone] = useState(field.value);
  return (
    <PhoneInput
      onlyCountries={["us"]}
      country={"us"}
      placeholder="Enter phone number"
      value={phone}
      onChange={value => {
        if (!form.touched[field.name]) form.setFieldTouched(field.name, false)
        else form.setFieldTouched(field.name, true);
        setPhone(value);
        form.setFieldValue(field.name, phone);
      }}
    />
  );
};
