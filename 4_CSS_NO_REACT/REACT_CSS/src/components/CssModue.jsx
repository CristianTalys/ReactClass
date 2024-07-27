import classes from "./CssModue.module.css";

const CssModue = () => {
  return (
    <div className="content">
        <h2 className="subtitle">CSS Modules</h2>
        <ul>
            <li>CSS Modules permite deixar o CSS <strong>scoped</strong>;</li>
            <li>Ou seja, ele só funciona para o componente em questão;</li>
            <li>O nome do arquivo fica: <strong>Component.module.css</strong>;</li>
            <li>É necessário fazer a importação também;</li>
        </ul>
        <div className="caixaTeste"></div>
    </div>
  )
}

export default CssModue