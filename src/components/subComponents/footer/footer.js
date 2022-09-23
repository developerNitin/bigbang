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
      <div className="page footer-wrap">
        <div className="footer-top">
          <div className="footer-about-us">
            <h1 className="h1">BIGBANG</h1>
            <p className="p">
              Bigbang is the world’s leading<br/> community for creatives to share,
              grow, and get hired.
            </p>
          </div>
          <div className="footer-link">
            {footerdata.map((i, idx) => (
              <div className="footer-link-wrap" key={idx}>
                <h1 className="h1">{i.title}</h1>
                {i.item.map((i) => (
                  <a className="a">{i}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="hr" />
        <div className="footer-bottom">
          <p className="p">BIGBANG</p>
          <p className="p">© 2022 BIGBANG. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
