import React from "react";
import { CssTextField, Doc } from "../Styles/Ask_Doc_style";
import { Ask_Doc_Slider1 } from "./Ask_Doc_Slider1";
import { Ask_Doc_slider2 } from "./Ask_Doc_slider2";
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";

export const Ask_Doctor = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handlechange = () => {
    setIsVisible(false);
  };

  const handleblur = (e) => {
    if (e.target.value == "") {
      setIsVisible(true);
    }
  };

  return (
    <Doc>
      {/* <!-- Mindiv --> */}
      <div id="mindiv1st">
        {/* <!-- 1st div --> */}
        <div id="first_div">
          <div className="Consultdoc">
            Consult with Doctors across 22+ Specialities, <br />
            over
            <span>Chat, Video &amp; Voice calls.</span>
          </div>
          <div className="subheading" style={{ paddingTop: "16px" }}>
            Skip the struggle of booking appointments.
          </div>
          <div className="subheading" style={{ marginBottom: "30px" }}>
            Consult a doctor at your ease
          </div>
          <TextField
            id="standard-basic"
            label="Type your query"
            variant="standard"
            onFocus={handlechange}
            onBlur={handleblur}
          />
          <div className="Type_Writer_div">
            {isVisible ? (
              <>
                <span style={{ marginRight: "5px" }}>I have</span>
                <Typewriter
                  options={{
                    strings: [" fever", " stomach ache", " skin problem"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </>
            ) : null}
          </div>

          <div className="buttondiv">
            <button className="allbutton">
              <span className="LandingPage__button-text___2E8rY">
                CONSULT NOW
              </span>
            </button>
          </div>
          <div className="style__container___dzpCS">
            <a href="https://www.1mg.com/subscription-plan/subscriptions?referer=my_consultation_page&amp;dcpFlowSource=doctor-landing-page">
              <div className="add">
                <img
                  alt="doctor-landing-care-plan-img"
                  src="https://onemg.gumlet.io/image/upload/v1625554511/mqz0j8blegoylexsvtsl.png"
                  className="free_consultation_add"
                />
              </div>
            </a>
          </div>
        </div>

        {/* <!-- 2nd div --> */}
        <div className="second_div" style={{ visibility: "visible" }}>
          <video
            autoPlay
            loop
            style={{ width: "85%", height: "100%" }}
            // preload="true"
            muted
            poster="https://www.1mg.com/images/econsultposter.jpg"
            // src="https://res.cloudinary.com/du8msdgbj/video/upload/v1560927917/eConsult-final_ro63yx.webm"
          >
            <source
              type="video/webm"
              src="https://res.cloudinary.com/du8msdgbj/video/upload/v1560927917/eConsult-final_ro63yx.webm"
            />
            <img src="https://www.1mg.com/images/econsultposter.jpg" />
          </video>
        </div>
      </div>
      {/* <!-- ------------- --> */}

      <Ask_Doc_Slider1 />

      {/* <!-- Steps div --> */}
      <div className="step_main_div">
        {/* <!-- heading --> */}
        <div className="steps_heading_div">
          <h1 className="steps_heading">
            How Online Doctor Consultation Works?
          </h1>
        </div>

        {/* <!-- 1st step --> */}
        <div className="steps" style={{ flexDirection: "row" }}>
          <div className="innerdiv_step" style={{ textAlign: "left" }}>
            <img
              src="https://www.1mg.com/images/How_it_Works_1.svg"
              alt="Consult Doctor on Chat"
              className="inner_img"
            />
          </div>
          <div className="inner_2nd_div_step">
            <div className="step_num">01</div>
            <div className="step_dis">
              <div className="step_name">Start a session</div>
              <div className="step_about">
                Select the type of category you would like to consult with the
                doctor.
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 2nd step --> */}
        <div className="steps" style={{ flexDirection: "row-reverse" }}>
          <div className="inner_2nd_div_step">
            <div className="step_num">02</div>
            <div className="step_dis">
              <div className="step_name">Tell us what’s troubling you</div>
              <div className="step_about">
                Type in your concern and attach prescription, lab reports if
                any. Help doctor understand your case better.
              </div>
            </div>
          </div>
          <div className="innerdiv_step" style={{ textAlign: "right" }}>
            <img
              src="https://www.1mg.com/images/How_it_Works_2.svg"
              alt="Ask a Problem with Doctor"
              className="inner_img"
            />
          </div>
        </div>

        {/* <!-- 3rd step --> */}
        <div className="steps" style={{ flexDirection: "row" }}>
          <div className="innerdiv_step" style={{ textAlign: "left" }}>
            <img
              src="https://www.1mg.com/images/How_it_works_3.svg"
              alt="Consult doctor in India"
              className="inner_img"
            />
          </div>
          <div className="inner_2nd_div_step">
            <div className="step_num">03</div>
            <div className="step_dis">
              <div className="step_name">Connect with the doctor</div>
              <div className="step_about">
                A doctor is auto-assigned to you that best matches your concern.
                You will get a diagnosis and treatment for your condition.
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 4th step --> */}
        <div className="steps" style={{ flexDirection: "row-reverse" }}>
          <div className="inner_2nd_div_step">
            <div className="step_num">04</div>
            <div className="step_dis">
              <div className="step_name">Follow up with your doctor</div>
              <div className="step_about">
                Still, need more clarity? You can follow up with the doctor even
                after your chat window closes.
              </div>
            </div>
          </div>
          <div className="innerdiv_step" style={{ textAlign: "right" }}>
            <img
              src="https://www.1mg.com/images/How_it_Works_4.svg"
              alt="Follow doctor online"
              className="inner_img"
            />
          </div>
        </div>
      </div>
      {/* <!-- --------- --> */}

      {/* <!-- countdis --> */}
      <div className="count_sliding_dis">
        {/* <!-- count --> */}
        <div className="Consultations_count">
          <div className="count_dis">
            <div className="nums">30L+</div>
            <div className="Consultations_names">Total Consultations</div>
          </div>
          <div className="count_dis">
            <div className="nums">3k+</div>
            <div className="Consultations_names">Daily Consultations</div>
          </div>
          <div>
            <div className="nums">22+</div>
            <div className="Consultations_names">Specialities</div>
          </div>
        </div>

        <Ask_Doc_slider2 />
      </div>
      {/* <!-- -------- --> */}

      {/* <!-- quotes --> */}
      <div className="quotes">
        <div className="innerdiv_quotes">
          <div className="quotes_img">
            <img
              src="https://www.1mg.com/images/confidential.svg"
              alt="100% confidential discussion"
            />
          </div>
          <div className="inner_quotes">100% Confidential</div>
          <div className="quotes_dis">
            All advice &amp; consultations are completely confidential. You can
            also delete chats whenever you want.
          </div>
        </div>
        <div className="innerdiv_quotes">
          <div className="quotes_img">
            <img
              src="https://www.1mg.com/images/certified.svg"
              alt="Certified doctors consultation"
            />
          </div>
          <div className="inner_quotes">Certified Doctors</div>
          <div className="quotes_dis">
            We offer quality healthcare through our network of certified and
            experienced doctors.
          </div>
        </div>
        <div className="innerdiv_quotes">
          <div className="quotes_img">
            <img
              src="https://www.1mg.com/images/convenience.svg"
              alt="Seek expert opinion anytime, anywhere"
            />
          </div>
          <div className="inner_quotes">Convenience</div>
          <div className="quotes_dis">
            Forget the hassle of long queues and rush hour. Seek expert opinion
            anytime, anywhere.
          </div>
        </div>
        <div className="innerdiv_quotes">
          <div className="quotes_img">
            <img
              src="https://www.1mg.com/images/costEffective.svg"
              alt="Affordable, cost effective, and economical"
            />
          </div>
          <div className="inner_quotes">Cost Effective</div>
          <div className="quotes_dis">
            We provide medical assistance on non urgent queries for free. Fee
            starting at ₹50 for faster response to queries.
          </div>
        </div>
      </div>
      {/* <!-- ------- --> */}

      {/* <!-- FAQ --> */}
      <div className="FAQ_div">
        <div className="FAQ_div_heading">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="FAQ_1st_div">
          <div className="FAQ_QandA_div" style={{ borderTop: "none" }}>
            <div className="FAQ_question">
              <div>
                When will I get an answer to my query? What happens if I don’t
                get a response?
              </div>
            </div>
            <div className="FAQ_answer">
              If you opt for a free consult, then we make sure the doctor
              replies within 24 to 48 hours. In case of a paid consult, you will
              receive a reply within 2-4 business hours. However, if you do not
              get any response within the stipulated time, we will refund your
              money back into your account.
            </div>
          </div>
          <div
            className="FAQ_QandA_div"
            style={{ borderTop: "1px solid #dbdadb" }}
          >
            <div className="FAQ_question">
              <div>Who are the consulting doctors?</div>
            </div>
            <div className="FAQ_answer">
              All the doctors are registered medical practitioners. Along with
              qualifying degrees - experience, research and track-record of
              practice are taken into account before a doctor is credentialed
              with Tata 1mg and is given access to answer patient queries.
            </div>
          </div>
          <div
            className="FAQ_QandA_div"
            style={{ borderTop: "1px solid #dbdadb" }}
          >
            <div className="FAQ_question">
              <div>Will the doctor be able to resolve my issue?</div>
            </div>
            <div className="FAQ_answer">
              Our doctors will give you expert advice on your problem and help
              you identify next steps which may include further tests, medicine
              recommendation or lifestyle tips. Few cases require face-to-face
              examination and we do ask patients to share pictures or reports if
              they can, for a conclusive diagnosis.
            </div>
          </div>
          <div
            className="FAQ_QandA_div"
            style={{ borderTop: "1px solid #dbdadb" }}
          >
            <div className="FAQ_question">
              <div>Is my consultation private with my doctor?</div>
            </div>
            <div className="FAQ_answer">
              Privacy of data is one of the fundamental human rights and we at
              Tata 1mg understand that. All your medical history and online
              consultation with us are completely private and confidential. We
              are compliant with industry standards to ensure your consultations
              are securely stored.
            </div>
          </div>
          <div
            className="FAQ_QandA_div"
            style={{ borderTop: "1px solid #dbdadb" }}
          >
            <div className="FAQ_question">
              <div>For how long is the consultation valid?</div>
            </div>
            <div className="FAQ_answer">
              In the case of a paid consult, you can follow-up with your doctor
              for up to 3 days. In case you opt for a free consult, follow-up
              questions are valid for one day only.
            </div>
          </div>
          <div
            className="FAQ_QandA_div"
            style={{ borderTop: "1px solid #dbdadb" }}
          >
            <div className="FAQ_question">
              <div>Do you have a refund policy?</div>
            </div>
            <div className="FAQ_answer">
              We have a “take-it-easy” policy. If for any reason you’re not
              convinced with your online consultation, you can write to us at
              contact@1mgdoctors.com and we will review the consult with the
              doctor - seeking clarifications on your queries that were
              answered. 100% refund will be given in genuine cases.
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------- --> */}

      {/* <!-- Are you doc oc --> */}
      <div className="Join_doc">
        <div className="doc_img_div">
          <img src="https://www.1mg.com/images/oc_doctor.svg" />
        </div>
        <div className="doc_info_div">
          <div className="doc_heading_div">Are you a doctor ?</div>
          <div className="doc_dis_div">
            Be a part of our panel of specialists and connect with your patients
            from anywhere.
          </div>
          <button>JOIN US</button>
        </div>
      </div>
    </Doc>
  );
};
