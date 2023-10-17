type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-0 px-0 py-20">{children}</div>
}

export default Container
