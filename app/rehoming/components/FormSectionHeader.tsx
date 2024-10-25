
interface FormSectionHeaderProps {
    content: string;
}

const FormSectionHeader = ( {content}: FormSectionHeaderProps) => {
  return (
    <h2 className="py-2 w-full text-center font-bold text-xl">
        {content}
    </h2>
  )
}

export default FormSectionHeader