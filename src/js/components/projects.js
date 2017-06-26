import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

import {projects, stepFilter, categoryFilter, locationFilter} from '../data/data'
import ProjectSlider from './project-slider'


class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayedProjects: projects,
      stepFilter: stepFilter,
      categoryFilter: categoryFilter,
      locationFilter: locationFilter,
      stepFilterOpen: false,
      locationFilterOpen: false,
      categoryFilterOpen: false,
      checkedCategory: 0,
      gridLimit: 6,
      value: { min: 0, max: 50000 },
      isValidInput: { min: true, max: true}
    }
  }

  stepFilterToggle(){
    this.setState({stepFilterOpen: !(this.state.stepFilterOpen)})
  }

  categoryFilterToggle(){
    this.setState({categoryFilterOpen: !(this.state.categoryFilterOpen)})
  }

  locationFilterToggle(){
    this.setState({locationFilterOpen: !(this.state.locationFilterOpen)})
  }

  filterProjects(el, event){
    event.preventDefault();

    var filteredProjects = [];

    //get checked category filter and update state
    //first iteration to filter projects
    var categoryFilter = this.state.categoryFilter;
    var filteredCategoryProjects = [];
    var checkedCategory = [];

    for(var i in categoryFilter){
      if(categoryFilter[i].id == el.id){
        categoryFilter.map(function(filter){
          if(filter.id == el.id){
            filter.isChecked = !(filter.isChecked);
          }
        })
        this.setState({categoryFilter: categoryFilter})
      }
    }

    categoryFilter.map(function(filter){
      if(filter.isChecked){
        checkedCategory.push(filter.name);
      }
    })

    //set state for checked category
    this.setState({checkedCategory:checkedCategory.length});

    //add all filters when no one chosen
    if(!checkedCategory.length){
      for(var i in categoryFilter){
        checkedCategory.push(categoryFilter[i].name);
      }
    }

    for(var i in projects){
        if(checkedCategory.indexOf(projects[i].category) != -1){
          filteredCategoryProjects.push(projects[i])
      }
    }

    var stepFilter = this.state.stepFilter;
    var filteredStepProjects =  [];
    //do same with stepFilter
    //second iteration
    var checkedStep = [];
    for(var i in stepFilter){
      if(stepFilter[i].id == el.id){
          stepFilter.map(function(filter){
            if(filter.id !== el.id ){
              filter.isChecked = false;
            }
            else{
              filter.isChecked = true;
            }
        })
        this.setState({stepFilter: stepFilter})
      }
    }

    stepFilter.map(function(filter){
      if(filter.isChecked){
        checkedStep.push(filter.name)
      }
    })

    if(!checkedStep.length){
      for(var i in stepFilter){
        checkedStep.push(stepFilter[i].name);
      }
    }

    for(var i in filteredCategoryProjects){
      if(checkedStep.indexOf(filteredCategoryProjects[i].step) != -1){
        filteredStepProjects.push(filteredCategoryProjects[i])
      }
    }

    var locationFilter = this.state.locationFilter;
    var filteredLocationProjects = [];
    //oh..again
    //third iteration
    var checkedLocation = [];
    for(var i in locationFilter){
      if(locationFilter[i].id == el.id){
          locationFilter.map(function(filter){
            if(filter.id !== el.id ){
              filter.isChecked = false;
            }
            else{
              filter.isChecked = true;
            }
        })
        this.setState({locationFilter: locationFilter})    
      }
    }

    locationFilter.map(function(filter){
      if(filter.isChecked){
        checkedLocation.push(filter.name);
      }
    })

    if(!checkedLocation.length){
      for(var i in locationFilter){
        checkedLocation.push(locationFilter[i].name);
      }
    }

    for(var i in filteredStepProjects){
      if(checkedLocation.indexOf(filteredStepProjects[i].location) != -1){
        filteredLocationProjects.push(filteredStepProjects[i])
      }
    }

    //fourth iteration to filter by price
    var min = this.state.value.min;
    var max = this.state.value.max;

    var filteredPriceProjects = []

    filteredLocationProjects.map(function(el){
      if((parseInt(el.budget.replace(/\s+/g, '')) >= min && parseInt(el.budget.replace(/\s+/g, '')) <= max)){
        filteredPriceProjects.push(el);
      }
    })

    var result = filteredPriceProjects;

    this.setState({
      displayedProjects: result
    })
  }

  resetFilters(event){
    var stepFilter = this.state.stepFilter;
    var categoryFilter = this.state.categoryFilter;
    var locationFilter = this.state.locationFilter;

    stepFilter.map(function(filter){
      filter.isChecked = false;
    })

    categoryFilter.map(function(filter){
      filter.isChecked = false;
    })

    locationFilter.map(function(filter){
      filter.isChecked = false;
    })

    this.setState({
      stepFilter: stepFilter,
      categoryFilter: categoryFilter,
      locationFilter: locationFilter,
      value: {min: 0, max: 50000},
      displayedProjects: projects
    })
  }

  loadProjects(){
    this.setState({gridLimit: this.state.gridLimit + 3})
  }

  renderProject(el, event){
    var projectHash = el.id;
    this.projectHash = class extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          tabActive: true
        }
      }

      tabToggle(){
      this.setState({tabActive: !(this.state.tabActive)})
      }


      render(){
        return (
          <div className="container">
            <article className="project">
              <div className="row">
                <div className="col-sm-9">
                  <div className="project__main">
                    <div className="project__header">
                      <h1 className="project__title">
                        <span>{el.name}</span>
                        <span className={"project__status project__status--" + el.stepState}>
                          {el.step}
                        </span>
                      </h1>
                      <div className="project__date">
                        Подано {el.date}
                      </div>
                    </div>
                    <div className="project__info">
                      <div className="project__info-section">
                        <div className="project__info-title">
                          Автор проекту
                        </div>
                        <div className="project__author">
                          <div className="project__author-thumbnail">
                            <img src={"images/" + el.authorImg}
                                 alt={el.author} />
                          </div>
                          <div className="project__author-name">
                            {el.author}
                          </div>
                        </div>
                      </div>
                      <div className="project__info-section">
                        <div className="project__info-title">
                          Категорія
                        </div>
                        <div className="project__category">
                          <div className={"project__category-thumbnail project__category-thumbnail--" + el.categoryCode}>
                            <svg className={"icon icon--" + el.categoryCode}> 
                              <use xlinkHref={"images/svg-symbols.svg#" + el.categoryCode }></use> 
                            </svg>
                          </div>
                          <div className="project__category-name">
                            {el.category}
                          </div>
                        </div>
                      </div>
                      <div className="project__info-section">
                        <div className="project__info-title">
                          Код
                        </div>
                        <div className="project__code">
                          {el.id}
                        </div>
                      </div>
                    </div>
                    <div className="project__content">
                      <div className="project__tabs">
                        <div className="project__tabs-controls">
                          <div className={this.state.tabActive ? 'project__tabs-control active' : 'project__tabs-control'}
                               onClick={this.tabToggle.bind(this)}
                               role="button">
                            <svg className="icon icon--info"> 
                              <use xlinkHref="images/svg-symbols.svg#info"></use> 
                            </svg>
                            Інформація про проект
                          </div>
                          <div className={!(this.state.tabActive) ? 'project__tabs-control active' : 'project__tabs-control'}
                               role="button"
                               onClick={this.tabToggle.bind(this)}>
                            <svg className="icon icon--hourglass"> 
                              <use xlinkHref="images/svg-symbols.svg#hourglass"></use> 
                            </svg>
                            Таймлайн проекту
                          </div>
                        </div>
                        <div className="project__tabs-content">
                          <div className={this.state.tabActive ? 'project__tabs-content-section active' : 'project__tabs-content-section'}>
                            <div className="project__details">
                              <div className="project__details-label">
                                Короткий опис
                              </div>
                              <div className="project__details-content">
                                {el.shortDesc}
                              </div>
                              <div className="row">
                                <div className="col-xs-6">
                                  <div className="project__details-label">
                                    Місто
                                  </div>
                                  <div className="project__details-content">
                                    {el.location}
                                  </div>
                                  <div className="project__details-label">
                                    Район
                                  </div>
                                  <div className="project__details-content">
                                    Деснянський
                                  </div>
                                </div>
                                <div className="col-xs-6">
                                  <div className="project__details-label">
                                    Адреса
                                  </div>
                                  <div className="project__details-content">
                                    вул. Раїси Окіпної 5а
                                  </div>
                                  <div className="project__details-label">
                                    Час на реалізацію
                                  </div>
                                  <div className="project__details-content">
                                    2 місяці
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={!(this.state.tabActive) ? 'project__tabs-content-section active' : 'project__tabs-content-section'}>
                            <div className="project__details">test</div>
                          </div>                        
                        </div>
                      </div>
                      <div className="project__pricing">
                        <div className="project__budget">
                          <div className="project__budget-label">
                            Бюджет на реалізацію
                          </div>
                          <div className="project__budget-val">
                            {el.budget}
                          </div>
                        </div>
                        <div className="project__pricing-download"
                             role="button">
                          <svg className="icon icon--download"> 
                            <use xlinkHref="images/svg-symbols.svg#download"></use> 
                          </svg>
                          Розрахунок бюджету
                        </div>
                      </div>
                      <div className="project__details">
                        <div className="project__details-title">
                          Опис
                        </div>
                        <div className="project__details-label">
                          Проблема
                        </div>
                        <div className="project__details-content">
                          Будь-якій розсудливій людині має бути зрозуміло, що хворий, що знаходиться в реанімації, як ніхто інший? Потребує психологічної підтримки близьких людей. Є величезна кількість прикладів,
                        </div>
                        <div className="project__details-label">
                          Рішення
                        </div>
                        <div className="project__details-content">
                          Користувач має право використовувати ресурс, розміщуючи на ньому файли (далі по тексту файли), які належать виключно йому. Дані Умови не пропонують Адміністрації ресурсу прав власності на файли, розміщені на ресурсі.
                        </div>
                        <div className="project__details-label">
                          Результат
                        </div>
                        <div className="project__details-content">
                          Користувач особисто повинен переконатися, що в його файлах немає шкідливих програм, вірусів, троянів, програм-шпигунів, хробаків інших зловредів або шкідливого коду.
                        </div>
                        <div className="project__details-label">
                          Для кого проект
                        </div>
                        <div className="project__details-content">
                          Cодержащие программы, перебирающие номера файлов или другим образом создающие высокую нагрузку на Ресурс, а также программы, которые могут нанести ущерб ресурсу и/или вызвать сбой технических или программных средств ресурса и/или иным образом нарушить его нормальную работу;содержащие программы, перебирающие номера.
                        </div>
                        <div className="project__details-label">
                          Основні етапи реалізації
                        </div>
                        <div className="project__details-content">
                          Містять автоматизовані програми для збору інформації або взаємодії з сервісом.
                        </div>
                        <div className="project__details-label">
                          Умови використання
                        </div>
                        <div className="project__details-content">
                          Всі суперечки, що виникли в з'язку з даними Умовами та  або Політикою конфіденційності регулюються законодавством Мальти.
                        '</div>
                        <div className="project-slider-title">Фото / схеми / креслення / тощо</div>
                      </div>
                      <div className="project-slider">
                        <ProjectSlider />
                      </div>
                      <div className="project__details">
                        <div className="project__files">
                          <div className="project__files-title">
                            Файли
                          </div>
                          <a className="project__file" 
                             target="_blank"
                             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <span className="project__file-name">
                              Форма проекту з додатком
                            </span>
                            <span className="project__file-ext">.doc</span>
                          </a>
                          <a className="project__file" 
                             target="_blank"
                             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <span className="project__file-name">
                              Картка оцінки проекту
                            </span>
                            <span className="project__file-ext">.pdf</span>
                          </a>
                          <a className="project__file" 
                             target="_blank"
                             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <span className="project__file-name">
                              Бланк для голосування (додаток 3 до положення про бюджет соціальних проектів)
                            </span>
                            <span className="project__file-ext">.doc</span>
                          </a>
                        </div>
                        <div className="project__examples">
                          <div className="project__examples-title">
                            приклади подібних рішень
                          </div>
                          <a className="project__examples-link"
                             href="#">
                            companyname.com
                          </a>
                        </div>
                      </div>
                      <div className="project__details project__details--notes">
                        <div className="project__details-label">
                          Обмеження та примітки
                        </div>
                        <div className="project__details-content">
                          Будь-якій розсудливій людині має бути зрозуміло, що хворий, що знаходиться в реанімації, як ніхто інший потребує психологічної підтримки близьких людей. є величезну кількість прикладів,
                        </div>
                        <div className="project__details-content">
                          Коли тільки одна присутність поруч близької людини сприяло одужанню,надавало сили та було неможливо ні з якими санітарними нормами психологічною допомогою.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <aside className="project__aside" role="complementary">
                    <div className="project__timeline">
                      <div className="project__timeline-section">
                        <div className="project__timeline-label">людей підтримали проект</div>
                        <div className="project__timeline-content">{el.voted}</div>
                      </div>
                      <div className="project__timeline-section">
                        <div className="project__timeline-label">днів до закінчення голосування</div>
                        <div className="project__timeline-content">14</div>
                      </div>
                    </div>
                    <form action="/"
                          className="project__form">
                      <label className="project__form-title">
                        Проголосувати
                      </label>
                      <input type="email"
                             className="project__form-input"
                             required="required"
                             placeholder="Введіть ваш email" />
                      <div className="help-block">
                        На Ваш email буде відправлений лист,перейдіть за посиланням,
                        та проголосуйте.
                      </div>
                      <input type="checkbox"
                             className="project__form-checkbox"
                             id="project__form-checkbox" />
                      <label htmlFor="project__form-checkbox">
                        Повідомити мене про зміни в проекті.
                      </label>
                      <button className="project__form-submit">
                        Проголосувати
                      </button>
                    </form>
                    <div className="project__sharing-title">Поділитися в мережі</div>
                    <div className="project__sharing">
                      <ul className="nav navbar-nav">
                        <li>
                          <a href={"http://twitter.com/share?text=" + el.name + "&url=" + window.location}
                             target="_blank"
                             className="twitter"
                             aria-label="Поділітися в twitter">
                            <svg className="icon icon--twitter"> 
                              <use xlinkHref="images/svg-symbols.svg#twitter"></use> 
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={"https://vk.com/share.php?url=" + window.location}
                             target="_blank"
                             className="vk"
                             aria-label="Поділітися в vk">
                            <svg className="icon icon--vk"> 
                              <use xlinkHref="images/svg-symbols.svg#vk"></use> 
                            </svg>
                            </a>
                        </li>
                        <li>
                          <a href={"https://plus.google.com/share?url=" + window.location}
                             target="_blank"
                             className="google-plus"
                             aria-label="Поділітися в google plus">
                            <svg className="icon icon--google-plus"> 
                              <use xlinkHref="images/svg-symbols.svg#google-plus"></use> 
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location}
                             target="_blank"
                             className="facebook"
                             aria-label="Поділітися в facebook">
                            <svg className="icon icon--facebook"> 
                              <use xlinkHref="images/svg-symbols.svg#facebook"></use> 
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </article>
          </div>
        )
      }
    }

    ReactDOM.render( React.createElement(this.projectHash), document.querySelector('.projects'))
  }

  setMinValue(event){
    var maxValue = this.state.value.max;
    var minValue = event.target.value;
    if(minValue > maxValue || minValue < 0){
      minValue = 0;
      this.setState({
        isValidInput: {
          min: false,
          max: this.state.isValidInput.max
        }
      })
    }
    else{
      this.setState({
        isValidInput: {
          min: true,
          max: this.state.isValidInput.max
        }
      })
    }

    this.setState({
      value: {
        min: Number(minValue),
        max: maxValue
      }
    })
  }

  setMaxValue(event){
    var minValue = this.state.value.min;
    var maxValue = event.target.value;
    if(maxValue < minValue || maxValue < 0 || maxValue > 50000){
      maxValue = 50000;
      this.setState({
        isValidInput: {
          min: this.state.isValidInput.min,
          max: false
        }
      })
    }
    else{
      this.setState({
        isValidInput: {
          min: this.state.isValidInput.min,
          max: true
        }
      }) 
    }

    this.setState({
      value: {
        min: minValue,
        max: Number(maxValue)
      }
    })
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <aside className="projects__filter" role="complementary">
                <div className="filter filter--step">
                  <div role="button"
                       className={this.state.stepFilterOpen ? 'filter__toggle open' : 'filter__toggle'}
                       onClick={this.stepFilterToggle.bind(this)}
                       aria-label="Меню стану проекту">
                    Оберіть стан проекту...
                    <svg className="icon icon--arrow-down"> 
                      <use xlinkHref="images/svg-symbols.svg#arrow-down"></use> 
                    </svg>
                  </div>
                  <ul className={this.state.stepFilterOpen ? 'nav open' : 'nav'}>
                    {
                      this.state.stepFilter.map(function(el){
                        return (
                            <li key={el.id}>
                              <a href="#"
                                 className={el.isChecked ? 'checked' : ''} 
                                 onClick={this.filterProjects.bind(this, el)}
                                 aria-checked={el.isChecked ? 'true' : 'false'}>
                                {el.name}
                              </a>
                            </li>
                          )
                      },this)
                    }
                  </ul>
                </div>
                <div className="filter__title">відображення результатів</div>
                <div className="filter filter--category">
                  <div role="button"
                       className={this.state.categoryFilterOpen ? 'filter__toggle open' : 'filter__toggle'}
                       onClick={this.categoryFilterToggle.bind(this)}
                       aria-label="Меню категорій проекту">
                    <div>
                      <svg className="icon icon--list"> 
                        <use xlinkHref="images/svg-symbols.svg#list"></use> 
                      </svg>
                      КатегорІї
                      <span className="filter__quantity">{this.state.checkedCategory}</span>
                    </div>
                    <svg className="icon icon--arrow-down"> 
                      <use xlinkHref="images/svg-symbols.svg#arrow-down"></use> 
                    </svg>
                  </div>
                  <ul className={this.state.categoryFilterOpen ? 'nav open' : 'nav'}>
                    {
                      this.state.categoryFilter.map(function(el){
                        return (
                            <li key={el.id}>
                              <input type="checkbox"
                                     id={el.id}
                                     className={el.isChecked ? 'checked' : ''} />  
                              <label htmlFor={el.id}
                                     onClick={this.filterProjects.bind(this, el)}
                                     aria-checked={el.isChecked ? 'true' : 'false'}>
                                {el.name}
                              </label>
                            </li>
                          )
                      }, this)
                    }
                  </ul>
                </div>
                <div className="filter filter--location">
                  <div role="button"
                       className={this.state.locationFilterOpen ? 'filter__toggle open' : 'filter__toggle'}
                       onClick={this.locationFilterToggle.bind(this)}
                       aria-label="Меню місцезнаходження проекту">
                    <div>
                      <svg className="icon icon--map"> 
                        <use xlinkHref="images/svg-symbols.svg#map"></use> 
                      </svg>
                      Місто\Район
                    </div>
                    <svg className="icon icon--arrow-down"> 
                      <use xlinkHref="images/svg-symbols.svg#arrow-down"></use> 
                    </svg>
                  </div>
                  <ul className={this.state.locationFilterOpen ? 'nav open' : 'nav'}>
                    {
                      this.state.locationFilter.map(function(el){
                        return (
                          <li key={el.id}>
                            <a href="#"
                               className={el.isChecked ? 'checked' : ''}
                               onClick={this.filterProjects.bind(this, el)}
                               aria-checked={el.isChecked ? 'true' : 'false'}>
                              {el.name}
                            </a>
                          </li>
                        )
                      }, this)
                    }
                  </ul>
                </div>
                <div className="filter filter--price">
                  <div className="filter__title">Бюджет</div>
                  <span className="error" role="alert">
                    {(!(this.state.isValidInput.min) || !(this.state.isValidInput.max)) ? 'Введено невірне значення' : ''}
                  </span>
                  <div className="filter__controls">
                    <input type="number" 
                           className={this.state.isValidInput.min ? 'filter__input' : 'filter__input error'}
                           value={this.state.value.min}
                           onChange={this.setMinValue.bind(this)} />
                    <span className="divider">-</span>
                    <input type="number" 
                           className={this.state.isValidInput.max ? 'filter__input' : 'filter__input error'}
                           value={this.state.value.max}
                           onChange={this.setMaxValue.bind(this)} />
                    <span className="currency">грн</span>
                    <div className="filter__btn" 
                         role="button"
                         onClick={this.filterProjects.bind(this, '')}>ok</div>
                  </div>
                  <InputRange
                         maxValue={50000}
                         minValue={0}
                         value={this.state.value}
                         onChange={value => this.setState({ value })} />
                </div>
                <div onClick={this.resetFilters.bind(this)}
                     className="filter__reset"
                     role="button">
                  Скинути всі фільтри
                </div>
              </aside>
            </div>
            <div className="col-sm-9">
              <div className="projects__main">
                <div className="projects__list">
                  <div className="row">
                    {
                      this.state.displayedProjects.map(function(el, i){
                        if(i < this.state.gridLimit){
                          return (
                            <div className="col-lg-4 col-xs-6" key={el.id}>
                              <a className="project-card"
                                 onClick={this.renderProject.bind(this, el)}
                                 href={"#" + el.id}
                                 aria-label={el.name}>
                                <div className={"project-card__category project-card__category--" + el.categoryCode}>
                                  <svg className={"icon icon--" + el.categoryCode}> 
                                    <use xlinkHref={"images/svg-symbols.svg#" + el.categoryCode}></use> 
                                  </svg>
                                  {el.category}
                                </div>
                                <div className="project-card__content">
                                  <div className="project-card__header">
                                    <div className="project-card__title">
                                      {el.name}
                                    </div>
                                    <div className={"project-card__status project-card__status--" + el.stepState}>
                                      {el.step}
                                    </div>
                                  </div>
                                  <div className="project-card__date">Подано {el.date}</div>
                                  <div className="project-card__description">{el.shortDesc.slice(0, 80) + '…'}</div>
                                  <div className="project-card__author-title">Автор проекту</div>
                                  <div className="project-card__author">
                                    <div className="project-card__author-thumbnail">
                                      <img src={"images/" + el.authorImg}
                                           alt={el.author} />
                                    </div>
                                    <div className="project-card__author-name">{el.author}</div>
                                  </div>
                                  <dl className="project-card__budget">
                                    <dt className="project-card__budget-label">Бюджет</dt>
                                    <dd className="project-card__budget-val">
                                      <svg className="icon icon--lightning"> 
                                        <use xlinkHref="images/svg-symbols.svg#lightning"></use> 
                                      </svg>
                                      {el.budget}
                                    </dd>
                                  </dl>    
                                  <dl className="project-card__votes">
                                    <dt className="project-card__votes-label">Проголосувало</dt>
                                    <dd className="project-card__votes-val">
                                      <svg className="icon icon--megaphone"> 
                                        <use xlinkHref="images/svg-symbols.svg#megaphone"></use> 
                                      </svg>
                                      <span>{el.voted}</span>
                                    </dd>
                                  </dl>
                                </div>
                              </a>
                            </div>
                          )

                        }
                      }, this)
                    }
                  </div>
                </div>
                <div className={this.state.gridLimit >= this.state.displayedProjects.length ?
                  "projects__footer hidden" : "projects__footer"}>
                  <div className="projects__footer-btn"
                       onClick={this.loadProjects.bind(this)}
                       role="button">
                       Завантажити більше проектів
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;