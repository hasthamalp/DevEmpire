import React from "react";
import "../sass/style.css";
import Footer from "./footer";
import Landingpage from "./landingpage";
import BackToTop from "./backtotop";

const Content = () => (
  <div>
    {/* <img className="background" src="../assets/programs-img/Developer-Society-bg.png" alt="" /> */}
    <Landingpage></Landingpage>
    <BackToTop />
    <div className="container" id="container">
      <div className="align-flex">
        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - women">
                <span>Women</span>
              </div>
              <a
                href="https://research.adobe.com/adobe-india-women-in-technology-scholarship/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Adobe India Women-in-Technology Scholarship</h3>
                <img src="../assets/programs-img/Adobe.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://developer.amazon.com/en-IN/alexa/alexa-student-influencer#"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Alexa Student Influencer Program</h3>
                <img
                  className="image-cover"
                  src="../assets/programs-img/Alexa.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://aws.amazon.com/partners/ambassadors/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">APN Ambassador</h3>
                <img src="../assets/programs-img/APNAmbassador.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>

          <div className="card">
            <div className="content">
              <a
                href="https://auth0.com/ambassador-program"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Auth0 Ambassador Program</h3>
                <img src="../assets/programs-img/Auth0ambassador.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://aws.amazon.com/developer/community/community-builders/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>AWS Community Builders</h3>
                <img src="../assets/programs-img/AWSCommunityBuilders.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://aws.amazon.com/education/awseducate/cloud-ambassador-program/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>AWS Educate Cloud Ambassador</h3>
                <img src="../assets/programs-img/AWSEducateCloud.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://aws.amazon.com/education/awseducate/student-ambassador-program/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>AWS Educate Student Ambassador</h3>
                <img
                  style={{ background: "#232f3e" }}
                  className="image-contain"
                  src="../assets/programs-img/AWSEducateStudent.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://aws.amazon.com/developer/community/heroes/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">AWS Heroes</h3>
                <img className="image-fill" src="../assets/programs-img/AWSHeroes.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://app.smartsheet.com/b/form/a92f74ca555f44e4aa638a4f00a77213"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Cisco Campus Ambassador Program</h3>
                <img src="../assets/programs-img/Cisco.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://www.cncf.io/people/ambassadors/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Cloud Native Ambassador</h3>
                <img src="../assets/programs-img/CNCF.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://community.codecademy.com/chapters/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Codecademy Chapter Leader</h3>
                <img src="../assets/programs-img/Codeacademy.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.codechef.com/college-chapter/about"
                target="_blank"
                rel="noreferrer"
              >
                <h3>CodeChef College Chapter</h3>
                <img src="../assets/programs-img/Codechef.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.deeplearning.ai/ambassador/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>DeepLearning.AI Ambassador</h3>
                <img src="../assets/programs-img/DeepLearning.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://developers.facebook.com/developercircles/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Developer Circles from Facebook</h3>
                <img className="image" src="../assets/programs-img/Facebook.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://www.digitalocean.com/community/pages/digitalocean-navigators"
                target="_blank"
                rel="noreferrer"
              >
                <h3>DigitalOcean's Navigators Program</h3>
                <img src="../assets/programs-img/DigitalOcean.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - group">
                <span>Group</span>
              </div>
              <a
                href="https://developers.google.com/community/gdg/organizers"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Google Developer Groups Organizer</h3>
                <img src="../assets/programs-img/GDG.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://developers.google.com/community/dsc"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Google Developer Student Clubs</h3>
                <img src="../assets/programs-img/GDSC.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.geeksforgeeks.org/campus-ambassador-program-by-geeksforgeeks/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>GeeksforGeeks Campus Ambassador</h3>
                <img
                  className="image-contain"
                  style={{ background: "#383838" }}
                  src="../assets/programs-img/GeeksforGeeks.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - women">
                <span>Women</span>
              </div>
              <a
                href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Generation Google Scholarship</h3>
                <img src="../assets/programs-img/Google.jpg" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://education.github.com/experts"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">Github Campus Expert</h3>
                <img src="../assets/programs-img/Github-campus.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <div class="tag - teacher">
                <span>Teacher</span>
              </div>
              <a
                href="https://classroom.github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">Github Classroom</h3>
                <img src="../assets/programs-img/Github-classroom.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <div class="tag - teacher">
                <span>Teacher</span>
              </div>
              <a
                href="https://education.github.com/teachers/advisors"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">Github Campus Advisor</h3>
                <img src="../assets/programs-img/Github-advisor.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://www.gitkraken.com/ambassador"
                target="_blank"
                rel="noreferrer"
              >
                <h3>GitKraken Ambassador Program</h3>
                <img
                  style={{ background: "#0c171d" }}
                  className="image-contain"
                  src="../assets/programs-img/GitKraken.jpg"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://about.gitlab.com/community/heroes/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">GitLab Hero</h3>
                <img
                  className="image-contain"
                  style={{ background: "#4f3aa5" }}
                  src="../assets/programs-img/Gitlab.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.hackerearth.com/university/intro/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>HackerEarth Campus Ambassador</h3>
                <img src="../assets/programs-img/Hackerearth.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://zambassador.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">IBM ZAMBASSADOR</h3>
                <img className="image" src="../assets/programs-img/IBM.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://software.intel.com/content/www/us/en/develop/community/ambassadors.html"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Intel Student Ambassador</h3>
                <img src="../assets/programs-img/Intel.jpeg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - group">
                <span>Group</span>
              </div>
              <a
                href="https://kotlinlang.org/user-groups/user-group-list.html"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">Kotlin User Group</h3>
                <img src="../assets/programs-img/Kotlinusergroup.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://studentambassadors.microsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Microsoft Learn Student Ambassador</h3>
                <img src="../assets/programs-img/MLSA.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - women">
                <span>Women</span>
              </div>
              <a
                href="https://careers.microsoft.com/us/en/codess"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">Microsoft Codess</h3>
                <img src="../assets/programs-img/Codess.jpg" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a href="https://mlh.io/coaches" target="_blank" rel="noreferrer">
                <h3 className="heading">MLH Coach</h3>
                <img src="../assets/programs-img/MLHCoach.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://fellowship.mlh.io/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">MLH Fellowship</h3>
                <img
                  style={{ background: "whitesmoke" }}
                  src="../assets/programs-img/MLH-fellowship-white.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://fellowship.mlh.io/programs/prep"
                target="_blank"
                rel="noreferrer"
              >
                <h3>MLH Fellowship Prep Program</h3>
                <img
                  style={{ background: "#12304c" }}
                  src="../assets/programs-img/MLH-fellowship-blue.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://mlh.io/event-membership"
                target="_blank"
                rel="noreferrer"
              >
                <h3>MLH Event Membership Program </h3>
                <img src="../assets/programs-img/MLH.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - group">
                <span>Group</span>
              </div>
              <a
                href="https://live.mongodb.com/start-a-group/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>MongoDB Community Leader</h3>
                <img src="../assets/programs-img/MongoDB.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <div class="tag - group">
                <span>Group</span>
              </div>
              <a
                href="https://campus.mozilla.community/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading"> Mozilla Campus Club</h3>
                <img
                  style={{ background: "#2eb6b6" }}
                  src="../assets/programs-img/Mozilla.jpeg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.notion.so/Notion-Ambassadors-99857c0d03e8431ab3c430d0afa1c1fe"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Notion Ambassador</h3>
                <img
                  className="image-contain"
                  style={{ background: "#f9f5f1" }}
                  src="../assets/programs-img/Notion.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.nvidia.com/en-in/deep-learning-ai/education/ambassador-program/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>NVIDIA DLI University Ambassador</h3>
                <img src="../assets/programs-img/NVIDIA.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.oneplus.in/campus"
                target="_blank"
                rel="noreferrer"
              >
                <h3>OnePlus Student Ambassador Program</h3>
                <img src="../assets/programs-img/OnePlus.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <div class="tag - teacher">
                <span>Teacher</span>
              </div>
              <a
                href="https://www.postman.com/company/student-program/#postman-classroom-program"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Postman Classroom Program</h3>
                <img src="../assets/programs-img/PostmanClassroom.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.postman.com/company/student-program/#student-expert-program"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Postman Student Expert Program</h3>
                <img src="../assets/programs-img/Postman.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://www.postman.com/company/student-program/#student-leader-program"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Postman Student Leader Program</h3>
                <img src="../assets/programs-img/Postman-Leader.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://www.prisma.io/ambassador"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Prisma Ambassador Program </h3>
                <img
                  className="image-fill"
                  src="../assets/programs-img/PrismaProgram.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - women">
                <span>Women</span>
              </div>
              <a
                href="https://shecodesindeed.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">SheCodes Indeed</h3>
                <img src="../assets/programs-img/Indeed.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a href="https://sparkar.reskilll.com/campus" target="_blank" rel="noreferrer">
                <h3>Spark AR Campus Ambassador </h3>
                <img src="../assets/programs-img/SparkAR.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://www.ted.com/participate/ted-fellows-program"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">TED Fellows Program</h3>
                <img
                  className="image-cover"
                  src="../assets/programs-img/TedFellow.jpg"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - group">
                <span>Group</span>
              </div>
              <a
                href="https://www.tensorflow.org/community/groups"
                target="_blank"
                rel="noreferrer"
              >
                <h3>TensorFlow User Group Community</h3>
                <img
                  className="image-cover"
                  src="../assets/programs-img/TensorFlow.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://www.twilio.com/champions"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="heading">Twilio Champion</h3>
                <img
                  className="image-contain"
                  src="../assets/programs-img/Twilio.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <a
                href="https://community.uipath.com/uipath-student-developers-program/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>UiPath Student Developer Program</h3>
                <img className="image" src="../assets/programs-img/UiPath.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://unity.com/learn/student-ambassadors"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Unity Student Ambassador Program</h3>
                <img src="../assets/programs-img/Unity.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div className="card">
            <div className="content">
              <a
                href="https://careers.vmware.com/campus-ambassador-program"
                target="_blank"
                rel="noreferrer"
              >
                <h3>VMware Campus Ambassador</h3>
                <img src="../assets/programs-img/VMware.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="frame-border">
          <div className="pointer"></div>
          <div class="card">
            <div class="content">
              <div class="tag - women">
                <span>Women</span>
              </div>
              <a
                href="https://www.womentechmakers.com/ambassadors"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Women Techmakers Ambassador</h3>
                <img src="../assets/programs-img/WTM.jpg" alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
);

export default Content;
