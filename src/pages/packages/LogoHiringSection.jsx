import React from "react";
import {
  FaClipboardList,
  FaLaptopCode,
  FaUserCheck,
  FaComments,
  FaDollarSign,
  FaStar,
} from "react-icons/fa";
import "./LogoHiringSection.css";

const LogoHiringSection = () => {
  const cards = [
    {
      number: "01",
      icon: <FaClipboardList />,
      title: "Define Your Needs",
      description:
        "Before you start looking for a logo design company, it is important to define your needs, budget, timeline, design preferences, and target audience.",
    },
    {
      number: "02",
      icon: <FaLaptopCode />,
      title: "Look at Portfolios",
      description:
        "Review different company portfolios to understand their creative style and work quality. Look for experience with businesses similar to yours.",
    },
    {
      number: "03",
      icon: <FaUserCheck />,
      title: "Check References",
      description:
        "Reach out to previous clients and learn about their experience. Check whether the company delivered quality work within the expected timeline.",
    },
    {
      number: "04",
      icon: <FaComments />,
      title: "Evaluate Communication",
      description:
        "A good logo design company should communicate clearly, understand your requirements, and remain responsive throughout the design process.",
    },
    {
      number: "05",
      icon: <FaDollarSign />,
      title: "Consider Pricing",
      description:
        "Understand the pricing structure before choosing a company. Make sure you know about all included services and any possible additional costs.",
    },
    {
      number: "06",
      icon: <FaStar />,
      title: "Read Reviews",
      description:
        "Client reviews and feedback can help you understand the company's reputation, work quality, communication, and overall reliability.",
    },
  ];

  return (
    <section className="logo-hiring-section">
      <div className="logo-hiring-bg-shape shape-one"></div>
      <div className="logo-hiring-bg-shape shape-two"></div>

      <div className="logo-hiring-wrapper">

        {/* Header */}
        <div className="logo-hiring-header">
          <div className="logo-hiring-title-area">
            <span className="logo-hiring-small-title">
              LOGO DESIGN PROCESS
            </span>

            <h2>
              How to Hire the Best{" "}
              <span>Logo Design Company</span>{" "}
              in India?
            </h2>
          </div>

          <div className="logo-hiring-description">
            <div className="description-border"></div>

            <p>
              Hiring the right logo design company requires research and
              careful consideration. These important steps will help you find
              the perfect creative partner for your brand and business.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="logo-hiring-cards">
          {cards.map((card, index) => (
            <div
              className="logo-hiring-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="logo-card-top">
                <div className="logo-card-icon">
                  {card.icon}
                </div>

                <span className="logo-card-number">
                  / {card.number}
                </span>
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <div className="logo-card-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoHiringSection;