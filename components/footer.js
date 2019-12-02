export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>Powered by </span>
        <img
          alt="cosmicjs"
          src="https://web-assets.cosmicjs.com/images/logo.svg"
          className="footer-logo"
        />
        <a style={{ color: "#191919" }} href="https://cosmicjs.com/">
          Cosmic JS
          </a>
        <span> & </span>
        <img
          alt="nextjs"
          src="https://nextjs.org/static/favicon/favicon.ico"
          className="footer-logo"
        />
        <a style={{ color: "#191919" }} href="https://nextjs.org/">
          Next JS
          </a>
        <span> & </span>
        <img
          alt="snipcart"
          src="https://snipcart.com/images/favicons/favicon-32x32.png"
          className="footer-logo"
        />
        <a style={{ color: "#191919" }} href="https://snipcart.com/">
          Snipcart
          </a>


      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          padding: 40px;
        }        
        .footer-logo {
          width: 20px;
          height: 20px;          
        }        
        a {
          text-decoration: none;
          color: #108db8;
          font-weight: bold;
          padding: 4px;
        }        
        img {
          max-width: 100%;
        }        
    `}</style>
    </footer>
  )
}