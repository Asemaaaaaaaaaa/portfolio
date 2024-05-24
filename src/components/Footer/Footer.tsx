import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Этот сайт был создан с помощью <img src={reactIcon} alt="React" /> и с
          { <span>❤️</span> }
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/%D3%99%D1%81%D0%B5%D0%BC-%D1%81%D1%8B%D1%80%D1%8B%D0%BC%D0%B1%D0%B5%D1%82%D0%BE%D0%B2%D0%B0-419561307/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Asemaaaaaaaaaa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/77002483780"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/asemaslll"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/191.ass"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
