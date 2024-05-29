import React, { useEffect, useState } from "react";

const RadioGroup = ({ items, defaultCheckedData, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target; //const value = event.target.value;
    const selectedData = items.find((item) => item.type === value); //객체로 데이터 반환
    setValue(value);
    onChange(selectedData);
  };

  useEffect(() => {
    setValue(defaultCheckedData.type);
  }, [defaultCheckedData]);

  return (
    <div className="flex py-8">
      {items.map((item) => (
        <div key={item.id} className="w-full text-center">
          <label htmlFor={item.type} className="peer-checked:bg-red-500">
            <input
              id={item.type}
              type="radio"
              name="gender"
              value={item.type}
              checked={value === item.type}
              className="hidden peer"
              onChange={handleChange}
            />
            <div className="pb-4 grayscale peer-checked:grayscale-0">
              <img
                src={`./images/${item.type}.svg`}
                alt={item.type}
                className="block w-3/5 mx-auto"
              />
            </div>
            <span className="w-5 h-5 inline-block align-middle rounded bg-date-gray-200 peer-checked:bg-date-blue-500">
              <i className="block w-full h-full bg-[url('../public/images/check.svg')] bg-no-repeat bg-center"></i>
            </span>
            <span className="inline-block align-middle px-2">{item.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
