import './App.css';
import $ from 'jquery';
import Card from "./components/profile"
function App() {

  class StickyNavigation {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $('.et-hero-tab').click(function (event) {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }

    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }

    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }

    checkTabContainerPosition() {
      let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
      if ($(window).scrollTop() > offset) {
        $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
      } else {
        $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
      }
    }

    findCurrentTabSelector() {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $('.et-hero-tab').each(function () {
        let id = $(this).attr('href');
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId !== newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }

    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css('width');
        left = this.currentTab.offset().left;
      }
      $('.et-hero-tab-slider').css('width', width);
      $('.et-hero-tab-slider').css('left', left);
    }
  }

  new StickyNavigation();
  window.addEventListener('load', function () {
    const splashScreen = document.querySelector('.splash-screen');
    const content = document.querySelector('.content');
    const topDiv = document.querySelector('.top-div');
    const leftDiv = document.querySelector('.left-div');
    const rightDiv = document.querySelector('.right-div');
    const bottomDiv = document.querySelector('.bottom-div');

    setTimeout(() => {
      topDiv.style.height = '50%'; // Adjust the height as needed
      bottomDiv.style.height = '50%'; // Adjust the height as needed
      leftDiv.style.width = '50%'; // Adjust the width as needed
      rightDiv.style.width = '50%'; // Adjust the width as needed
    }, 1000); // Adjust the delay as needed

    setTimeout(() => {
      splashScreen.style.display = 'none';
      content.style.display = 'block';
    }, 2000); // Adjust the delay as needed
  });



  return (
    <>

      <div className="splash-screen">
        <div className="center-logo">
          MME
        </div>
        <div className="top-div"></div>
        <div className="left-div"></div>
        <div className="right-div"></div>
        <div className="bottom-div"></div>
      </div>

      <section className="et-hero-tabs">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">
              Hello
            </p>

            <ul className="content__container__list">
              <li className="content__container__list__item">orsa</li>
              <li className="content__container__list__item">nemox</li>
              <li className="content__container__list__item">mstf</li>
              <li className="content__container__list__item">users !</li>
            </ul>
          </div>
        </div>

        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#tab-es6">ES6</a>
          <a className="et-hero-tab" href="#tab-flexbox">Flexbox</a>
          <a className="et-hero-tab" href="#tab-react">React</a>
          <a className="et-hero-tab" href="#tab-angular">Angular</a>
          <a className="et-hero-tab" href="#tab-other">Other</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>

      <main className="et-main">
        <section className="et-slide" id="tab-es6">
          <Card></Card>
        </section>
        <section className="et-slide" id="tab-flexbox">
          <h1>Flexbox</h1>
          <h3>something about flexbox</h3>
        </section>
        <section className="et-slide" id="tab-react">
          <h1>React</h1>
          <h3>something about react</h3>
        </section>
        <section className="et-slide" id="tab-angular">
          <h1>Angular</h1>
          <h3>something about angular</h3>
        </section>
        <section className="et-slide" id="tab-other">
          <h1>Other</h1>
          <h3>something about other</h3>
        </section>
      </main>


    </>
  )
}

export default App;


    // <script src="">
    // </script>
    // <script src="/particles.js-master/demo/js/app.js">
    // </script>