//declaring projects array
//wow...such many data

var projects = [
  {
    id: '0pr',
    name: 'Встановлення дитячого майданчика на території гуртожитків CТEУ',
    date: '1 день назад',
    author: 'Виктория Неделько',
    authorImg: 'author-1.jpg',
    shortDesc: 'Бюджет цІкавих ініціатив зростає. Пік активності припав на останні прийому ініціатив, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, ullam?',
    budget: '5 000 грн',
    voted: '5 532',
    step: 'Реалізований',
    stepState: 'positive',
    category: 'Спорт',
    location: 'Рівне',
    categoryCode: 'sport'
  },{
    id: '1pr',
    name: 'Дитячий і спортивний майданчик у дворі будинку',
    date: '12.11.2015',
    author: 'Любовь Бутко',
    authorImg: 'author-2.jpg',
    shortDesc: 'Для нас стало приємною несподіванкою активність наших громадян щодо участі у проекті...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae sunt rem aliquam ut, unde aperiam non ipsum nostrum sapiente.',
    budget: '12 300 грн',
    voted: '10 057',
    step: 'Неможливо реалізувати',
    stepState: 'negative',
    category: 'Комунальне господарство',
    location: 'Ірпінь',
    categoryCode: 'house-manage'
  },{
    id: '2pr',
    name: 'GPSAUTO "система моніторинга транспорту"',
    date: '28.01.2016',
    author: 'Veselina Dashich',
    authorImg: 'author-3.jpg',
    shortDesc: 'Пік активності припав на останні 2 дні  прийому ініціатив, технічне поштової... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos veritatis odio fuga magnam sint deserunt repudiandae aut dicta. Illo ab perferendis maxime veritatis quibusdam, distinctio eius modi voluptatibus id inventore porro, pariatur reprehenderit adipisci accusantium animi quo molestiae omnis rerum. Quasi reiciendis molestiae temporibus voluptates sit consectetur rerum eveniet.',
    budget: '25 000 грн',
    voted: '271 556',
    step: 'Брав участь',
    stepState: 'neutral',
    category: 'Охорона здоров\'я',
    location: 'Здолбунів',
    categoryCode: 'health'
  },{
    id: '3pr',
    name: 'Встановлення дитячого майданчика на території гуртожитків CТEУ' ,
    date: '1 день назад',
    author: 'Виктория Неделько',
    authorImg: 'author-4.jpg',
    shortDesc: 'Бюджет цІкавих ініціатив зростає Пік активності припав на останні прийому ініціатив,...',
    budget: '5 000 грн',
    voted: '32 532',
    step: 'Відхилений',
    stepState: 'negative',
    category: 'Дорожнє господарство',
    location: 'Київ',
    categoryCode: 'road-manage'
  },{
    id: '4pr',
    name: 'Встановлення дитячого майданчика на території гуртожитків CТEУ' ,
    date: '22.05.2007',
    author: 'Любовь Бутко',
    authorImg: 'author-5.jpg',
    shortDesc: 'Бюджет цІкавих ініціатив зростає Пік активності припав на останні прийому ініціатив, ...',
    budget: '5 666 грн',
    voted: '12 332',
    step: 'Успішно оцінений',
    stepState: 'positive',
    category: 'Навколишнє середовище',
    location: 'Львів',
    categoryCode: 'ecology'
  },{
    id: '5pr',
    name: 'Lorem ipsum dolor sit amet.' ,
    date: '22.05.2007',
    author: 'Lorem Ipsum',
    authorImg: 'author-6.jpg',
    shortDesc: 'Бюджет цІкавих ініціатив зростає Пік активності припав на останні прийому ініціатив, ...',
    budget: '5 236 грн',
    voted: '1 332',
    step: 'На розгляді',
    stepState: 'neutral',
    category: 'Освіта',
    location: 'Київ',
    categoryCode: 'education'
  },{
    id: '6pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-7.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '3 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Засоби масової інформації',
    location: 'Київ',
    categoryCode: 'media'
  },{
    id: '7pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2013',
    author: 'Lorem Ipsum',
    authorImg: 'author-2.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '7 232 грн',
    voted: '1 332',
    step: 'Переможець',
    stepState: 'positive',
    category: 'Телекомунікації та ІТ',
    location: 'Майамі',
    categoryCode: 'it'
  },{
    id: '8pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-4.jpg',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quas, expedita.',
    budget: '31 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Соціальний захист',
    location: 'Здолбунів',
    categoryCode: 'social-support'
  },{
    id: '9pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-3.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '1 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Транспорт',
    location: 'Київ',
    categoryCode: 'transport'
  },{
    id: '10pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-2.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '5 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Велоінфраструктура',
    location: 'Львів',
    categoryCode: 'velo'
  },{
    id: '11pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-1.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '5 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Громадський порядок',
    location: 'Ірпінь',
    categoryCode: 'public-order'
  },{
    id: '12pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-2.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '5 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Енергозбереження',
    location: 'Київ',
    categoryCode: 'energy'
  },{
    id: '13pr',
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
    date: '22.05.2012',
    author: 'Lorem Ipsum',
    authorImg: 'author-3.jpg',
    shortDesc: 'Reprehenderit eligendi dolorem, quam iste ut illum doloremque dolor saepe dolores nobis., ...',
    budget: '5 236 грн',
    voted: '1 332',
    step: 'На голосуванні',
    stepState: 'neutral',
    category: 'Культура та туризм',
    location: 'Київ',
    categoryCode: 'culture'
  }
]

//declaring filters arrays
//step filter

var stepFilter = [
  {
    name: 'Реалізований',
    id: '0sf',
    isChecked: false
  },{
    name: 'Переможець',
    id: '1sf',
    isChecked: false
  },{
    name: 'На реалізації',
    id: '2sf',
    isChecked: false
  },{
    name: 'Успішно оцінений',
    id: '3sf',
    isChecked: false
  },{
    name: 'Неможливо реалізувати',
    id: '4f',
    isChecked: false
  },{
    name: 'Відхилений',
    id: '5f',
    isChecked: false
  },{
    name: 'На розгляді',
    id: '6sf',
    isChecked: false
  },{
    name: 'На голосуванні',
    id: '7sf',
    isChecked: false
  },{
    name: 'Брав участь',
    id: '8sf',
    isChecked: false
  }
]

//category filter

var categoryFilter = [
  {
    name: 'Спорт',
    id: '0cf',
    isChecked: false
  },{
    name: 'Комунальне господарство',
    id: '1cf',
    isChecked: false
  },{
    name: 'Охорона здоров\'я',
    id: '2cf',
    isChecked: false
  },{
    name: 'Дорожнє господарство',
    id: '3cf',
    isChecked: false
  },{
    name: 'Навколишнє середовище',
    id: '4cf',
    isChecked: false
  },{
    name: 'Освіта',
    id: '5cf',
    isChecked: false
  },{
    name: 'Засоби масової інформації',
    id: '6cf',
    isChecked: false
  },{
    name: 'Телекомунікації та ІТ',
    id: '7cf',
    isChecked: false
  },{
    name: 'Соціальний захист',
    id: '8cf',
    isChecked: false
  },{
    name: 'Транспорт',
    id: '9cf',
    isChecked: false
  },{
    name: 'Велоінфраструктура',
    id: '10cf',
    isChecked: false
  },{
    name: 'Громадський порядок',
    id: '11cf',
    isChecked: false
  },{
    name: 'Енергозбереження',
    id: '12cf',
    isChecked: false
  },{
    name: 'Культура та туризм',
    id: '13cf',
    isChecked: false
  },
]

//location filter

var locationFilter = [
  {
    name: 'Рівне',
    id: '0lf',
    isChecked: false
  },{
    name: 'Майамі',
    id: '1lf',
    isChecked: false
  },{
    name: 'Здолбунів',
    id: '2lf',
    isChecked: false
  },{
    name: 'Київ',
    id: '3lf',
    isChecked: false
  },{
    name: 'Львів',
    id: '4lf',
    isChecked: false
  },{
    name: 'Ірпінь',
    id: '5lf',
    isChecked: false
  }
]

export {projects, stepFilter, categoryFilter, locationFilter}