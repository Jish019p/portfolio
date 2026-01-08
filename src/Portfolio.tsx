import React, { useState, type FormEvent } from 'react';
import './portfolio.css';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('skills');
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const openMenu = () => {
    setIsSideMenuOpen(true);
  };

  const closeMenu = () => {
    setIsSideMenuOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const scriptURL = 'https://docs.google.com/spreadsheets/d/18enDuOJ9Wbaw-QndwZj5G6T5JQ2y2WahSRYenAlpRH8/edit?gid=0#gid=0';

    setMessage('Sending...');

    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form),
        mode: 'no-cors'
      });
      
      setMessage('Message sent successfully!');
      form.reset();
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error!', error);
      setMessage('Failed to send message. Please try again.');
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div id="header">
        <div className="container">
          <nav>
            <img src="/portfolio/images/logos.png" className="logo" alt="Logo" />
            <ul id="sidemenu" style={{ right: isSideMenuOpen ? '0' : '-200px' }}>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fa-solid fa-circle-xmark" onClick={closeMenu}></i>
            </ul>
            <i className="fa-duotone fa-solid fa-bars" onClick={openMenu}></i>
          </nav>
          <div className="header-text">
            <p>Mern Stack Developer</p>
            <h1>I'm <span>JISHAN</span> ANSARI<br /> from INDIA</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="/portfolio/images/Background.jpeg" alt="Profile" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About me</h1>
              <p>
                I'm an engineering student at Chamelidevi group of institution Indore, INDIA. As an engineering student, I am deeply committed to mastering the art and science of problem-solving.
                My academic journey has equipped me with a solid foundation in mathematics, physics, and core engineering principles, which I actively apply to real-world challenges through hands-on projects and internships.
                I thrive in collaborative environments, where my teamwork and communication skills come to the forefront. I'm also passionate about staying updated with the latest technological advancements and continuously seek opportunities to expand my knowledge. My ultimate goal is to leverage my engineering expertise to innovate and contribute meaningfully to the field.
              </p>
              <div className="tab-titles">
                <p 
                  className={`tab-link ${activeTab === 'skills' ? 'active-link' : ''}`} 
                  onClick={() => openTab('skills')}
                >
                  Skills
                </p>
                <p 
                  className={`tab-link ${activeTab === 'experience' ? 'active-link' : ''}`} 
                  onClick={() => openTab('experience')}
                >
                  Experience
                </p>
                <p 
                  className={`tab-link ${activeTab === 'education' ? 'active-link' : ''}`} 
                  onClick={() => openTab('education')}
                >
                  Education
                </p>
              </div>
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li>
                    <span>Full Stack</span><br />
                    I'm a python web developer builds and maintains web applications using frameworks like Django and Flask, focusing on backend development, database management, and API integration
                  </li>
                  <li>
                    <span>Mern Stack </span><br />
                    I design user-friendly interfaces, ensuring a smooth and engaging user experience in digital products using techs like HTML, CSS, Javascript and react.js
                  </li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                <ul>
                  <li>
                    <span>HACKATHONS & Clubs (2022-now)</span><br />
                    <li>
                        <span>Kriyeta 2.0</span>
                        <br />
                        Participated in Kriyeta 2.0 Hackathon and developed a project on smart attendance system using facial recognition technology.
                    </li>
                    <li>
                        <span>Hackwave 1.0 & 2.0</span>
                        <br />
                        Participated in Hackwave 1.0 & 2.0 Hackathon and developed projects on web applications focusing on social good and community engagement.
                    </li>
                    <li>
                        <span>EDS CDGI Chapter</span> <br />
                        Active member of EDS CDGI Chapter, participating in coding challenges and contributing to the coding community within the institution.
                    </li>
                  </li>
                  <li>
                    <span>Internships (2022-now)</span><br />
                    <li>
                        <span>Next Web Works</span> <br />
                        I have worked as Frontend Intern Learnig React.js and Express.js for 3 months.
                    </li>
                    <li>
                        <span>Smartnex.in</span> <br />
                        I have worked as a Mern Stack Developer Intern Building web applications using node.js and React.js for 3 months.
                    </li>
                  </li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                <ul>
                  <li>
                    <span>SCHOOL</span><br />
                    <li>
                        <span>High School</span><br />
                        I completed my high school from Master Mind Academy Sr. Sec. School, Madhya Pradesh, INDIA with <span>93%</span> in 2020.
                    </li>
                    <li>
                        <span>Higher Secondary School</span><br />
                        I completed my higher secondary school from Master Mind Academy Sr. Sec. School, Madhya Pradesh, INDIA with <span>91%</span> in 2022.
                    </li>
                  </li>
                  <li>
                    <span>Under Graduation</span><br />
                    <li>
                        <span>Bachelor of Technology</span><br />
                        Currently pursuing B.Tech in Computer Science Engineering from Chamelidevi Group of Institutions, Indore, Madhya Pradesh, INDIA with a current CGPA of <span>7.87</span>.
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My services</h1>
          <div className="service-list">
            <div>
              <i className="fa-solid fa-web-awesome"></i>
              <h2>Mern Stack Development</h2>
              <p>
                I design user-friendly interfaces, ensuring a smooth and engaging user experience in digital products using techs like HTML, CSS, Javascript and react.js + typescript, node.js, express.js, mongodb.
              </p>
              <a href="https://github.com/Jish019p">Check Projects</a>
            </div>
            <div>
              <i className="fa-brands fa-app-store"></i>
              <h2>Full Stack Development</h2>
              <p>
                builds and maintains web applications using frameworks like Django and Flask, focusing on backend development, database management, and API integration
              </p>
              <a href="https://github.com/Jish019p">check Projects</a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src="/portfolio/images/work-1.png" alt="Work 1" />
              <div className="layer">
                <h3>Aaradhya Dharma</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam.</p>
                <a href="https://github.com/Jish019p/aaradhyadharma"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="/portfolio/images/work-2.png" alt="Work 2" />
              <div className="layer">
                <h3>HealthFrigma</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam.</p>
                <a href="https://github.com/Jish019p/minor-fitness"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="/portfolio/images/work-3.png" alt="Work 3" />
              <div className="layer">
                <h3>Ec-producerent</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ullam.</p>
                <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">see more</a>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me</h1>
            <p>
              <i className="fa-solid fa-message"></i>
              jishanbusiness099@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>
              +916264697646
            </p>
            <div className="social">
             
              <a href=" https://x.com/ANSARIXjishan?t=WkxnCvWCr_i5wC4q5URU7A&s=08"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/jish.01?igsh=MnoxbG1lMmdpYTR3"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/jishan-ansari-74363a280"><i className="fa-brands fa-linkedin"></i></a>
              
            </div>
            <a href="images/jishan's resume..pdf" download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea 
                name="message" 
                id="message" 
                rows={13} 
                placeholder="Your message" 
                required
              />
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{message}</span>
          </div>
        </div>
        <div className="copyright">
          xyz @ jishan <i className="fa-solid fa-heart"></i> copyright
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
