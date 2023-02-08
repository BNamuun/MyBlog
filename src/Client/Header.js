import img from "../images/kira-auf-der-heide-8s1wfA6aB-4-unsplash.jpg";
import "./header.css";
export function Header() {
  //   const styles = {
  //     bagckGround: {
  //       backgroundImage: { img },
  //       height: "40vh",
  //     },
  //     inputText: {
  //       padding: "5% 0",
  //     },
  //   };

  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbarR">BLOG</div>
        <div>
          <ul className="navbarR">
            <li> Works</li>
            <li> Blog</li>
            <li> Registration</li>
            <li> Details</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
