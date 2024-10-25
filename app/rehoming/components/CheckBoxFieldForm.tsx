import React from 'react'
import { pet_traits } from '../constants/formQuestions'

type CheckBoxProps = {
    formData : string[];
    onChange(e: React.ChangeEvent<HTMLInputElement>) : void;
}

const CheckBoxFieldForm = ({formData, onChange}: CheckBoxProps) => {
  return (
    <div className="flex flex-col gap-2 justify-start">
        {pet_traits.map((trait) => (
            <div className='flex gap-2' key={trait}>
                <input
                    type="checkbox"
                    name="characteristics"
                    id={trait}
                    defaultValue={trait}
                    checked={formData.includes(trait)}
                    onChange={onChange}
                    className=''
                />
                <label htmlFor={trait} className="text-xs md:text-base xl:text-lg text-center">
                    {trait}
                </label>
            </div>
        ))}
        
    </div>
  )
}

export default CheckBoxFieldForm