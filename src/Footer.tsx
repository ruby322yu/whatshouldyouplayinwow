import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react';

library.add(faGithubSquare, faLinkedin);

const Footer = () => {
    return (
            <div id="copyright" className="container">
                <p>A quiz based on a <a href="https://cdn.discordapp.com/attachments/186692637502210048/492273725081649162/41844760_2169193506493841_733507816324595712_n.png">flowchart</a> made originally by Hannah Jane</p>
                <ul className="contact">
                    <li><a href="https://github.com/ruby322yu/whatshouldyouplayinwow" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="lg" /></a></li>
                    <li><a href="https://www.linkedin.com/in/ruby24yu/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
                </ul>
            </div>
    )};

export default Footer;