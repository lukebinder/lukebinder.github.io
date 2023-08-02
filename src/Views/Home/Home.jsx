import "./Home.scss";
import Simon from "../../assets/simonCut.png";
import ActionBtn from "../../Components/ActionBtn";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import ServiceCard from "./ServiceCard/ServiceCard";
import { services } from "../../constants";
import { Element, Link } from "react-scroll";

const Home = ({ myRef }) => {
  return (
    <Fade duration={2000}>
      <div className="Home">
        <section className="jumbotron" ref={myRef}>
          <div className="jumbotron__content">
            <div className="jumbotron__col-1">
              <Bounce duration={1500} left>
                <div>
                  <h1>My mission is to make local government better</h1>
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    <ActionBtn type="secondary solid">Learn More</ActionBtn>{" "}
                  </Link>
                </div>{" "}
              </Bounce>
            </div>

            <div className="jumbotron__col-2">
              <Bounce duration={1500} right>
                <div className="jumbotron__image-container">
                  <img src={Simon} alt="simon markham" />
                </div>{" "}
              </Bounce>
            </div>
          </div>
          <div className="attr">
            <p>
              Source: NASA, 2006 - working on the International Space Station
              above Te Waipounamu, the South Island
            </p>
          </div>
        </section>
        <Element name="services" className="services">
          <h2>Services</h2>
          <div className="services__service-cards-container">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
          <Fade up>
            <div className="section-divider" />
          </Fade>
        </Element>
        <Element name="about" className="about">
          <h2>About</h2>
          <Fade up>
            <div className="about__content">
              <div className="about__blurb">
                Simon Markham Consulting was launched in early 2021 sensing that
                the local government sector was about to go through its most
                significant period of change since the 1989 reforms. Why is
                that? Councils with a renewed wellbeings mandate face with their
                communities a complex set of challenges in an increasingly
                ‘VUCA’ world - volatile, uncertain, complex, and ambiguous.
                <br />
                <br />
                The current local government system was established over 30
                years ago with some discrete innovations since then. Key guiding
                statutes are 20 or more years old. There is unmistakable
                evidence of ‘system stress’. In response a wide range of new
                policy and legislative initiatives are being launched. These
                touch all aspects of how councils operate and partner with
                others, while remaining sustainable and relevant in dealing with
                an unprecedented set of pressures.
                <br />
                <br />
                The current ‘reforms programme’ is quite unlike that of 1989 and
                will unfold in much less certain ways for councils and
                communities. It is a time of elevated risks but rich
                opportunities.
                <br />
                <br />
                SMC Ltd.’s mission is to work with all entities that impact
                local governance to mitigate risks and realise opportunities for
                communities. In short, my mission is to make local government
                better.
              </div>
              <div className="about__col-1">
                {/* <ul>
                  <li>
                    Passionate about community betterment through local
                    governance with partners
                  </li>
                  <li>
                    Committed to LG sector improvement and leadership excellence
                  </li>
                  <li>Strategic, professional and achievement oriented</li>
                </ul> */}
              </div>
              <div className="about__col-2">
                <ul>
                  <li>
                    Academic background in social science and urban planning; a
                    senior scholar and prize- winner from the University of
                    Auckland
                  </li>
                  <li>
                    A range of policy, planning and management roles
                    in/consulting to local & central government in Auckland,
                    Wellington and Christchurch
                  </li>
                  <li>
                    20 years executive team experience in medium-large Councils
                  </li>
                  <li>
                    For over ten years collaborated with cities in the USA and
                    Europe under the auspice of the Bertelsmann Foundation in
                    Germany, leading one of its worldwide LG best practice
                    research projects
                  </li>
                  <li>
                    Awarded in 2013 a Civil Defense and Emergency Management
                    Ministerial Gold Award for outstanding contribution to CDEM
                    in NZ
                  </li>
                  <li>
                    Associate Fellow, NZ Institute of Management (retd.);
                    Chartered Member, NZ Institute of Directors; 10 years Board
                    membership at Taituarā
                  </li>
                  <li>
                    Assisted a number of advisory boards and Committees,
                    including 5 years on LGNZ’s Policy Advisory Group
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className="section-divider" />
          </Fade>
        </Element>
        <Element name="record" className="record">
          <h2>Track Record</h2>
          <Fade up>
            <div className="record__content">
              <ul>
                <li>
                  Led Departments up to 111 ftes with budget of $18M and
                  projects up to $34M; member Management team for Councils up to
                  2,200 staff and $285 million budget{" "}
                </li>
                <li>
                  Responsibility for significant and successful change
                  initiatives in information technology, convention &
                  entertainment facilities, and metro, district and town centres
                  planning
                </li>
                <li>
                  Responsibility for national and international award-winning
                  disaster recovery and regeneration projects
                </li>
                <li>
                  A successful Senior Manager with Waimakariri DC that holds an
                  AA rating by the LGNZ Local Government Excellence Programme -
                  leading WDC with that programme
                </li>
                <li>
                  Early 2021 established SMC Ltd with a strong interest in
                  pursuing opportunities that assist councils and partners
                  working on the future of local governance for communities
                </li>
                <li>
                  2021-22 completed a part-time contract with Waimakariri DC,
                  leading diverse policy development and programme
                  implementation projects
                </li>
                <li>
                  As one of several associates to Morrison Solutions, I have
                  worked with ten Councils on reforms readiness and the future
                  for local government
                </li>
              </ul>
            </div>
          </Fade>
          <Fade up>
            <div className="section-divider" />
          </Fade>
        </Element>

        <Element name="why" className="why">
          <h2>Why SMC?</h2>
          <Fade up>
            <div className="why__content">
              <ul>
                <li>Wide and deep local government sector knowledge</li>
                <li>
                  Well-developed networks – ability to draw on associates with
                  diverse skill
                </li>
                <li>
                  Know how in the machinery of central and local government
                  policy and legislative processes
                </li>
                <li>
                  Capable and highly experienced policy and governance
                  excellence advisor to Councils
                </li>
                <li>
                  Skilled at preparing and presenting governance training to
                  elected officials
                </li>
                <li>
                  A skilled analyst, strategic planner, facilitator and engaging
                  presenter – have given many presentations in New Zealand, and
                  several in Australia and the US
                </li>
                <li>
                  A credentialed and experienced Board and advisory board
                  committee member
                </li>
                <li>
                  A capable and adaptable leader of people, teams, and change
                </li>
                <li>
                  Skilled at developing and managing relationships and engaging
                  with peers and communities
                </li>
                <li>
                  Proven success managing diverse, large-scale, and complex
                  projects
                </li>
                <li>A highly experienced and versatile operational manager</li>
              </ul>
            </div>
          </Fade>
        </Element>
      </div>
    </Fade>
  );
};

export default Home;
