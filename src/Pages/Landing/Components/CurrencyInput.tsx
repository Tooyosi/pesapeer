import { formatter } from 'Helpers/utility';
import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';

export const CurrencyInput: React.FC<any> = ({ defaultSelected, formName, formControl,inputName, onChange }) => {
    const [selected, setSelected] = useState('CA');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (defaultSelected) {
            setSelected(defaultSelected)
        }
    }, [defaultSelected])

    const toggleEditing = () => setIsEditing((prev) => !prev)
    return (
        <form onSubmit={(e) => e.preventDefault()} name={formName} className='currency-input d-flex align-items-center'>
            {isEditing ?
                <input 
                    type="number" 
                    onBlur={toggleEditing}
                    name={inputName}
                    min="0"
                    value={formControl[inputName]}
                    onChange={onChange}
                    />
                :
                <input
                    type="text"
                    onFocus={toggleEditing}
                    name={inputName}
                    value={formControl[inputName] === ""?formControl[inputName] : formatter.format(formControl[inputName])}
                />
            }
            <ReactFlagsSelect
                selected={selected}
                className="flag-input ml-auto"
                fullWidth={false}
                searchable
                searchPlaceholder="Search"
                onSelect={code => setSelected(code)}
            />
        </form>
    )
}
