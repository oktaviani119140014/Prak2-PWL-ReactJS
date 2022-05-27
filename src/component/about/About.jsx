import "./about.css"
import profil from "../../img/profil.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={profil}
          alt="" 
          className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am 20 years old. currently studying at the Sumatra institute of technology 
        with an informatics engineering study program. now I have reached the 6th semester 
        </p>
        <p className="a-desc">
        I like things related to user interface design but not experts in this field so I want to learn and explore it.
        I think, web programming is also interesting, but it is a little difficult to follow compared to the user interface design.
        </p>
      </div>
    </div>
  );
}

export default About;
