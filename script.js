function sendJsonRequest(url, data, callback) {
  fetch(url, {
    method: "POST", // or "GET" if you're just requesting
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data) // skip this if using GET
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(jsonData => {
      // Call the callback function when data arrives
      callback(jsonData);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// Example usage:
// sendJsonRequest("http://192.168.0.104:10000/login",
//   { email: "shreyasbkg@gmail.com", password: "DmRY117F" },
//   function (responseData) {
//     console.log("Server replied:", responseData);
//   }
// );













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
function handleClickHome() {
  root.render(<App />);
}
function handleClickLogin() {
  root.render(<Login state=""></Login>);
}
function handleClickLoginup() {
  root.render(<Login state="Please Wait While We Process Your Request"></Login>);
  sendJsonRequest("https://server-trial-0s5z.onrender.com/login",
    { email: document.getElementById("email").value, password: document.getElementById("password").value },
    function (responseData) {
      if (responseData.status==="successful"){
        root.render(<Login state="Login Successful"></Login>);
        console.log("Login was successful");
      }
      else{
        root.render(<Login state="Invalid Credentials"></Login>);
        console.log("Login Failed");
      }
      
    }
  );
}
function handleClickSignup() {
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
        <Option_button name="home" content="Home" clicked={handleClickHome}></Option_button>
        <Option_button name="Courses" content="Courses" clicked={handleClickCourses}></Option_button>
        <Option_button name="about" content="About us"></Option_button>
        <Option_button name="login" content="Log in" clicked={handleClickLogin}></Option_button>
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
      <Para name="heading" content="Rainbow Mentors"></Para>
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
function Course_view({ indivclass, imgclass, Name, thumbnail, courseName, content }) {
  return (
    <div class={Name}>
      <img src={thumbnail} className={imgclass}></img>
      <div className={indivclass}>
        <p style={{ fontFamily: 'Poppins', color: 'white', marginTop: '0px', paddingTop: 10, paddingLeft: 20, fontSize: 25 }}>{courseName}</p>
        <p style={{ fontFamily: 'Poppins', color: 'white', marginTop: '0px', paddingTop: 10, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, fontSize: 15 }}>{content}</p>
        <button style={{ fontFamily: 'Poppins', fontSize: "15px", alignSelf: "flex-end", margin: '20px', marginRight: '30px', width: "120px", height: "50px", border: "none", borderRadius: "8px", color: "white", backgroundColor: "rgba(180, 44, 44, 1)" }}>
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
function LoginBox({message}) {
  return (
    <div className="Login-box-out">
      <div className="xzc">
        <p className="loginask">Welcome Back !</p>
        <p className="currentloginstate">{message}</p>
        <input className="email" id="email" type="email" placeholder="Enter email" required></input>
        <input className="password" id="password" type="password" placeholder="Enter password" required></input>
        <p style={{ textAlign: "center", fontFamily: 'poppins', fontSize: '13px', marginTop: "-10px", marginBottom: "10px", color: "cyan" }}>Forgot Password ?</p>
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
          <button className="loginbutt" id="loginbutt" onClick={handleClickLoginup}>Log in</button>
          <button className="signupbutt" id="signupbutt" onClick={handleClickSignup}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
function Login({state}) {
  return (
    <div className="page" id="page">
      <Bg />
      <Top_bar />
      <LoginBox message={state}></LoginBox>
    </div>
  );
}
function CoursesPage() {
  return (
    <div className="page" id="page">
      <Bg />
      <Top_bar />
      <div className="courseContainer">
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-1" thumbnail="assets/yoga.jpg" courseName="Yoga For all" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-2" thumbnail="assets/sanskrit.png" courseName="Sanskrit Language" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-3" thumbnail="assets/hindustani.png" courseName="Hindustani Music" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-4" thumbnail="assets/sacred.png" courseName=" Sacred Chants & Inner Meaning" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-5" thumbnail="assets/devotional.png" courseName="Devotional Music" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-6" thumbnail="assets/math.png" courseName="Math (Grades 5–10)" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
        <Course_view indivclass="cb1" imgclass="cb1-img" Name="course-box-7" thumbnail="assets/cyber.png" courseName="Cybersecurity for All" content="Yoga for All is an inclusive course that introduces basic yoga techniques suitable for all ages and fitness levels. You’ll learn simple postures, breathing exercises, and relaxation methods to improve flexibility, strength, and mental calm. Modifications are provided to ensure everyone can participate comfortably and safely. Join us to build balance, reduce stress, and enhance overall well-being."></Course_view>
      </div>

    </div>
  );
}
root.render(<App />);

