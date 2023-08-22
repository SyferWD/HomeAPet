import { FormTextFieldProps } from '@/app/interfaces';

const LargeTextFieldForm = ({fieldTitle,field_id, value, onChange} : FormTextFieldProps) => {
  return (
    <div className="px-10 py-4 flex justify-center items-center mb-4">
      <label htmlFor={field_id} className="basis-1/3 mr-4 w-18 text-3xl text-center text-primary-blue">
        {fieldTitle}
      </label>
      <input
        type="text"
        name={fieldTitle}
        id = {field_id}
        defaultValue={value}
        onChange={(e) => onChange}
        required
        className="basis-2/3 w-3/5 h-80 border-2 border-gray-400 px-3 rounded-lg focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300"
      />
    </div>
  )
}

export default LargeTextFieldForm