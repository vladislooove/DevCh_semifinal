import React from 'react';
import ReactDOM from 'react-dom';

import Projects from './components/projects';
import Footer from './components/footer';


//this is my first react expirience, so will be a lot of govnocode :(

//declare header data array

var headerNav = [{
  id: 0,
  name: 'Переглянути проекти',
  href: '#projects',
  isActive: true
},{
  id: 1,
  name: 'Подати проект',
  href: '#addProject',
  isActive: false
},{
  id: 2,
  name: 'Допомога',
  href: '#help',
  isActive: false
},{
  id: 3,
  name: 'Контакти',
  href: '#contacts',
  isActive: false
}]

//declare componenst used to render

var pages = [{
  component: 'Подати проект. Подайте свій проект та реалізуйте його!!1',
  href: '#addProject',
  isActive: false,
  id: 0
},{
  component: <Projects />,
  href: '#projects',
  isActive: true,
  id: 1
},{
  component: 'Розділ частих запитань',
  href: '#help',
  isActive: false,
  id: 2
},{
  component: 'Новини проекта',
  href: '#news',
  isActive: false,
  id: 3
},{
  component: 'Зворотній зв\'язок та контактні дані організації',
  href: '#contacts',
  isActive: false,
  id: 4
}]

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      headerNav: headerNav,
      pages: pages,
      isLoginned: true,
      userMenu: false,
      searcBar: false,
      mobileMenu: false
    }
  }

  surfPage(el, event){
    //set active state to nav
    var links = this.state.headerNav;
    for(var i in links){
      if(links[i].name.toLowerCase() != el.name.toLowerCase()){
        links[i].isActive = false;
      }
      else{
        links[i].isActive = true;
      }
    }

    //change rendered page state
    for(var i in pages){
      if(pages[i].href == el.href){
        pages[i].isActive = true;
      }
      else{
        pages[i].isActive =false
      }
    }
    this.setState({
      headerNav: links,
      pages: pages
    });
  }

  userMenuToggle(){
    this.setState({userMenu: (!this.state.userMenu)})
  }

  searcBarToggle(){
    this.setState({searcBar: (!this.state.searcBar)})
  }

  mobileMenuToggle(){
    this.setState({mobileMenu: (!this.state.mobileMenu)})
  }
  render(){
    return(
      <div className="page">
        <div className="wrapper">
          <header className="main-header"
                  role="banner">
            <div className="container">
              <div className="main-header__content">
                <a className="main-header__logo"
                   href="/"
                   alt="Назва компанії">
                  <img src="images/logo.png"
                       className="img-responsive" />
                </a>
                <div className="main-header__section">
                  <div role="button" 
                       className={this.state.mobileMenu ? 'mobile-menu-toggle open' : 'mobile-menu-toggle'}
                       onClick={this.mobileMenuToggle.bind(this)}
                       aria-label="Головне меню">
                    <svg className="icon icon--menu"> 
                      <use xlinkHref="images/svg-symbols.svg#menu"></use> 
                    </svg>
                  </div>
                  <nav className="main-header__nav hidden-mobile" role="navigation">
                    <ul className="nav navbar-nav">
                      {
                        this.state.headerNav.map(function(el){
                          return (
                              <li key={el.id}
                                  className={el.isActive ? 'active' : ''}>
                                <a href={el.href}
                                   onClick={this.surfPage.bind(this, el)}>
                                  {el.name}
                                </a>
                              </li>
                            )
                        }, this)
                      }
                    </ul>
                  </nav>
                  <div className="main-header__membership hidden-mobile">
                    <div className="membership membership--membered">
                      <div className="membership__thumbnail">
                        <img src="images/user.jpg" alt="Имечко Фамилия" />
                      </div>
                      <div className="membership__actions">
                        <div role="button"
                             className={this.state.userMenu ? 'membership__actions-btn open' : 'membership__actions-btn'}
                             onClick={this.userMenuToggle.bind(this)}>
                            Имечко Фамилия
                          <svg className="icon icon--arrow-down"> 
                            <use xlinkHref="images/svg-symbols.svg#arrow-down"></use> 
                          </svg>
                        </div>
                        <ul className={this.state.userMenu ? 'nav open' : 'nav'}>
                          <li>
                            <a href="#">Exit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={this.state.searcBar? 'main-header__search-bar open hidden-mobile' :'main-header__search-bar hidden-mobile'}>
                    <input type="text"
                           className="main-header__search-field" />
                    <div className="main-header__search-toggle"
                         role="button"
                         onClick={this.searcBarToggle.bind(this)}>
                      <svg className="icon icon--search">
                        <use xlinkHref="images/svg-symbols.svg#search">
                        </use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.mobileMenu ? 'mobile-menu open' : 'mobile-menu'}>
              <div className="main-header__nav">
                <ul className="nav navbar-nav">
                  {
                    this.state.headerNav.map(function(el){
                      return (
                          <li key={el.id}
                              className={el.isActive ? 'active' : ''}>
                            <a href={el.href}
                               onClick={this.surfPage.bind(this, el)}>
                              {el.name}
                            </a>
                          </li>
                        )
                    }, this)
                  }
                </ul>
              </div>
            </div>
          </header>
          {
            this.state.pages.map(function(el){
              if(el.isActive){
                return (
                    <main key={el.id} role="main">{el.component}</main>
                  )
              }
            }, this)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))