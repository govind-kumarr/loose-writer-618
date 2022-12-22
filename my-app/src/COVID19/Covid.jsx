import React from "react";
import styles from "./Covid.module.css";
import { FaThumbsUp } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
const Covid = () => {
  return (
    <>
      <Navbar_search />
      <div className={styles.Covid_Container}>
        <div className={styles.covid}>
          <div>
            <h1>Combating Coronavirus in India</h1>
            <p>
              As we are staring at a potential rise of coronavirus in India,
              testing, tracing and treating is the ideal way of curbing this
              spread. Testing on time helps provide early treatment which, in
              turn, prevents the spread to your loved ones and others around
              you.
            </p>
            <hr />
            <h4>
              Experiencing COVID-like symptoms? To book a COVID-19 test at home,
              call on
            </h4>
            <h1>1800- 212- 2353</h1>
          </div>
          <div>
            <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png" />
          </div>
        </div>
        <div className={styles.sec}>
          <div className={styles.first}>
            <h1>COVID-19 RT-PCR test</h1>
            <h3>Gold standard test to detect active coronavirus infection</h3>
            <button>BOOK NOW</button>
          </div>
          <div className={styles.im}>
            <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png" />
          </div>
        </div>
        <div className={styles.ess}>
          <div>
            <h1>COVID Essentials: Everything you need</h1>
          </div>
          <div className={styles.flex}>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png" />
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png" />
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png" />
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png" />
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png" />
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png" />
            </div>
          </div>
        </div>
        <div className={styles.manag}>
          <div style={{ backgroundColor: "lavenderblush", color: "brown" }}>
            <h2 style={{ color: "brown" }}>
              COVID Antibody IgG (Quantitative)
            </h2>
            <hr style={{ height: "5px", backgroundColor: "brown" }} />
            <p style={{ color: "brown" }}>
              The Antibody Test detects any past occurrence of the infection by
              looking for COVID-19 antibodies
            </p>
            <hr style={{ height: "2px", backgroundColor: "brown" }} />
            <h4 style={{ color: "brown" }}>Who should take the test ?</h4>
            <ul>
              <li>
                Think you contracted the coronavirus in the past and have
                already recovered
              </li>
              <li>
                Want to know if your body has encountered the infection and made
                antibodies against the coronavirus
              </li>
              <li>
                Have recovered from COVID-19 and want to help people who need
                plasma therapy
              </li>
            </ul>
            <div className={styles.one}>
              <h3 style={{ color: "whitesmoke" }}>Book Now</h3>
            </div>
          </div>
          <div style={{ backgroundColor: "honeydew", color: "darkslategray" }}>
            <h2 style={{ color: "darkslategray" }}>
              Covid Home Care Essential
            </h2>
            <hr style={{ height: "5px", backgroundColor: "darkslategray" }} />
            <p style={{ color: "darkslategray" }}>
              The COVID Home Care Essential package offers 33 tests (Includes
              CRP, CBC with NLR, ESR, BUN and more) that give important clues
              about the various health parameters.
            </p>
            <hr style={{ height: "2px", backgroundColor: "darkslategray" }} />
            <h4 style={{ color: "darkslategray" }}>
              This test is recommended if you:
            </h4>
            <ul>
              <li>
                Have been diagnosed with COVID-19 and need to understand how
                COVID-19 has impacted your health
              </li>
              <li>
                Are getting COVID-19 care at home and notice any worsening of
                the symptoms
              </li>
              <li>Have been advised by the doctor to check your biomarkers</li>
            </ul>
            <div className={styles.two}>
              <h3 style={{ color: "whitesmoke" }}>Book Now</h3>
            </div>
          </div>
          <div style={{ backgroundColor: "bisque", color: "darkolivegreen" }}>
            <h2 style={{ color: "darkslategray" }}>COVID Home Care Complete</h2>
            <hr style={{ height: "5px", backgroundColor: "darkolivegreen" }} />
            <p style={{ color: "darkolivegreen" }}>
              The COVID Home Care Complete package offers 41 tests (Includes
              D-Dimer, IL-6, HbA1c, Serum electrolytes, etc., in addition to
              CRP, CBC with NLR, ESR, and more) that give important clues about
              the various health parameters.
            </p>
            <hr style={{ height: "2px", backgroundColor: "darkolivegreen" }} />
            <h4 style={{ color: "darkolivegreen" }}>
              This test is recommended if you:
            </h4>
            <ul>
              <li>
                Have been diagnosed with COVID-19 and need to understand how
                COVID-19 has impacted your health
              </li>
              <li>
                Are getting COVID-19 care at home and notice any worsening of
                the symptoms
              </li>
              <li>Have been advised by the doctor to check your biomarkers</li>
            </ul>
            <div className={styles.last}>
              <h3 style={{ color: "whitesmoke" }}>Book Now</h3>
            </div>
          </div>
        </div>
        <div className={styles.tata}>
          <button>
            {" "}
            <FaThumbsUp style={{ color: "darkred" }} /> Tata 1mg's Choics
          </button>
          <p>
            People with comorbidities such as diabetes and heart disease should
            opt for COVID Home Care Complete to cover more biomarkers which
            allows a nuanced view of their health status.
          </p>
        </div>
        <div className={styles.co}>
          <h1>Prepare, don't panic</h1>
          <p>
            Counter misinformation and keep yourself updated about all
            COVID-related developments with concise booklets and guides. These
            guides, compiled by the team of doctors at Tata 1mg, are based on
            analysis of data by trusted sources such as the WHO, Lancet,
            National Institute of Communicable Diseases, South Africa, MoHFW &
            discussions with medical experts.
          </p>
          <Menu>
            <Menu.Button className={styles.coral}>
              Select Language +
            </Menu.Button>
            <Menu.Items className={styles.lan}>
              <Menu.Item>
                {({ active }) => <h3 className={styles.lan1}>Hindi</h3>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <h3 className={styles.lan2}> English</h3>}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className={styles.grid}>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png" />
              <button>Download E-Book</button>
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/COVID-Omicron-Tata1mg.png" />
              <button>Download E-Book</button>
            </div>
            <div>
              <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Double-masking-tips-by-1mg.png" />
              <button>Download E-Book</button>
            </div>
          </div>
        </div>
        <div className={styles.art}>
          <div>
            <h1>COVID-19 & latest treatment modalities</h1>
            <p>
              To prepare for the imminent threats of this virus, scientists and
              researchers are constantly developing newer treatment strategies.
              One such new treatment option includes monoclonal antibodies. Want
              to know more about these available treatments and how they work
              against COVID variants, including Delta and Omicron?
            </p>
            <button>READ THIS ARTICLE</button>
          </div>
          <div>
            <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand.png" />
          </div>
        </div>
        <div className={styles.art}>
          <div>
            <h1>
              Has your doctor prescribed COVID treatment based on monoclonal
              antibodies?
            </h1>

            <button>FIND IT HERE</button>
          </div>
          <div>
            <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/monoclonal_dweb.png" />
          </div>
        </div>
        <div className={styles.art1}>
          <div>
            <h1>Think you may have COVID-19?</h1>
            <h2>
              Talk to a qualified doctor online for FREE & get expert guidance
            </h2>
            <button>CALL NOW</button>
          </div>
          <div>
            <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/talk-now.png" />
          </div>
        </div>
        <div className={styles.video}>
          <h1>
            Watch these detailed videos to get answers to commonly asked
            questions on coronavirus in India:
          </h1>
          <div className={styles.vid}>
            <div>
              <iframe
                width="515"
                height="300"
                src="https://www.youtube.com/embed/P4TKxfj3tu4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="515"
                height="300"
                src="https://www.youtube.com/embed/UN7fbohf0uw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="515"
                height="300"
                src="https://www.youtube.com/embed/H3H0XCyQgXY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="515"
                height="300"
                src="https://www.youtube.com/embed/pso2qbEj0Y4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.art}>
          <div>
            <h1>Think you have fever, cold or cough?</h1>
            <h2>Talk to our experts online</h2>
            <button>CONSULT NOW</button>
          </div>
          <div className={styles.dri}>
            <img src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/consult-doc.png" />
          </div>
        </div>
        <div style={{ width: "90%", margin: "auto" }}>
          <p>Reference: </p>
          <p>www.mohfw.gov.in/pdf/StatewiseCovidHospitalslink19062020.pdf</p>
        </div>
      </div>
    </>
  );
};

export default Covid;
