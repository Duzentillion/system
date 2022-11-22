import logo from './logo.svg';
import './App.css';

function App() {
  const value = 40;
  return (
    <div className="App">

      <input type="checkbox" id="check"></input>

      <header>
        <label for="check">
          <i class="fas fa-bars" id="sidebar_btn"></i>
        </label>
        <div class="left_area">
          <h3>Duz <span>School</span></h3>
        </div>
        <div class="right_area">
          <a href="#" class="logout_btn">Logout</a>
        </div>
      </header>

      <div class="mobile_nav">
        <div class="nav_bar">
          <img src="logo512.png" class="mobile_profile_image" alt=""></img>
          <i class="fa fa-bars nav_btn"></i>
        </div>
        <div class="mobile_nav_items">
          <a href="#"><i class="fa-solid fa-desktop"></i><span>Dashboard</span></a>
          <a href="#"><i class="fa-solid fa-book"></i><span>Addressbuch</span></a>
          <a href="#"><i class="fa-solid fa-newspaper"></i><span>News</span></a>
          <a href="#"><i class="fa-solid fa-user"></i><span>Profil</span></a>
          <a href="#"><i class="fa-solid fa-gears"></i><span>Administration</span></a>
        </div>
      </div>

      <div class="sidebar">
        <div class="profile_info">
          <img src="logo512.png" class="profile_image" alt=""></img>
          <h4>Max Müller</h4>
        </div>
        <a href="#"><i class="fa-solid fa-desktop"></i><span>Dashboard</span></a>
        <a href="#"><i class="fa-solid fa-book"></i><span>Addressbuch</span></a>
        <a href="#"><i class="fa-solid fa-newspaper"></i><span>News</span></a>
        <a href="#"><i class="fa-solid fa-user"></i><span>Profil</span></a>
        <a href="#"><i class="fa-solid fa-gears"></i><span>Administration</span></a>
      </div>

      <div class="content">


        <div class="flex-div-hight-0">
          <h2 class="flex-h2-hight-0">Dashboard</h2>
        </div>

        <div class='flex-100'><h2 class='flex-h2'>NEWS</h2><div class='flex-33'><h2 class='flex-h2'>Lorem ipsum dolor sit ame</h2><div class='flex-div'><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div></div><div class='flex-33'><h2 class='flex-h2'>Lorem ipsum dolor sit ame</h2><div class='flex-div'><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</p></div></div>

        </div>

      </div>
    </div>

  );
}

export default App;
