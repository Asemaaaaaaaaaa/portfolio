import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>Мои проекты</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Asemaaaaaaaaaa/project7-optimized-image-gallery" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/Asemaaaaaaaaaa/project7-optimized-image-gallery" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Оптимизированная галерея фотографии</h3>
              <p> Разработал бессерверное приложение для голосования с использованием React, REST API и MySQL, позволяющее пользователям просматривать языки программирования и голосовать.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>MySQL</li> <li>REST API</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Asemaaaaaaaaaa/django.project-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://github.com/Asemaaaaaaaaaa/django.project-" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>E-commerce проект на Django</h3>
              <p>
        Разработал интерактивное приложение e-commerce с использованием OpenAI, позволяющее пользователям покупать разную одежду на выбор. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Asemaaaaaaaaaa/todolist" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/Asemaaaaaaaaaa/todolist" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ToDo List</h3>
              <p>
                Разработал высокоточную Todo List. В котором можно и нужно планировать свои задачи и ставить на него дедлайны. С использованием разным технологии: React, MongoDB, Libs              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>MongoDB</li>
                <li>Other Libs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}