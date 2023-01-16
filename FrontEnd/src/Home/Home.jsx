import './home.scss'
import Navbar from '../navbar/Navigationbar'

function Home() {
  return (
    <div className='none'>
      <Navbar />
      <div className='home'>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Donor_Registration</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* Font */}
        <link href="https://fonts.google.com/specimen/Poppins" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            font-family: 'Poppins';\n        }\n    " }} />
        {/* nav bar */}
        {/* <section id="header">
          <a href="#" id="logo"><img src="logo.jpg" alt="logo"> </a>
          <h2>BloodPortal</h2>
          <div>
              <ul>
                  <li><a href="donor_registration.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
              </ul>
          </div>
      </section> */}
        {/* Navbar end */}
        {/* <h2>Lorem Ipsum is simply dummy text</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          book.</p>
        <br />
        <br /> */}
        <div className='parentdiv'>
          <a href="/register" className="btn1">Donor Registration</a>
          <a href="/request" className="btn2">Request Donor</a>
        </div>
        <br />
        {/* <br />
        <h2>Why should people donate blood ?</h2>
        <p>Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with
          severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.
          There is a constant need for a regular supply of blood because it can be stored only for a limited period of time before
          use. Regular blood donation by a sufficient number of healthy people is needed to ensure that blood will always be
          available whenever and wherever it is needed.
          Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your
          blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma
          – which can be used individually for patients with specific conditions.</p>
        <h2>Is giving blood safe ?</h2>
        <p>Yes. Remember that you will only be accepted as a blood donor if you are fit and well. Your health and well-being are
          very important to the blood service. The needle and blood bag used to collect blood come in a sterile pack that cannot
          be reused, so the process is made as safe as possible.</p>
        <h2>Does it hurt?</h2>
        <p>Just squeeze the inside of your elbow tightly and you will get a quick idea of what the needle feels like. All you
          should feel is a gentle pressure and a momentary “pinprick” sensation. Blood donation is very safe and discomfort or
          problem during or after donating is very uncommon.</p>
        <h2>Who can give blood and how often?</h2>
        <p>The criteria for donor selection varies from country to country, but blood can be donated by most people who are healthy
          and do not have an infection that can be transmitted through their blood.
          The age at which people are eligible to give blood varies, but is commonly between the ages of 17 and 65. Some countries
          accept donations from people from the age of 16 and extend the upper age limit beyond 65 years.
          Healthy adults can give blood regularly – at least twice a year. Your local blood service can tell you how frequently
          you can give blood.</p>
        <h2>Who should not give blood?</h2>
        <p>The blood service is concerned with the welfare of both the blood donor and the recipient (patient). Donors are often
          asked not to donate blood for a period of time in the interests of their safety and/or that of the blood supply.
          You should not give blood if your own health might suffer as a result. The first concern of the blood service is to
          ensure that blood donation does no harm to the blood donor. You should not donate blood if:
        </p><ul>
          <li>You are feeling unwell</li>
          <li>You are anaemic</li>
          <li>You are pregnant, have been pregnant within the last year or are breastfeeding</li>
          <li>You have certain medical conditions, which might make you an unsuitable donor</li>
          <li>You are taking certain medications, such as antibiotics.</li>
        </ul>
        You may be able to donate blood at a later time. In some cases, however, in order to protect your own health you will
        not be able to donate blood.
        You should not donate blood if it might cause harm to the patient who receives it. Blood can transmit life-threatening
        infections to patients who receive blood transfusions. You should not donate blood if:
        <ul>
          <li>You have or may recently have contracted a sexually transmitted disease, such as HIV or syphilis, that can be passed on
            to a patient who receives your blood</li>
          <li>sYour lifestyle puts you at risk of contracting an infection that can be transmitted through your blood: for example, if
            you have more than one sexual partner or have sexual contact with prostitutes</li>
          <li>You have ever injected recreational, non-medicinal drugs</li>
          <li>You have recently had a tattoo, skin scarification or ear or body piercing – your local blood service can tell you how
            long you must wait before giving blood</li>
          <li>You have had sexual contact with anyone in the above categories.
          </li>
        </ul> */}
        {/* <p /> */}
      </div>
    </div>
  );
}
export default Home;
