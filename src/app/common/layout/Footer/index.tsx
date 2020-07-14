import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { transitionWithDelay } from '../../utils/animations';
import {
  Container,
  About,
  Project,
  Contact,
  Icons,
} from './styles';

const Footer: React.FC = () => (
  <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ...transitionWithDelay, delay: 0.8 }}
  >
    <About>
      <Project>
        <h2>Post Motion</h2>
        <div>
          <span>
            a proof of concept using
          </span>
          <a href="https://www.framer.com/motion/">
            framer motion.
          </a>
        </div>
      </Project>
      <Contact>
        <div>Developed by Daniel Jorge</div>
        <Icons>
          <a href="https://www.linkedin.com/in/danieljpgo">
            <FiLinkedin />
          </a>
          <a href="https://github.com/danieljpgo">
            <FiGithub />
          </a>
        </Icons>
      </Contact>
    </About>
  </Container>
);

export default Footer;
