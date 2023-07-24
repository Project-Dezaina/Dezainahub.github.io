import React from "react";
import "./AboutFotu.css";
import about from "../Image/124.png";
import abt from "../Image/WatercolorUsNew.jpg";
// import about from "./Image/124.png";

const AboutFotu = () => {
    return (
        <div className="About-Fotu container" data-aos="fade-up">
          <div className="abt-img">
          <div className="AboutImgBackShadow"></div>
          <div className="Inner-Image">
          <img src={abt} alt="" /></div>
            {/* <img src={about} alt="" /> */}

            <div className="about-float-window">
              <div className="about-float-icon">
              <svg width="50" height="50" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9526 11.605C13.0386 11.9445 13.0349 12.3005 12.9419 12.6382C12.8489 12.9759 12.6698 13.2836 12.4222 13.5313C12.1745 13.7789 11.8668 13.958 11.5291 14.051C11.1915 14.144 10.8354 14.1476 10.4959 14.0617C9.7901 13.8875 9.21259 13.31 9.03843 12.6042C8.95246 12.2647 8.95615 11.9086 9.04912 11.571C9.1421 11.2333 9.32119 10.9256 9.56884 10.6779C9.81649 10.4303 10.1242 10.2512 10.4619 10.1582C10.7996 10.0652 11.1556 10.0615 11.4951 10.1475C12.2101 10.3217 12.7876 10.8992 12.9526 11.605Z" stroke="#4BACE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.509 6.24234C17.3144 6.99246 17.9563 7.90061 18.3948 8.91003C18.8332 9.91946 19.0588 11.0085 19.0574 12.109C19.0574 13.1671 18.849 14.2149 18.444 15.1925C18.0391 16.1701 17.4456 17.0583 16.6974 17.8065C15.9492 18.5547 15.0609 19.1482 14.0834 19.5532C13.1058 19.9581 12.058 20.1665 10.9999 20.1665C9.94176 20.1665 8.89399 19.9581 7.91641 19.5532C6.93883 19.1482 6.05058 18.5547 5.30237 17.8065C4.55416 17.0583 3.96065 16.1701 3.55572 15.1925C3.1508 14.2149 2.94238 13.1671 2.94238 12.109C2.94238 9.78067 3.93238 7.68151 5.51822 6.21484" stroke="#4BACE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.33361 8.66243C6.49027 9.56077 5.96777 10.7708 5.96777 12.1091C5.96777 14.8866 8.22277 17.1416 11.0003 17.1416C13.7778 17.1416 16.0328 14.8866 16.0328 12.1091C16.0328 10.7708 15.5103 9.56993 14.6669 8.66243M9.44194 6.72827L8.12194 5.08743C7.07694 3.7766 8.00277 1.84244 9.68027 1.84244H12.3111C13.9886 1.84244 14.9236 3.78577 13.8694 5.08743L12.5494 6.72827C11.7611 7.72744 10.2394 7.72744 9.44194 6.72827Z" stroke="#4BACE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <div className="about-float-window-content">
              <h5>Minesh H Patel</h5>
              <p>CTO, Web Developer</p>
                {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
              </div>
            </div>
            <div className="FloatWindowArrow1">
            <svg width="216" height="312" viewBox="0 0 216 312" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M215.5 310H42.3313L2 1" stroke="#2F455C" stroke-width="4" stroke-dasharray="5 5"/>
</svg>
            </div>
            <div className="FloatWindowArrow2">
            <svg width="196" height="159" viewBox="0 0 196 159" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 2H171.74L194 158" stroke="#2F455C" stroke-width="4" stroke-dasharray="5 5"/>
</svg>

            </div>
            <div className="About-Float-2">
              
              <div className="about-float-window-content2">
              
              <h5>Divyankit Singh</h5>
              <p>CEO, Web Developer</p>

              {/* <svg width="423" height="428" viewBox="0 0 423 428" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M423 423H115.27L5.00001 2.00001" stroke="#2F455C" stroke-width="10" stroke-dasharray="20 20"/>
</svg> */}


                {/* <p>Lorem Ipsum is simply dummy text of the printing</p> */}
              </div>
              <div className="about-float-icon2">
              <svg width="50" height="50" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9526 10.395C13.0386 10.0555 13.0349 9.69945 12.9419 9.36179C12.8489 9.02412 12.6698 8.7164 12.4222 8.46874C12.1745 8.22109 11.8668 8.04201 11.5291 7.94903C11.1915 7.85605 10.8354 7.85236 10.4959 7.93833C9.7901 8.1125 9.21259 8.69 9.03843 9.39583C8.95246 9.73535 8.95615 10.0914 9.04912 10.429C9.1421 10.7667 9.32119 11.0744 9.56884 11.3221C9.81649 11.5697 10.1242 11.7488 10.4619 11.8418C10.7996 11.9348 11.1556 11.9385 11.4951 11.8525C12.2101 11.6783 12.7876 11.1008 12.9526 10.395Z" stroke="#4BACE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.509 15.7577C17.3144 15.0075 17.9563 14.0994 18.3948 13.09C18.8332 12.0805 19.0588 10.9915 19.0574 9.891C19.0574 8.83287 18.849 7.78511 18.444 6.80752C18.0391 5.82994 17.4456 4.94169 16.6974 4.19348C15.9492 3.44527 15.0609 2.85176 14.0834 2.44684C13.1058 2.04191 12.058 1.8335 10.9999 1.8335C9.94176 1.8335 8.89399 2.04191 7.91641 2.44684C6.93883 2.85176 6.05058 3.44527 5.30237 4.19348C4.55416 4.94169 3.96065 5.82994 3.55572 6.80752C3.1508 7.78511 2.94238 8.83287 2.94238 9.891C2.94238 12.2193 3.93238 14.3185 5.51822 15.7852" stroke="#4BACE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.33361 13.3376C6.49027 12.4392 5.96777 11.2292 5.96777 9.8909C5.96777 7.1134 8.22277 4.8584 11.0003 4.8584C13.7778 4.8584 16.0328 7.1134 16.0328 9.8909C16.0328 11.2292 15.5103 12.4301 14.6669 13.3376M9.44194 15.2717L8.12194 16.9126C7.07694 18.2234 8.00277 20.1576 9.68027 20.1576H12.3111C13.9886 20.1576 14.9236 18.2142 13.8694 16.9126L12.5494 15.2717C11.7611 14.2726 10.2394 14.2726 9.44194 15.2717Z" stroke="#4BACE0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
            </div>
          </div>
        </div>
    )
}

export default AboutFotu;
