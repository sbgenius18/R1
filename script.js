const container = document.querySelector('.js-container');
let state = 0;
const root = ReactDOM.createRoot(container);
function handleClick() {
  let menuBar = document.getElementById("menu-bar");
  let currentVisibility = getComputedStyle(menuBar).visibility;
  if (currentVisibility === "hidden") {
    menuBar.style.visibility = "visible";
    menuBar.style.opacity = "1";
  } else {
    menuBar.style.visibility = "hidden";
  }
  root.render(<App />);
}
function handleClickCourses() {
  root.render(<CoursesPage />);
}
function Option_button({ name, content, clicked }) {
  return (
    <button class={name} id={name} onClick={clicked}>
      {content}
    </button>
  );
}
function Para({ name, content }) {
  return (
    <p class={name} id={name}>
      {content}
    </p>
  );
}
function Top_bar() {
  return (
    <div class="top-bar">
      <div class="buttons-top">
        <Option_button name="home" content="Home"></Option_button>
        <Option_button name="Courses" content="Courses" clicked={handleClickCourses}></Option_button>
        <Option_button name="about" content="About us"></Option_button>
        <Option_button name="login" content="Log in"></Option_button>
      </div>
    </div>
  );
}
function Menu_bar() {
  return (
    <div class="menu-bar" id="menu-bar">
      <div class="options" id="options">
        <Option_button name="dashboard" content="Dashboard"></Option_button>
        <Option_button name="enrolled-courses" content="Enrolled Courses"></Option_button>
        <Option_button name="discussion" content="Discussion Forums"></Option_button>
        <Option_button name="profile-settings" content="Profile Settings"></Option_button>
        <Option_button name="help" content="Help and Support"></Option_button>
        <Option_button name="manage-acc" content="Account Settings"></Option_button>
      </div>
    </div>
  );
}
function Home_content() {
  return (
    <div>
      <Para name="heading" content="Rainbow Mentors LLC"></Para>
      <div class="intro" id="intro">
        <Para name="intro-sub" content="At Rainbow Mentors, LLC, we believe that learning and growth have no age limit. Whether you’re a curious child, a
          busy professional, or a retired soul seeking new skills — age is no bar. With the grace of God and our Gurus, we
          are blessed to share knowledge, well-being, and joy through a harmonious blend of ancient wisdom and modern
          learning. Our classes are designed to meet you exactly where you are, guiding you at your own pace."></Para>
        <Para name="para2" content="A calm and blissful mind is a powerful foundation — it learns better, lives deeper, and uplifts you on every step
          of your journey, whether for personal growth, spiritual fulfillment, or even monetary progress."></Para>
        <Para name="para3" content="Through the mindful practice of Yoga, the timeless beauty of Sanskrit, the soulful depth of music and sacred
          chants, and the clarity found in subjects like Math and Cybersecurity, our offerings aim to awaken the inner core
          of strength, clarity, and purpose — nurturing the body, mind, and spirit in harmony. Purposeful Teaching, Joyful
          Learning."></Para>
      </div>
    </div>
  );
}
function Bg() {
  return (
    <img src="assets/bggg.jpg" class="bg"></img>
  );
}
function Menu_button() {
  return (
    <button class="menu" id="menu" onClick={handleClick}>
      <img src="assets/menu_button.svg" width="40px"></img>
    </button>
  );
}
function Course_view() {
  return (
    <div class="course-box">
      <img src="assets/yoga.jpg" class="cbg" height={280} style={{ borderRadius: '20px'}}></img>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: 'Poppins', color: 'white', marginTop: '0px', display: 'inline', position: 'relative', paddingTop: 10, paddingLeft: 20, fontSize: 25 }}>Yoga for all</p>
        <p style={{ fontFamily: 'Poppins', color: 'white', marginTop: '0px', display: 'inline', position: 'relative', paddingTop: 10,paddingBottom: 20, paddingLeft: 20,paddingRight:20, fontSize: 15 }}>Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being.</p>
        <button style={{alignSelf: "flex-end", margin: '20px',width: "100px",height:"50px"}}>
          Enroll now !  
        </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="page" id="page">
      <Bg />
      <Top_bar />
      <Menu_bar />
      <Menu_button />
      <Home_content />
    </div>
  );
}
function CoursesPage() {
  return (
    <div className="page" id="page">
      <Bg />
      <Top_bar />
      <Course_view />
    </div>
  );
}
root.render(<App />);
