import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Контакты</h2>
        <p>Готовы приступить к работе над своим проектом? </p>
        <p>Свяжитесь со мной прямо сейчас, чтобы получить бесплатную консультацию.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:assem.syrymbetova@narxoz.kz"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:assem.syrymbetova@narxoz.kz">Email</a>
        </div>
        <div>
        <a href="tel:+77002483780"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+77002483780">+7 (700) 248-37-80 </a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}