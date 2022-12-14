import { Link } from "react-router-dom";
import "./style/footer.css";

export default function Footer() {
  const footerdata = [
    {
      title: "Categories",
      item: [
        "Home",
        "Logo",
        "Illustration",
        "Web Dev",
        "Moble Dev",
        "Marketing",
      ],
    },
    {
      title: "About",
      item: ["About Us", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "Support",
      item: ["Help & Support", "Trust & Safety"],
    },
    {
      title: "about",
      item: ["Home", "Logo", "Illustration", "Web Dev"],
    },
    {
      title: "More",
      item: ["Home", "Logo", "Illustration", "Web Dev", "Moble Dev"],
    },
  ];
  return (
    <div className="footer">
      <hr className="hr" />
      <div className="footer-wrap">
        <div className="page footer-top">
          <div className="footer-link">
            <div className="footer-about-us">
              <h1 className="h1">BIGBANG</h1>
              <p className="p">
                Bigbang is the world’s leading community for creatives to share,
                grow, and get hired.
              </p>
            </div>
            {footerdata.map((i, idx) => (
              <div className="footer-link-wrap" key={idx}>
                <h1 className="h1">{i.title}</h1>
                {i.item.map((i, idx) => (
                  <Link to="" className="a" key={idx}>
                    {i}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="page footer-bottom">
          <hr className="hr" />
          <div>
            <p className="p">BIGBANG</p>
            <p className="p">© 2022 BIGBANG. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
