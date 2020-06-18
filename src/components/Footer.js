import React from 'react';

// social icons
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <span>&copy; 2020 Картина мира</span>

        <b>Картина мира</b>

        <ul className="social">
          <li>
            <a title="facebook" href="https://facebook.com" target="_blank">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </li>

          <li>
            <a title="twitter" href="https://twitter.com" target="_blank">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </li>

          <li>
            <a title="instagram" href="https://instagram.com" target="_blank">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </li>

          <li>
            <a title="vimeo" href="https://vimeo.com" target="_blank">
              <img
                src={vimeo}
                alt="Vimeo"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </li>
        </ul>
    </footer>
  );
}

export default Footer;
