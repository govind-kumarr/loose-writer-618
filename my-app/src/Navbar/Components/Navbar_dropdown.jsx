import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Nav_dropdown } from "../Styleing/Navbar_dropdown";
import { Link } from "react-router-dom";

export const Navbar_dropdown = () => {
  return (
    <Nav_dropdown>
      <div className="dropdown_div">
        <ul>
          <li>
            <Link to="/Products">
              Health Resource Center
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">All Diseases</Link>
                  </li>
                  <li>
                    <Link to="/Products">All Medicines</Link>
                  </li>
                  <li>
                    <Link to="/Products">
                      Medicines by Therapeutic className
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Covid Essentials
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Covid-19 Self test kits</Link>
                  </li>
                  <li>
                    <Link to="/Products">Oxygen Cans & Concentrators</Link>
                  </li>
                  <li>
                    <Link to="/Products">Masks</Link>
                  </li>
                  <li>
                    <Link to="/Products">Sanitizers & Handwash Products</Link>
                  </li>
                  <li>
                    <Link to="/Products">Boost Your Immunity</Link>
                  </li>
                  <li>
                    <Link to="/Products">Thermometer</Link>
                  </li>
                  <li>
                    <Link to="/Products">Chyawanprash</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Featured
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Winter Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Hair & Scalp Care</Link>
                    <Link to="/Products">Cough & Cold</Link>
                    <Link to="/Products">Fever & Headache</Link>
                    <Link to="/Products">Vaporizers & Nebulizers</Link>
                    <Link to="/Products">Heating Aid</Link>
                    <Link to="/Products">Winter Combos</Link>
                  </li>
                  <li>
                    <Link to="/Products">Tata 1mg Health Products</Link>
                  </li>
                  <li>
                    <Link to="/Products">Trending Products</Link>
                  </li>
                  <li>
                    <Link to="/Products">New Arrivals on Tata 1MG</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Buy More, Save More</Link>
                  </li>
                  <li>
                    <Link to="/Products">Vaccination</Link>
                  </li>
                  <li>
                    <Link to="/Products">Minimum 33% Off</Link>
                  </li>
                  <li>
                    <Link to="/Products">Combos</Link>
                  </li>
                  <li>
                    <Link to="/Products">Deals of the Day</Link>
                  </li>
                  <li>
                    <Link to="/Products">Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Accu-Chek</Link>
                    <Link to="/Products">Ensure</Link>
                    <Link to="/Products">Revital</Link>
                    <Link to="/Products">Optimum Nutrition (ON)</Link>
                    <Link to="/Products">Dr. Morepen</Link>
                    <Link to="/Products">Pediasure</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Products
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Vitamins & Supplements</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Multivitamins</Link>
                    <Link to="/Products">Vitamins A-Z</Link>
                    <Link to="/Products">Mineral Supplements</Link>
                  </li>
                  <li>
                    <Link to="/Products">Nutritional Drinks</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Adult Daily Nutrition</Link>
                    <Link to="/Products">Kids Nutrition (2-15 Yrs)</Link>
                    <Link to="/Products">For Women</Link>
                  </li>
                  <li>
                    <Link to="/Products">Health Food & Drinks</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Green Tea & Herbal Tea</Link>
                    <Link to="/Products">Apple Cider Vinegar</Link>
                    <Link to="/Products">Healthy Snacks</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Protein Supplements</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Whey Protein</Link>
                    <Link to="/Products">Amino Acids</Link>
                    <Link to="/Products">Mass Gainers</Link>
                    <Link to="/Products">Workout Essential</Link>
                    <Link to="/Products">Fat Burners</Link>
                  </li>
                  <li>
                    <Link to="/Products">Omega & Fish Oil</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Fish Oil</Link>
                    <Link to="/Products">Cod Liver Oil</Link>
                    <Link to="/Products">Flax Seed Oil</Link>
                  </li>
                  <li>
                    <Link to="/Products">Immunity Boosters</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Chyawanprasha</Link>
                    <Link to="/Products">Vitamin C</Link>
                    <Link to="/Products">Herbal Teas</Link>
                    <Link to="/Products">Antioxidant Supplements</Link>
                    <Link to="/Products">Ayurvedic Supplements</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Specialty Supplements</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Green Supplements</Link>
                    <Link to="/Products">Beauty Supplements</Link>
                    <Link to="/Products">Pre and Probiotics</Link>
                    <Link to="/Products">Glucosamine</Link>
                    <Link to="/Products">Collagen</Link>
                    <Link to="/Products">Antioxidants</Link>
                    <Link to="/Products">Biotin</Link>
                  </li>
                  <li>
                    <Link to="/Products">Weight Management</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Weight Management Herbs</Link>
                    <Link to="/Products">Meal Replacements</Link>
                    <Link to="/Products">Weight Gain</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Diabetes
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container1">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Devices</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Blood Glucose Monitors</Link>
                    <Link to="/Products">Test Strips & Lancets</Link>
                    <Link to="/Products">Syringes & Pens</Link>
                  </li>
                  <li>
                    <Link to="/Products">Diabetic Medicines</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">
                      Vitamins, Minerals & Antioxidants
                    </Link>
                    <Link to="/Products">Homeopathy Medicines</Link>
                    <Link to="/Products">Ayurvedic Medicines</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Sugar Substitutes</Link>
                  </li>
                  <li>
                    <Link to="/Products">Diabetic Diet</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Juices & Vinegars</Link>
                    <Link to="/Products">Superfoods</Link>
                  </li>
                  <li>
                    <Link to="/Products">Diabetic Foot Health</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Healthcare Devices
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Masks (N95, Surgical and more)</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Face Shield</Link>
                    <Link to="/Products">Surgical Masks</Link>
                    <Link to="/Products">N95 Masks</Link>
                  </li>
                  <li>
                    <Link to="/Products">Oxygen Concentrators & Cans</Link>
                  </li>
                  <li>
                    <Link to="/Products">BP Monitors</Link>
                  </li>
                  <li>
                    <Link to="/Products">Nebulizers & Vaporizers</Link>
                  </li>
                  <li>
                    <Link to="/Products">Oximeters & Pedometers</Link>
                  </li>
                  <li>
                    <Link to="/Products">Vital Signs Monitors & Wearables</Link>
                  </li>
                  <li>
                    <Link to="/Products">Weighing Scales</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Thermometers</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">IR Thermometers</Link>
                  </li>
                  <li>
                    <Link to="/Products">Body Massager</Link>
                  </li>

                  <li>
                    <Link to="/Products">Diabetes Monitors</Link>
                  </li>
                  <li>
                    <Link to="/Products">Mobility Equipments</Link>
                  </li>
                  <li>
                    <Link to="/Products">Exercise Equipments</Link>
                  </li>
                  <li>
                    <Link to="/Products">Doctor's Corner</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Stethoscopes</Link>
                    <Link to="/Products">Tapes & Bandages</Link>
                    <Link to="/Products">Clinical Diagnostic Equipments</Link>
                    <Link to="/Products">Dressings & Wound Care</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Supports & Braces</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Neck & Shoulder Suppor</Link>
                    <Link to="/Products">Knee & Leg Support</Link>
                    <Link to="/Products">Back & Abdomen Support</Link>
                    <Link to="/Products">Ankle & Foot Support</Link>
                    <Link to="/Products">Hand & Wrist Braces</Link>
                    <Link to="/Products">Arm & Elbow Support</Link>
                    <Link to="/Products">Cervical Pillows</Link>
                    <Link to="/Products">Compression support & sleeves</Link>
                    <Link to="/Products">Heel support</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Personal Care{" "}
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Sexual Wellness</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Condoms</Link>
                    <Link to="/Products">Lubricants & Massage Gels</Link>
                    <Link to="/Products">Personal body massagers</Link>
                    <Link to="/Products">Men Performance Enhancers</Link>
                    <Link to="/Products">Sexual Health Supplements</Link>
                  </li>
                  <li>
                    <Link to="/Products">Skin Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Body Lotions</Link>
                    <Link to="/Products">Mosquito Repellents</Link>
                    <Link to="/Products">Lip Balm</Link>
                    <Link to="/Products">Acne Care</Link>
                    <Link to="/Products">Bath Essentials</Link>
                    <Link to="/Products">Facewash</Link>
                    <Link to="/Products">Sanitizers & Handwash</Link>
                    <Link to="/Products">Sunscreen Products</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Baby Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Baby & Infant Food</Link>
                    <Link to="/Products">Baby Diapers, wipes & more</Link>
                    <Link to="/Products">Nursing & Feeding</Link>
                    <Link to="/Products">Baby Bath Essentials</Link>
                    <Link to="/Products">Baby Skin Care</Link>
                    <Link to="/Products">Baby Healthcare</Link>
                    <Link to="/Products">Baby Oral Health</Link>
                  </li>
                  <li>
                    <Link to="/Products">Hair Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Shampoo</Link>
                    <Link to="/Products">Hair Conditioners</Link>
                    <Link to="/Products">Hair Growth Supplements</Link>
                    <Link to="/Products">Hair Oils</Link>
                    <Link to="/Products">Hair Growth for Men</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Elderly Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Adult Diapers</Link>
                    <Link to="/Products">Bone & Joint Health</Link>
                    <Link to="/Products">Living & Safety Aids</Link>
                    <Link to="/Products">Orthopaedic Supports</Link>
                  </li>
                  <li>
                    <Link to="/Products">Women Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Feminine Hygiene</Link>
                    <Link to="/Products">Women Care Supplements</Link>
                    <Link to="/Products">Mother Care</Link>
                    <Link to="/Products">Menopause</Link>
                    <Link to="/Products">Polycystic Ovary Syndrome</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Men Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Men Grooming</Link>
                  </li>
                  <li>
                    <Link to="/Products">Oral Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Pet Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Pet Grooming</Link>
                    <Link to="/Products">Pet Food</Link>
                    <Link to="/Products">Pet Health Care</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Health Conditions
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Stomach Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Heart Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Bone, Joint & Muscle Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Pain Relief</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Heating Aids</Link>
                  </li>
                  <li>
                    <Link to="/Products">Eye Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Eye Lubricants</Link>
                  </li>
                  <li>
                    <Link to="/Products">Ear Care</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Hearing Aid Devices</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">First Aid</Link>
                  </li>
                  <li>
                    <Link to="/Products">Liver Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Cold & Cough</Link>
                  </li>
                  <li>
                    <Link to="/Products">Fever</Link>
                  </li>
                  <li>
                    <Link to="/Products">Mental Wellness</Link>
                  </li>
                  <li>
                    <Link to="/Products">Kidney Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Respiratory Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Piles, Fissures & Fistula</Link>
                  </li>
                  <li>
                    <Link to="/Products">Smoking Cessation</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Ayurveda Products
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Ayurveda Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Dabur</Link>
                    <Link to="/Products">Sri Sri Tattva</Link>
                    <Link to="/Products">Baidyanath Products</Link>
                    <Link to="/Products">Kerala Ayurveda</Link>
                    <Link to="/Products">Jiva Ayurveda</Link>
                    <Link to="/Products">Tata 1mg Herbal Supplements</Link>
                    <Link to="/Products">Patanjali</Link>
                  </li>
                  <li>
                    <Link to="/Products">Popular categories</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Herbal Juice</Link>
                    <Link to="/Products">Herbal Juice</Link>
                    <Link to="/Products">Ayurveda Personal Care</Link>
                    <Link to="/Products">Ayurvedic Immunity Boosters</Link>
                    <Link to="/Products">Explore Popular Herbs</Link>
                    <Link to="/Products">Herbal Supplements</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Top Health Concerns</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Ayurvedic Respiratory care</Link>
                    <Link to="/Products">Cough, Cold & Fever</Link>
                    <Link to="/Products">Sexual Wellness</Link>
                    <Link to="/Products">Bone, Joint and Muscle Care</Link>
                    <Link to="/Products">Stomach Care</Link>
                    <Link to="/Products">Diabetes Care</Link>
                    <Link to="/Products">Liver Care</Link>
                    <Link to="/Products">Mind Care</Link>
                    <Link to="/Products">Cardiac Care</Link>
                  </li>
                  <li>
                    <Link to="/Products">Unani Medicines</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Hamdard Unani</Link>
                    <Link to="/Products">AMU Dawakhana</Link>
                    <Link to="/Products">Rex Remedies</Link>
                    <Link to="/Products">Dehlvi Remedies</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <Link to="/Products">
              Homeopathy{" "}
              <FontAwesomeIcon className="dropdown_icon" icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <div className="container2">
                <div className="notborder">
                  <li>
                    <Link to="/Products">Homeopathy Top Brands</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">SBL Homoeopathy</Link>
                    <Link to="/Products">Dr Reckeweg</Link>
                    <Link to="/Products">Dr Willmar Schwabe India</Link>
                    <Link to="/Products">Adel Pekana</Link>
                    <Link to="/Products">BJAIN Homeopathy</Link>
                    <Link to="/Products">Bakson's</Link>
                    <Link to="/Products">Allen</Link>
                    <Link to="/Products">Wheezal</Link>
                    <Link to="/Products">Dr Willmar Schwabe Germany</Link>
                    <Link to="/Products">Haslab</Link>
                    <Link to="/Products">Medisynth</Link>
                    <Link to="/Products">Boiron</Link>
                    <Link to="/Products">Bhandari</Link>
                    <Link to="/Products">Dr Bakshi Bakson</Link>
                    <Link to="/Products">Dr Batra's</Link>
                  </li>
                  <li>
                    <Link to="/Products">Homeopathy Wellness Combos</Link>
                  </li>
                </div>
                <div>
                  <li>
                    <Link to="/Products">Homeopathy Popular Categories</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">
                      Homeopathic Care for Cold & Cough
                    </Link>
                    <Link to="/Products">Respiratory Wellness</Link>
                    <Link to="/Products">Homeopathy Covid Essentials</Link>
                    <Link to="/Products">Sexual Health</Link>
                    <Link to="/Products">Hair Care Products</Link>
                    <Link to="/Products">Skin Care Products</Link>
                    <Link to="/Products">Children's Health</Link>
                    <Link to="/Products">Women's Health</Link>
                  </li>
                  <li>
                    <Link to="/Products">Homeopathy Medicines</Link>
                  </li>
                  <li className="innerli">
                    <Link to="/Products">Homeopathic Drops</Link>
                    <Link to="/Products">Dilutions</Link>
                    <Link to="/Products">Mother Tinctures</Link>
                    <Link to="/Products">Trituration</Link>
                    <Link to="/Products">Bio Combinations</Link>
                    <Link to="/Products">Millesimal LM Potencies</Link>
                    <Link to="/Products">Biochemics</Link>
                    <Link to="/Products">Bach Flower Remedies</Link>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </Nav_dropdown>
  );
};
