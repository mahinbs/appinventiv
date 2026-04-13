import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../componets/website/Banner";
import {
  aiPortfolio,
  appPortfolio,
  blockchainPortfolio,
  gameDevelopmentPortfolio,
  webPortfolio,
} from "../../constant";

const categoryOptions = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "app", label: "App Development" },
  { key: "ai", label: "AI" },
  { key: "blockchain", label: "Blockchain" },
  { key: "game", label: "Game Development" },
];

const portfolioByCategory = {
  web: webPortfolio,
  app: appPortfolio,
  ai: aiPortfolio,
  blockchain: blockchainPortfolio,
  game: gameDevelopmentPortfolio,
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleItems = useMemo(() => {
    if (activeCategory === "all") {
      return [
        ...webPortfolio,
        ...appPortfolio,
        ...aiPortfolio,
        ...blockchainPortfolio,
        ...gameDevelopmentPortfolio,
      ];
    }
    return portfolioByCategory[activeCategory] || [];
  }, [activeCategory]);

  return (
    <>
      <Banner page="Portfolio" />
      <section className="wrapper py-[4rem] text-primarytextcolor">
        <div className="text-center">
          <div className="gradient-rounded-text-box mx-auto mb-4">Portfolio</div>
          <h2 className="heading-2">Explore Our Work by Category</h2>
          <p className="desc max-w-[44rem] mx-auto mt-4">
            Browse selected projects across web, app, AI, blockchain, and game
            development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categoryOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveCategory(option.key)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                activeCategory === option.key
                  ? "bg-primary text-white border-primary"
                  : "border-primary/40 text-primarytextcolor hover:border-primary"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {visibleItems.map((item) => {
            const CardContent = (
              <>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </>
            );

            return item.link ? (
              <Link
                key={`${activeCategory}-${item.id}`}
                to={item.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl overflow-hidden border border-primary/20 bg-white shadow-sm"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={`${activeCategory}-${item.id}`}
                className="group rounded-xl overflow-hidden border border-primary/20 bg-white shadow-sm"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
