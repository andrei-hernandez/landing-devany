import React from 'react';
import './Footer.css';

export default function Footer({ handleNewsSubmit = () => { }, handleChangeNews = () => { } }) {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>¡Registrate a nuestro newslatter!</h4>
              <p>Podrás recibir cupones de descuento por parte de nuestro equipo de ventas.</p>
              <form>
                <input type="email" name="email" onChange={handleChangeNews} /><input type="submit" value="Subscribe" onClick={handleNewsSubmit} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestras redes sociales</h4>
              <p>Puedes seguirnos para estar siempre al tanto de todas nuestras noticias</p>
              <div className="social-links mt-3">
                <a href="twitter.com" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="facebook.com" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="instagram.com" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="google.com" className="google-plus"><i className="bx bxl-skype" /></a>
                <a href="linkedin.com" className="linkedin"><i className="bx bxl-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          © Copyright <strong><span>devany.mx</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
