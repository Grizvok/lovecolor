import React from "react";
import Link from "next/link";

export default () => (
  <section className="hero is-large is-white">
    <div className="hero-head">
      <h1 className="quotetext has-text-centered">
        <hr className="has-text-centered custombreak" />
        What people are saying...
      </h1>
      <div className="columns is-centered is-gapless">
        <div className="column is-3">
          <h1 className="customquotes quotemark has-text-centered has-text-grey-light">
            “
          </h1>
          <h2 className="reviewerquote has-text-centered">
            I’ve been looking for a new salon
            <br />
            for a long time. I finally made
            <br />
            an appointment with Amy and today
            <br />
            she turned my lifeless long hair
            <br />
            into a short summer style!
            <br />
            She listened to what I wanted
            <br />
            and came through! Love it!
            <br />
          </h2>
          <h1 className="reviewername has-text-centered">Heather</h1>
        </div>
        <div className="column is-3">
          <p className="customquotes has-text-centered has-text-grey-light">
            “
          </p>
          <h2 className="reviewerquote has-text-centered">
            I had my hair cut and colored
            <br />
            by Amy last week and once again <br />
            she did a phenomenal job! I told <br />
            her what I wanted to achieve and <br />
            she made it happen and even <br />
            look better that what I had <br />
            envisioned for my skin tone. <br />
            She has the SKILLS!!! Her salon
            <br />
            is the perfect combination of <br />
            modern and welcoming that
            <br />
            makes you feel right at home. <br />
            Can’t wait to visit them again.
            <br />
          </h2>
          <h1 className="reviewername has-text-centered">Amy Jo</h1>
        </div>
        <div className="column is-3">
          <p className="customquotes has-text-centered has-text-grey-light">
            “
          </p>
          <h2 className="reviewerquote has-text-centered">
            I have been looking for a <br /> 
            new hair stylist for years.<br /> 
            Amy cut my hair for the first time <br /> 
            on Saturday and I’ve officially <br />
            found my girl!!!!
          </h2>
          <h1 className="reviewername has-text-centered">Krista</h1>
        </div>
      </div>
      <p id="contact" className="reviewlinktext has-text-centered">
        See more testimonials{" "}
        <Link href="https://www.facebook.com/pg/LoveColorSalon/reviews/">
          <a>
            <u>
              <b>here</b>
            </u>
          </a>
        </Link>
      </p>
    </div>
  </section>
);

//1 Amy Jo
//2 Heather
//3 Erin

{
  /* <h2 className="reviewerquote has-text-centered">
I’ve been looking for a new salon
<br />
for a long time. I finally made
<br />
an appointment with Amy and today
<br />
she turned my lifeless long hair
<br />
into a short summer style!
<br />
She listened to what I wanted
<br />
and came through! Love it!
<br />
</h2> */
}
