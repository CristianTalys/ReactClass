const Container = ({children}) => {
  return (
    <div>
        <h2 className="subtitle">Conteudo do componente pai:</h2>
        {children}
    </div>
  )
}

export default Container