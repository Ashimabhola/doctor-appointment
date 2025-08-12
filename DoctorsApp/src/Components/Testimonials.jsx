import React from "react";
import "../Styles/Testimonials.css";
import Person1 from "../image/Person1.png";
import Person2 from "../image/Person2.png";
import Person3 from "../image/Person3.png";
import Person4 from "../image/Person4.png";
import Person5 from "../image/Person5.png";
import Person6 from "../image/Person6.png";
import Person7 from "../image/Person7.png";
import Person8 from "../image/Person8.png";
import Person9 from "../image/Person9.png";

function Testimonials() {
  return (
    <div>
      <section className="testimonials">
        <h3>Why Patients Choose MediTrust</h3>
        <div className="testimonials-intro">
          <h4>Trusted by Thousands Across the Country</h4>
          <p>
            From booking appointments in seconds to receiving timely reminders
            and personalized care, MediTrust is transforming how patients
            experience healthcare. Here’s what real users have to say.
          </p>
        </div>

        <div className="testimonial-cards">
          {/* All testimonials go here */}
        </div>
        <div className="testimonial-cards">
          <div className="testimonial">
            <img src={Person1} alt="Anjali R." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>
              "I booked my appointment in under a minute. Seamless process!"
            </p>
            <span>- Anjali R.</span>
          </div>

          <div className="testimonial">
            <img src={Person2} alt="Nishaant T." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>"Very professional doctors and super helpful interface."</p>
            <span>- Nishant T.</span>
          </div>

          <div className="testimonial">
            <img src={Person3} alt="Ravi K." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>"I got quick access to specialists in my area. Time-saver!"</p>
            <span>- Ravi K.</span>
          </div>

          <div className="testimonial">
            <img src={Person4} alt="Mohit J." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"Excellent service and follow-ups. My family uses it too!"</p>
            <span>- Mohit J.</span>
          </div>

          <div className="testimonial">
            <img src={Person5} alt="Deepa S." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              "The reminders and updates are a blessing for forgetful people
              like me."
            </p>
            <span>- Deepa S.</span>
          </div>

          <div className="testimonial">
            <img src={Person6} alt="Khushi P." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"Loved the clean UI and the quick booking process."</p>
            <span>- Khushi P.</span>
          </div>

          <div className="testimonial">
            <img src={Person7} alt="Arjun V." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>"Saves me from long clinic queues. Totally worth it."</p>
            <span>- Arjun V.</span>
          </div>

          <div className="testimonial">
            <img src={Person8} alt="Megha N." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>"Great for elderly people who need easy access to doctors."</p>
            <span>- Megha N.</span>
          </div>

          <div className="testimonial">
            <img src={Person9} alt="Saurabh D." className="avatar" />
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>"A few UI bugs but overall very convenient and practical."</p>
            <span>- Saurabh D.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
