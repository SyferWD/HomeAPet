
interface FormSectionContainerProps {
    children: React.ReactNode
}

const FormSectionContainer = ( {children}:FormSectionContainerProps ) => {
  return (
    <div className="flex flex-col p-4 gap-3 border-t border-gray-300 min-h-fit md:min-h-[60vh] justify-normal md:justify-around">
        {children}
    </div>
  )
}

export default FormSectionContainer