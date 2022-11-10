import React from "react";
import "./LabCustomer.css";
const LabCustomer = () => {
  return (
    <>
      
      <div class="slider">
      <h1 className="p0">Our Satisfied Lab Partners</h1>
        <input type="radio" name="testimonial" id="t-1" />
        <input type="radio" name="testimonial" id="t-2" />
        <input type="radio" name="testimonial" id="t-3" checked />
        <input type="radio" name="testimonial" id="t-4" />
        <input type="radio" name="testimonial" id="t-5" />
        <div class="testimonials">
          <label class="item" for="t-1">
            <img
              src="https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto"
              alt="picture"
            />
            <p>
              "We are happy to collaborate with India's most trusted healthcare online portal.
              They have an excellent customer support system which is approachable."
            </p>
            <h2>Pathcare Laboratories Ltd.</h2>
          </label>
          <label class="item" for="t-2">
            <img
              src="https://onemg.gumlet.io/diagnostics/mlkrsnvxj3yqtbzxo4wj_new.png?format=auto"
              alt="picture"
            />
            <p>
              "With a highly efficient team with and a well-knit network of sample collectors, 1mg
              has become our preferred choice for expansion across the citites."
            </p>
            <h2>Dr. Lal PathLabs</h2>
          </label>
          <label class="item" for="t-3">
            <img
              src="https://onemg.gumlet.io/diagnostics/9a1a8b6a-0430-11ed-a791-02f62d44fe04.png?format=auto"
              alt="picture"
            />
            <p>
              "We wanted to Collaborate with a disgnostic platform that shares our values of maintaining high quality 
              at every step of the patient journey."
            </p>
            <h2>Thyrocare Laboratories</h2>
          </label>
          <label class="item" for="t-4">
            <img
              src="https://onemg.gumlet.io/diagnostics/Metropolis-logo_new.png?format=auto"
              alt="picture"
            />
            <p>
              "1mg is an excellent patient-centric portal. It utilizes a panel of skilled phlebotomists who take 
              blood samples in a hygenic way."
            </p>
            <h2>MetroPolis Laboratories</h2>
          </label>
          <label class="item" for="t-5">
            <img
              src="https://onemg.gumlet.io/diagnostics/af9ae47c-e473-11eb-8bd0-028ca395ba2a.png?format=auto"
              alt="picture"
            />
            <p>
              "Immensely impressed with 1mg's outstanding professionalism and the quality of work. we 
              recommended 1mg as a preferred destination for labs seeking a highly competent and trustworthy partner."
            </p>
            <h2>Mahajan Imaging Center</h2>
          </label>
        </div>
        <div class="dots">
          <label for="t-1"></label>
          <label for="t-2"></label>
          <label for="t-3"></label>
          <label for="t-4"></label>
          <label for="t-5"></label>
        </div>
      </div>
    </>
  );
};

export default LabCustomer;
