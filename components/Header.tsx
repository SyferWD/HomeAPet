
interface HeaderProps {
    content: string;
}

const Header = ({content} : HeaderProps) => {
  return (
    <h2 className="flex justify-center items-center my-10 font-semibold text-4xl font-poppins ">
        {content}
    </h2>
  )
}

export default Header