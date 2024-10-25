import { FormRadioFieldProps } from '@/app/interfaces';

const RadioFieldForm = ({fieldTitle,option_1,option_2,option_3, option_4, value, onChange, field_id} : FormRadioFieldProps) => {
  return (
    <div className="flex w-full gap-0 md:gap-2">
        <span className='basis-1/3 md:basis-1/4 text-start text-primary-blue text-lg md:text-end'>
            {fieldTitle}
        </span>
        <div className='basis-2/3 md:basis-3/4 flex justify-start gap-4 text-center items-center'>
            <input
                type="radio"
                name={field_id}
                id={option_1}
                checked={value === 'Male'}
                value={option_1}
                onChange={onChange}
                required
            />
            <label htmlFor={option_1} className=" text-center">
                {option_1}
            </label>
            <input
                type="radio"
                name={field_id}
                id={option_2}
                checked={value === 'Female'}
                value={option_2}
                onChange={onChange}
                required
            />
            <label htmlFor={option_2} className=" text-center">
                {option_2}
            </label>
            {option_3 != null ? (
                <>
                    <input
                        type="radio"
                        name={field_id}
                        id={option_3}
                        value={option_3}
                        onChange={(e) => onChange}
                        required
                    />
                    <label htmlFor={option_3} className=" text-center">
                        {option_3}
                    </label>
                </> 
            ): null}
            {option_4 != null ? (
                <>
                    <input
                        type="radio"
                        name={field_id}
                        id={option_4}
                        value={option_4}
                        onChange={(e) => onChange}
                        required
                    />
                    <label htmlFor={option_4} className="text-center">
                        {option_4}
                    </label>
                </> 
            ): null}
        </div>
      
    </div>
  )
}

export default RadioFieldForm