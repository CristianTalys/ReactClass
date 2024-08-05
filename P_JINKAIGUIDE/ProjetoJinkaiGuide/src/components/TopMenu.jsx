import './CssTopMenu.css';

const TopMenu = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <a href=""><img src="/icon.png" alt="Logo do site" /></a>
        </div>
        <div className="navBar">
          <input type="search" placeholder='Procure pelo jogo' />
          <div className="links">
            <a href="">
              <div className="link">PS-1</div>
            </a>
            <a href="">
              <div className="link">PS-2</div>
            </a><a href="">
              <div className="link">PC</div>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TopMenu