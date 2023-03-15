import "./styles.sass";
import ArrowDown from "../../assets/icon-arrow-down.svg";
import IconCalendar from "../../assets/icon-calendar.svg";
import IconTodo from "../../assets/icon-todo.svg";
import IconReminders from "../../assets/icon-reminders.svg";
import IconPlanning from "../../assets/icon-planning.svg";
import IconMenu from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close-menu.svg";
export default function Menu() {
  function open() {
    var icon = document.querySelector(".icon")
    var box = document.getElementById("box");
    box.classList.toggle("open")
    if (box.classList.contains("open")) {
      icon.classList.add("rotate")
    } else {
      icon.classList.remove("rotate")
    }
  }
  function open2() {
    var icon2 = document.querySelector(".icon2");
    var box2 = document.getElementById("box2");
    box2.classList.toggle("open2")
    if (box2.classList.contains("open2")) {
      icon2.classList.add("rotate")
    } else {
      icon2.classList.remove("rotate")
    }
  }
  function menubar (){
    div = document.querySelector(".div").classList.add("menuMobile")
  }
  function closeMenu(){
    div = document.querySelector(".div").classList.remove("menuMobile")
    
  }
  return (
    <>
      <div className="menuBar" onClick={menubar}>
        <img src={IconMenu} alt="menu bar" />
      </div>
      <div className="div">
        <nav className="navbar">
          <img src={IconClose} alt="Close menu" id="close" onClick={closeMenu}/>
          <ul className="menu">
            <li>
              <div className="select" onClick={open}>
                <p>Features  <img src={ArrowDown} alt="Arrow up" className="icon" /></p>
                <div id="box" className="box">
                  <div className="option">
                    <a href="#"><img src={IconTodo} alt="Todo Icon" />Todo List</a>
                  </div>
                  <div className="option">
                    <a href="#"><img src={IconCalendar} alt="Calendar Icon" />Calendar</a>
                  </div>
                  <div className="option">
                    <a href="#"><img src={IconReminders} alt="Reminders Icon" />Reminders</a>
                  </div>
                  <div className="option">
                    <a href="#"><img src={IconPlanning} alt="Planning Icon" />Planning</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="select" onClick={open2}>
                <p>Company <img src={ArrowDown} alt="Arrow up" className="icon2" /></p>
                <div id="box2" className="box">
                  <div className="option">
                    <a href="#">History</a>
                  </div>
                  <div className="option">
                    <a href="#">Our Team</a>
                  </div>
                  <div className="option">
                    <a href="#">blog</a>
                  </div>
                </div>
              </div>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="buttons">
            <button className="btn-tertiary">Login</button>
            <button className="btn-secondary">Register</button>
          </div>
        </nav>
      </div>
    </>
  );
}
