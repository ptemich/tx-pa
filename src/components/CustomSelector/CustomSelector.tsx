import React, { useState, useEffect } from 'react';
import { CustomSelectorProps } from './CustomSelectorProps';


function CustomSelector({selectorName, options, valueSelectedCallback}: CustomSelectorProps) {

    // const [selectedValue, setSelectedValue] = useState<string>();
    // const [selectOptions, setSelectOptions] = useState<string[]>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        valueSelectedCallback(value);
    };


    return (
        <div className="field">
            <label className="label">{selectorName}</label>
            <div className="control">
                <div className="select">
                    <select onChange={selectChange} defaultValue="">
                        <option key="" value="">Please select</option>
                        {options != null ? options.map(entry => <option value={entry.value} key={entry.value}>{entry.label}</option>) : ""}
                    </select>
                </div>
            </div>

            {/* <label className="label">Name</label>
            <div className="controll">
                <input className="input" type="text" placeholder="Text input" value={selectedValue}/>
            </div> */}
        </div>
    );
}

export default CustomSelector;