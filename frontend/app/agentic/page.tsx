import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flows â€” The Leaders in Account-to-Account Payment Solutions",
  description: "Flows is unlocking the future of transactions with the next generation of real-time account-to-account and Direct Debit payment solutions.",
  metadataBase: new URL("https://FLOWS.xyz/"),
  alternates: {
    canonical: new URL("https://FLOWS.xyz/")
  },
  openGraph: {
    title: "The Leaders in Account-to-Account Payment Solutions",
    description: "Flows is unlocking the future of transactions with the next generation of real-time account-to-account and Direct Debit payment solutions.",
    url: "https://FLOWS.xyz/",
    siteName: "Flows",
    type: "website",
    images: [{
        url: "https://FLOWS.xyz/uploads/Page-Backgrounds-and-Banners/_1200x630_crop_center-center_82_none/zeppy.jpg?v=1785481564",
        width: 1200,
        height: 630
      }]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Leaders in Account-to-Account Payment Solutions",
    description: "Flows is unlocking the future of transactions with the next generation of real-time account-to-account and Direct Debit payment solutions.",
    images: ["https://FLOWS.xyz/uploads/Page-Backgrounds-and-Banners/_1200x630_crop_center-center_82_none/zeppy.jpg?v=1785481564"]
  },
};

import AgenticLoader from './components/AgenticLoader';
import AgenticDashboardWrapper from './components/AgenticDashboardWrapper';

export default function Page() {
  return (
    <>
      <AgenticLoader />
      <header data-scroll-section={""}>
    <div className={"head-content"}>
      <div className={"head-content-box container"}>
        <div className={"head-logo fixed top-6 left-6 z-50 mix-blend-difference"}>
          <a href={"/"}>
            {/* Logo removed */}
          </a>
        </div>
<div className={"head-menu"}></div>
        <div className={"btn-box"}>
          <div className={"hamburger"} title={"Menu"}>
            <span />
<span />
<span />
<span className={"close"}>
              {"Close"}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
      <main className={"wrapper"} data-scroll-section={""}>
    <section className={"hero-banner"}>
      <div className={"container"} data-pd-show={"controls @ background"} style={{
  minHeight: "105vh"
} as any}>
        <div className={"content is-show"}>
          <div className={"wowo fadeIn"}>
            <h1>
              {"Pioneering the "}
<span style={{
  color: "#00a382"
} as any}>
                {"payments future"}
              </span>
            </h1>
<p>
              {"Accelerate cash flow, streamline operations, and reimagine payment experiences with real-time payments."}
            </p>
<div className={"links"}>
              <a className={"btn bg-green-font-black"} href="/agents" style={{ fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {"ðŸ¤– AI Agent Society & Protocol Dashboard â†’"}
              </a>
<a className={"btn btn-border"} href="/app">
                {"dApp Workspace"}
              </a>
            </div>
            
            <div className="mt-12" style={{ position: "relative", zIndex: 10 }}>
              <AgenticDashboardWrapper />
            </div>

          </div>
<i id={"hero-content-bottom"} />

        </div>
      </div>
<div className={"image-switch is-show"} data-pd-show={"profile @ background"} data-pd-brightness={"-0.3"} data-pd-contrast={"-0.3"} style={{
  height: "100vh",
  padding: "1px"
} as any}>
        <div className={"img"} style={{
  width: "73.6%"
} as any}>
          <div className={"bg-img"}>
            <div className={"text"} style={{
  textShadow: "0 0 1em #0A1517"
} as any} id={"hero-text-1"}>
              <h2>
                {"Payments areÂ "}
<br />
<span style={{
  color: "rgb(2,215,178)"
} as any}>
                  {"changing"}
                </span>
              </h2>
<h3>
                {"Legacy systems are being replaced by revolutionary new technologies."}
              </h3>
            </div>
          </div>
        </div>
      </div>
<div className={"fp-auto-height"} />
<div className={"image-switch is-show"} data-pd-show={"back @ background"} data-pd-brightness={"-0.3"} data-pd-contrast={"-0.3"} style={{
  height: "100vh",
  padding: "1px"
} as any}>
        <div className={"img"} style={{
  width: "73.6%"
} as any}>
          <div className={"bg-img"}>
            <div className={"text"} style={{
  textShadow: "0 0 1em #0A1517"
} as any} id={"hero-text-2"}>
              <h2>
                {"Flow is leading"}
<br />
<span style={{
  color: "rgb(2,215,178)"
} as any}>
                  {"that mission"}
                </span>
              </h2>
<h3>
                {"Replacing outdated systems with real-time payment solutions."}
              </h3>
            </div>
          </div>
        </div>
      </div>
<div className={"fp-auto-height"} />
    </section>
<section className={"moving-money-forward is-home"} data-pd-show={"float @ background"} data-pd-x-focal-point={"-0.2"} style={{
  paddingTop: "0"
} as any}>
      <div className={"container fadeInUp"}>
        <div className={"content-item"}>
          <div className={"title-item"}>
            <p>
              {"Flow solutions enable real-time collections and refunds, loan disbursements and repayments, superannuation contributions, funding of digital wallets, and endless other scenarios."}
            </p>
<h2>
              {"MOVING MONEY "}
<span style={{
  color: "#00a382"
} as any}>
                {"FORWARD"}
              </span>
            </h2>
<a className={"btn"} href="#!">
              {"\t\tExplore solutions\n\t\t"}
            </a>
          </div>
<div className={"boxed-item"}>
            <a href="#!" target={"_self"} className={"box"}>
              <div className={"icon-arrow-icon"} />
<span>
                {"01"}
              </span>
<h3>
                {"COLLECT IN REAL TIME"}
              </h3>
<p>
                {"PayToÂ® is a modern way for businesses to collect payments from their customersâ€™ bank accounts and have them settle in real time, all the timeâ€”like an always-on, instant direct debit."}
              </p>
            </a>
<a href="#!" target={"_self"} className={"box"}>
              <div className={"icon-arrow-icon"} />
<span>
                {"02"}
              </span>
<h3>
                {"RECEIVE IN REAL TIME"}
              </h3>
<p>
                {"Flowâ€™s flagship instant-funds transfer solution supercharges millions of transactions each day with the unique, industry-first capability to activate thousands of PayIDs instantaneously."}
              </p>
            </a>
<a href="#!" target={"_self"} className={"box"}>
              <div className={"icon-arrow-icon"} />
<span>
                {"03"}
              </span>
<h3>
                {"PAYOUT IN REAL TIME"}
              </h3>
<p>
                {"Payments on the New Payments Platform [NPP] can deliver your customers a seamless, real-time digital payments experience. With Flow's clever API, you can disburse and receive funds in real time on the NPP."}
              </p>
            </a>
<a href="#!" target={"_self"} className={"box"}>
              <div className={"icon-arrow-icon"} />
<span>
                {"04"}
              </span>
<h3>
                {"VERIFY IN REAL TIME"}
              </h3>
<p>
                {"Flow Validate is an intelligent name-matching service that, when adopted, works behind the scenes to provide an additional robust layer of protection to your account-to-account payments."}
              </p>
            </a>
<a href="#!" target={"_self"} className={"box"}>
              <div className={"icon-arrow-icon"} />
<span>
                {"05"}
              </span>
<h3>
                {"Direct Debit"}
              </h3>
<p>
                {"Say goodbye to paper forms and manual handling. By hitting every exchange point with Flow's API-powered, data-rich enterprise direct debit solution, you can reduce dishonours, and maximise one-off and recurring payment success."}
              </p>
            </a>
<a href="#!" target={"_self"} className={"box"}>
              <div className={"icon-arrow-icon"} />
<span>
                {"06"}
              </span>
<h3>
                {"Stored Value Solutions"}
              </h3>
<p>
                {"Store funds indefinitely. Move them flexibly. Transforming your customer experience and business operations is about more than just speed of payment. Fast is great â€” sure â€” but precision, security and flexibility is where the rubber really hits the road."}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>


<section  className={"text-and-image-style-2 overlay is-home"} data-pd-show={"float-beams @ background"}>
      <div className={"container fadeInUp"}>
        <div className={"item heading-small"}>
          <div className={"text"}>
            <div className={"text-box"}>
              <div className={"number-and-cat"}>
                <span className={"step"}>
                  {"01"}
                </span>
<span className={"cat-item"}>
                  {"Unlimited Innovation"}
                </span>
              </div>
<h2>
                {"Future ready "}
<span style={{
  color: "#00a382"
} as any}>
                  {"Now"}
                </span>
              </h2>
<p>
                {"Create customised, real-time account-to-account payment flows on a secure, scalable, future-proofed platform, and engage with your customers in new ways."}
              </p>
<a className={"btn"} href="#!">
                {"\t\tAccount-to-Account Payments\n\t\t"}
              </a>
            </div>
          </div>
<div className={"image"}>
            <div className={"img"}>
              <img loading="lazy" src={"/imager/assetcontent/Zeppy-and-Space-Motifs/4194/themiddle_8763c778618a032809a3dcddd2b0ad83.png"} srcSet={"/imager/assetcontent/Zeppy-and-Space-Motifs/4194/themiddle_8763c778618a032809a3dcddd2b0ad83.png 626w, /imager/assetcontent/Zeppy-and-Space-Motifs/4194/themiddle_4c9afda2f53ab6d742b51c4eebbd0b81.png 939w, /imager/assetcontent/Zeppy-and-Space-Motifs/4194/themiddle_d0835fbc8326cb4497a0f83b46d32fb0.png 1252w"} {...{
  alt: ""
} as any} />
            </div>
          </div>
        </div>
<div className={"item heading-small reversal"}>
          <div className={"text"}>
            <div className={"text-box"}>
              <div className={"number-and-cat"}>
                <span className={"step"}>
                  {"02"}
                </span>
<span className={"cat-item"}>
                  {"Unlimited flexibility"}
                </span>
              </div>
<h2>
                {"Developer experience is "}
<span style={{
  color: "#00a382"
} as any}>
                  {"everything"}
                </span>
              </h2>
<p>
                {"Flow's elegant, simple-to-use API is engineered for great developer experience and ease of integration."}
              </p>
<a className={"btn"} href="#!">
                {"\t\tPlay in Our Sandbox\n\t\t"}
              </a>
            </div>
          </div>
<div className={"image"}>
            <div className={"img"}>
              <img loading="lazy" src={"/imager/assetcontent/12205/home-developer-experience_8763c778618a032809a3dcddd2b0ad83.png"} srcSet={"/imager/assetcontent/12205/home-developer-experience_8763c778618a032809a3dcddd2b0ad83.png 626w, /imager/assetcontent/12205/home-developer-experience_4c9afda2f53ab6d742b51c4eebbd0b81.png 939w, /imager/assetcontent/12205/home-developer-experience_d0835fbc8326cb4497a0f83b46d32fb0.png 1252w"} {...{
  alt: ""
} as any} />
            </div>
          </div>
        </div>
      </div>
    </section>
<section className={"news-carousel"}>
      <div className={"boxed"}>
        <div className={"container wowo fadeInUp"}>
          <div className={"heading"}>
            <h2>
              {"Latest"}
            </h2>
<a className={"btn btn-arrow-not-bg"} href="#!">
              {"\t\tKnowledge Base\n\t\t"}
            </a>
          </div>
<div className={"title-box"}>
            <div className={"slider-block"}>
              <div className={"box"}>
                <div className={"title"}>
                  <h2 className={"active"}>
                    {"\n\t\t\t\t\t\t\t\t\tCase Studies \n\t\t\t\t\t\t\t\t"}
                  </h2>
<h2 className={""}>
                    {"\n\t\t\t\t\t\t\t\t\tInsights \n\t\t\t\t\t\t\t\t"}
                  </h2>
<h2 className={""}>
                    {"\n\t\t\t\t\t\t\t\t\tDownloads \n\t\t\t\t\t\t\t\t"}
                  </h2>
<h2 className={""}>
                    {"\n\t\t\t\t\t\t\t\t\tWebinars \n\t\t\t\t\t\t\t\t"}
                  </h2>
                </div>
<div className={"links"}>
                  <div className={"prev-and-next"}>
                    <a href={"#"} className={"no-drop prev"} />
<a href={"#"} className={"next"} />
                  </div>
<div className={"number"}>
                    <span>
                      <span className={"active"}>
                        {"1"}
                      </span>
{"â€“"}
<span className={"count"}>
                        {"4"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className={"content"}>
            <div className={"news-carousel-slider active"}>
              <div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/20502/Flow-KenoGO-Blog-tile_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/20502/Flow-KenoGO-Blog-tile_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/20502/Flow-KenoGO-Blog-tile_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/20502/Flow-KenoGO-Blog-tile_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Why KenoGO Bet Big on Real-Time Payouts"}
                      </h2>
<p>
                        {"In the hyper-competitive landscape of Australian digital entertainment, the â€˜winâ€™ is only the first half of the customer journey. The second half â€” and arguably the most critical for long-termâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Flow News, Culture & Awards"}
                    </span>
<span className={"cat-item"}>
                      {"Customers & Use Cases"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/19317/EH-Ozedi-Blog-tile_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/19317/EH-Ozedi-Blog-tile_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/19317/EH-Ozedi-Blog-tile_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/19317/EH-Ozedi-Blog-tile_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Payday Super: Partnering with Employment Hero and OZEDI"}
                      </h2>
<p>
                        {"With the Payday Superannuation Bill clearing the House of Reps, businesses are one step closer to a landmark change in how super is paid, and three Australian technology leaders have mobilised atâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Flow News, Culture & Awards"}
                    </span>
<span className={"cat-item"}>
                      {"PayTo"}
                    </span>
<span className={"cat-item"}>
                      {"Payments"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/18569/Flow-x-Spaceship-post-tile-stacked_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/18569/Flow-x-Spaceship-post-tile-stacked_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/18569/Flow-x-Spaceship-post-tile-stacked_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/18569/Flow-x-Spaceship-post-tile-stacked_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Spaceship Selects Flow for PayTo"}
                      </h2>
<p>
                        {"PayTo powers real-time, pay-by-bank funds transfers and greater visibility and control for customers.Spaceship, the digital investment platform helping Australians invest in their future, hasâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"PayTo"}
                    </span>
<span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Customers & Use Cases"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Page-Backgrounds-and-Banners/17980/Superhero-post-tile-stacked-1_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Page-Backgrounds-and-Banners/17980/Superhero-post-tile-stacked-1_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Page-Backgrounds-and-Banners/17980/Superhero-post-tile-stacked-1_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Page-Backgrounds-and-Banners/17980/Superhero-post-tile-stacked-1_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Investing with Speed & Precision: Superhero's Next-Gen Payments"}
                      </h2>
<p>
                        {"Superhero's mission is to empower individuals to build wealth simply and affordably. So its customer payment experience is everything.In the dynamic world of online investing, speed, reliability, andâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"PayTo"}
                    </span>
<span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Customers & Use Cases"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
            </div>
<div className={"news-carousel-slider "}>
              <div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/22195/Suzie-Blog-tile_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/22195/Suzie-Blog-tile_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/22195/Suzie-Blog-tile_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/22195/Suzie-Blog-tile_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Big ideas, bold predictions and plenty to talk about: Reflections from Stripe Tour Sydney"}
                      </h2>
<p>
                        {"Members of the Flow team and I joined more than 2,000 people at Stripe Tour Sydney 2026 for a packed day of big ideas, product inspiration and conversations about whatâ€™s coming next in technology,â€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Flow News, Culture & Awards"}
                    </span>
<span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Pay-by-bank"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/22157/Emily-GREEN-2_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/22157/Emily-GREEN-2_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/22157/Emily-GREEN-2_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/22157/Emily-GREEN-2_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Emily Curlewis appointed General Manager, Commercial"}
                      </h2>
<p>
                        {"Emily Curlewis has been appointed General Manager, Commercial, expanding her remit after more than four years at Flow.In her new role, Canberra-based Emily will lead Flow's Commercial functionâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Flow News, Culture & Awards"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/21738/Mariana-GREEN-V4_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/21738/Mariana-GREEN-V4_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/21738/Mariana-GREEN-V4_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/21738/Mariana-GREEN-V4_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Business Resilience Lessons from CISO Melbourne 2026"}
                      </h2>
<p>
                        {"Business Resilience Lessons from CISO Melbourne 2026I attended CISO Melbourne this month, and I was invited to be part of two sessions.Â One had me on a panel talking about the tension betweenâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Executive Wisdom"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/21679/Jeweller-GREEN-2_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/21679/Jeweller-GREEN-2_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/21679/Jeweller-GREEN-2_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/21679/Jeweller-GREEN-2_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"The A2A Roundtable Vision Is Clear"}
                      </h2>
<p>
                        {"Now Australia Has to Modernise the Account-to-Account System It Already Runs On, posits Chris JewellAustralia's payments system has reached an important moment.With the release of the final visionâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Executive Wisdom"}
                    </span>
<span className={"cat-item"}>
                      {"BECS Direct Entry"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
            </div>
<div className={"news-carousel-slider "}>
              <div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/18381/AP-white-paper-2025-download-thumbnail-1_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/18381/AP-white-paper-2025-download-thumbnail-1_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/18381/AP-white-paper-2025-download-thumbnail-1_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/18381/AP-white-paper-2025-download-thumbnail-1_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"AP+ Whitepaper: Unlocking business opportunities with real-time payments"}
                      </h2>
<p>
                        {"A white paper by Australian Payments Plus.If you're looking for a useful, accessible resource to inform your journey towards business payment modernisation, we encourage you to download theâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"PayTo"}
                    </span>
<span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"New Payments Platform"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/6764/Stored-value-Tile-for-new-website_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/6764/Stored-value-Tile-for-new-website_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/6764/Stored-value-Tile-for-new-website_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/6764/Stored-value-Tile-for-new-website_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Download: Stored Value One-Pager"}
                      </h2>
<p>
                        {"Store funds indefinitely. Move them flexibly.Â Transforming your customer experience and business operations is about more than just speed of payment.Â Fast is great â€” sure â€” but precision, securityâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/16703/Flow-one-pager-download-thumbnail_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/16703/Flow-one-pager-download-thumbnail_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/16703/Flow-one-pager-download-thumbnail_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/16703/Flow-one-pager-download-thumbnail_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Download: Flow One-Pager"}
                      </h2>
<p>
                        {"Real-time account-to-account [A2A] payment solutions for large enterprises.Â Flow's real-time payments and rich data strategically enable businesses to create seamless payment flows.Â Flow createsâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Pay-by-bank"}
                    </span>
<span className={"cat-item"}>
                      {"New Payments Platform"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/6746/PayTo-Tile-for-new-website_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/6746/PayTo-Tile-for-new-website_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/6746/PayTo-Tile-for-new-website_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/6746/PayTo-Tile-for-new-website_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Download: PayTo One-Pager"}
                      </h2>
<p>
                        {"PayToÂ® is a modern way for businesses to collect payments from their customersâ€™ bank accounts and have them settle in real time, all the timeâ€”like an always-on, instant direct debit.Â PayToÂ® deliversâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"PayTo"}
                    </span>
<span className={"cat-item"}>
                      {"New Payments Platform"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
            </div>
<div className={"news-carousel-slider "}>
              <div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/19766/RTP-Kim-Yan-Webinar-Blog-tile-OCT25_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/19766/RTP-Kim-Yan-Webinar-Blog-tile-OCT25_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/19766/RTP-Kim-Yan-Webinar-Blog-tile-OCT25_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/19766/RTP-Kim-Yan-Webinar-Blog-tile-OCT25_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Payouts: A Real-Time Winner"}
                      </h2>
<p>
                        {"In a Flow Connect webinar, Relationship ManagerÂ Kim Yan shone a light on merchants who are using real-time payouts to deliver great payment experiences. Hereâ€™s what went down.Real-time payouts are aâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Customers & Use Cases"}
                    </span>
<span className={"cat-item"}>
                      {"New Payments Platform"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/6794/Flow-Connect-Tile-for-new-website_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/6794/Flow-Connect-Tile-for-new-website_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/6794/Flow-Connect-Tile-for-new-website_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/6794/Flow-Connect-Tile-for-new-website_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Flow CONNECT RECAP: Cash Flow Conundrums of RTP & Payday Super"}
                      </h2>
<p>
                        {"In March 2024, Flow's Head of Sales & Relationships, Suzie Slingsby, moderated a Flow Connect webinar entitled 'Exploring Real-Time Payments For Payroll & Super'. The conversation coveredâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"New Payments Platform"}
                    </span>
<span className={"cat-item"}>
                      {"Customers & Use Cases"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/6797/Flow-Connect-Tile-for-new-website_2024-10-11-051257_ulba_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/6797/Flow-Connect-Tile-for-new-website_2024-10-11-051257_ulba_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/6797/Flow-Connect-Tile-for-new-website_2024-10-11-051257_ulba_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/6797/Flow-Connect-Tile-for-new-website_2024-10-11-051257_ulba_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Flow Connect Recap: Global Payments Trends"}
                      </h2>
<p>
                        {"After hosting seven virtual fireside chats since May, the inaugural season of Flow Connect events has wound up. In this article we review the final session in the series, and our most ambitious oneâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"Customers & Use Cases"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
<div className={"slider-block"}>
                <a href="#!" className={"box"}>
                  <div className={"img-and-text"}>
                    <div className={"img"}>
                      <img loading="lazy" src={"/imager/assetcontent/Blog-Thumbnail-Images/6801/Flow-Connect-Tile-for-new-website_2024-11-14-073236_pvhi_6d96468a19aa5d9f19fe51d435cd3e4d.png"} srcSet={"/imager/assetcontent/Blog-Thumbnail-Images/6801/Flow-Connect-Tile-for-new-website_2024-11-14-073236_pvhi_6d96468a19aa5d9f19fe51d435cd3e4d.png 164w, /imager/assetcontent/Blog-Thumbnail-Images/6801/Flow-Connect-Tile-for-new-website_2024-11-14-073236_pvhi_0e3b139665eb441cd77d06b97c7bdc54.png 246w, /imager/assetcontent/Blog-Thumbnail-Images/6801/Flow-Connect-Tile-for-new-website_2024-11-14-073236_pvhi_11cbda6f49c579a7577b126c1f824ca1.png 292w"} {...{
  alt: ""
} as any} />
                    </div>
<div className={"text-box"}>
                      <h2>
                        {"Flow Connect Recap: A Technical Tinker with PayTo"}
                      </h2>
<p>
                        {"On 07 September 2023, we hosted our 5th Flow Connect webinar. It took attendees under the PayTo hood, and answered some technical questions about this exciting real-time payment method. Here's whatâ€¦"}
                      </p>
                    </div>
                  </div>
<div className={"cat-box"}>
                    <span className={"cat-item"}>
                      {"PayTo"}
                    </span>
<span className={"cat-item"}>
                      {"Payments"}
                    </span>
<span className={"cat-item"}>
                      {"New Payments Platform"}
                    </span>
                  </div>
<span className={"arrow-link"}>
                    <span />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
      <div className={"scroll-prompt hide"} id={"scroll-prompt"}>
    <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} xmlns={"http://www.w3.org/2000/svg"} fillRule={"evenodd"} clipRule={"evenodd"} strokeLinecap={"round"} strokeLinejoin={"round"}>
      <path d={"M10 4.167v11.666m0 0L15.833 10M10 15.833L4.166 10"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} />
    </svg>
  </div>
      <footer>
    <div className={"foot"}>
      <div className={"container"}>
        <div className={"img-and-link"}>
          <div className={"img"}>
            <img loading="lazy" src={"/imager/assetcontent/Zeppy-and-Space-Motifs/31/footer-img_44eedc446024093b09456a2bc5a39490.jpg"} srcSet={"/imager/assetcontent/Zeppy-and-Space-Motifs/31/footer-img_44eedc446024093b09456a2bc5a39490.jpg 200w, /imager/assetcontent/Zeppy-and-Space-Motifs/31/footer-img_903dc00eb92e257c0e38f4b73f4ded17.jpg 300w, /imager/assetcontent/Zeppy-and-Space-Motifs/31/footer-img_279fe149ddb31e44628178363377bdf2.jpg 400w"} {...{
  alt: ""
} as any} />
          </div>
        </div>
<div className={"box-and-menus"}>
          <div className={"menus"}>
            <ul className={"menu"}></ul>
          </div>
        </div>

<div className={"bottom-text"}>
          <div className={"box-text"}>
            <p>
              {"FLOWS is a decentralized, generalized token streaming protocol built natively on the Vara Network. We empower DAOs, protocols, and individuals with per-second programmable cashflows."}
            </p>
          </div>
<div className={"box"}>
            <div className={"text-and-link"}>
              <div className={"text"}>
                <p>
                  {"Â© 2026 FLOWS. Built with â¤ï¸ on Vara Network. Decentralized and Open Source."}
                </p>
              </div>
<div className={"links"}>
                <a href="#!">
                  {"Terms & Conditions"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
      <div className={"form-modal"} id={"form_popup"}>
    <div className={"form-modal-content"}>
      <button className={"form-close-button"}>
        {"\n\t\t\t\t\tx\n\t\t\t\t"}
      </button>
<div data-tf-live={"01J8P7YPKPKS8WY4D142AQASD2"} />
    </div>
  </div>
      <div className={"form-modal"} id={"form_popup_paytoindex"}>
    <div className={"form-modal-content"}>
      <button className={"form-close-button"}>
        {"\n\t\t\t\t\tx\n\t\t\t\t"}
      </button>
<div data-tf-live={"01JYGA498FMQGMWVV1D4E30TE5"} />
    </div>
  </div>
      <link rel={"stylesheet"} href={"/assets/css/plinth-digital.css"} />

    </>
  );
}

