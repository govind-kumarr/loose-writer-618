import React from 'react'
import './HappyCustomer.css'
const HappyCustomer = () => {
  return (
    <>
   
      <div class="testimonials-section">
    <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
    <input type="radio" name="slider" title="slide2" class="slider__nav"/>
    <input type="radio" name="slider" title="slide3" class="slider__nav"/>
    <input type="radio" name="slider" title="slide4" class="slider__nav"/>
    <input type="radio" name="slider" title="slide5" class="slider__nav"/>
  <div class="slider__inner">
    <div class="slider__contents">
    <h1 className='p7'>Our Happy Customer</h1>
      <quote>&rdquo;</quote>
      <p class="slider__txt">"My first booking experience with 1mg was simple and hassle-free Selected sample collection slot on their app and the technician arrived right on time in the morning. Very Impressive"</p>
      <h2 class="slider__caption">Nikita</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">"I got my wife's pregnancy tests done from 1mg. A trained technical visited to collect samples and all reports were delieverd on time before her doctor's appointment.Will surely choose 1mg for the upcoming tests."</p>
      <h2 class="slider__caption">Vijey</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">"I had to get an MRI done for my mother and a relative recommended 1mg. Booked the test online with a reputed lab near my home. Received a call from 1mg's rediology expert who helped us with test preparation instructions and appointment details. The experience inside lab was very good."</p>
      <h2 class="slider__caption">Annesha</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">"I was surprised to see the wide selection of labs and tests on 1mg. Now I can compare tests and packages based on prices and lab ratings and choose the best one for me and my family."</p>
      <h2 class="slider__caption">Chirag</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">"I regulary get tests done for my father, who is a diabetic patient. I like the convenience of home sammple collection and quick delivery of test reports on my email."</p>
      <h2 class="slider__caption">Smiriti</h2>
    </div>
  </div>
</div>
    </>
  )
}

export default HappyCustomer
