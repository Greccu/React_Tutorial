import React from "react";
import Icon1 from "../../images/serv_img1.svg";
import Icon2 from "../../images/serv_img2.svg";
import Icon3 from "../../images/serv_img3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Computer Science</ServicesH2>
          <ServicesP>
            Master Python and learn the fundamentals of Computer Science, like
            data structures and algorithms.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            Master the languages of the web: HTML, CSS and JavaScript.This will
            prepare you to build websites and web apps.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Moblie App Development</ServicesH2>
          <ServicesP>
            Become a mobile app developer with proficiency in all aspects of
            mobile applications from design to building and publishing apps for
            iOS and Android.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
