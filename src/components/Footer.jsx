function Footer() {
    return (
      <footer className="page-footer" className=" purple darken-3">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Pet-проект 
            <a className="grey-text text-lighten-4 right" href="https://github.com/EvgenyaPankratova">
            Github-профиль
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export { Footer };