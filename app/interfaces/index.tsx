import {MouseEventHandler} from 'react';

export interface CustomButtonProps {
    content: string;
    btnStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface form_data {
    name : string;
    type : string;
    breed : string;
    color : string;
    gender : string;
    age : string;
    toilet_trained : string;
    medical_condition : string;
    reason : string;
    characteristics : string;
    vaccination: string;
    terms : boolean;
}

export interface FormProps {
    formData: form_data;
    handleFormInput(e: React.FormEvent<HTMLInputElement>): void;
    handleNext?: () => void;
    handlePrevious?: () => void;
    handleSubmit?: () => void;
}

export interface FormTextFieldProps {
    fieldTitle : string;
    value: string;
    onChange : () => void;
    field_id : string;
}

export interface FormRadioFieldProps {
    fieldTitle : string;
    value: string;
    onChange : () => void;
    option_1 : string;
    option_2 : string;
    option_3? : string;
    option_4? : string;
    field_id : string;
}
