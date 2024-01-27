const projects = [
  {
    id: 10,
    name: 'Website to book appointments with counselors',
    image: '10.png',
    desc: 'This website is made using laravel and vue.js in arabic for booking with professional consultants in all fields, with the possibility of paying in different ways.',
    link: 'https://roznamah.sa/',
    hasGallary: false
  },
  {
    id: 9,
    name: 'Website for booking co-working spaces',
    image: '9.png',
    desc: 'This website is made using laravel and vue.js in arabic for booking co-working spaces with payment methods like credit cards, apple pay and more.',
    link: 'https://roznamah.sa/',
    hasGallary: false
  },
  {
    id: 1,
    name: 'Gift Cards',
    image: '1.jpg',
    desc: 'Selling gift cards website where users can buy cards and track orders, edit profile, a big admin page to control everything and more, built with laravel + Vue.js + Inertia.js',
    link: '#',
    hasGallary: true,
    slides: [
      {
        id: 1,
        image: 'projects/gift-cards/1.png',
        text: `Website's main page, please visit these links to see detailed videos:
        <br> Users Pages: <a class='text-white' target='_blank' href="https://www.youtube.com/watch?v=UdS95-QZTIk">https://www.youtube.com/w...</a>
        <br> Admin Pages: <a class='text-white' target='_blank' href="https://www.youtube.com/watch?v=Qhoe6d0A6XY">https://www.youtube.com/w...</a>`
      },
      {
        id: 2,
        image: 'projects/gift-cards/2.png',
        text: 'Page to show all of the available cards and user can order them by just clicking on them.'
      },
      {
        id: 3,
        image: 'projects/gift-cards/3.png',
        text: 'Simple contact page in case there is any problem user faced in the website.'
      },
      {
        id: 4,
        image: 'projects/gift-cards/4.png',
        text: 'Page to track your orders.'
      },
      {
        id: 5,
        image: 'projects/gift-cards/5.png',
        text: 'Profile page where you can edit your profile with various options.'
      },
      {
        id: 6,
        image: 'projects/gift-cards/6.png',
        text: 'Stripe Payment Gateway, Once you clicked the card the stripe gateway will open to buy the card, when the payment success it shows success page.'
      },
      {
        id: 7,
        image: 'projects/gift-cards/7.png',
        text: 'The website\'s login page.'
      },
      {
        id: 8,
        image: 'projects/gift-cards/8.png',
        text: 'Admin main page where you can view/edit/delete/add/search users and more.'
      },
      {
        id: 9,
        image: 'projects/gift-cards/9.png',
        text: 'Manage Cards admin page to have fully control on the cards and categories on your website.'
      },
      {
        id: 10,
        image: 'projects/gift-cards/10.png',
        text: 'Manage Orders page to track orders and send cards or refuse cards.'
      },
      {
        id: 11,
        image: 'projects/gift-cards/11.png',
        text: 'All Notifications Coming to the admin whether contact notifications or orders notifications.'
      },
      {
        id: 12,
        image: 'projects/gift-cards/12.png',
        text: 'Notifications icon in the navbar to see all the notifications quickly without going to the notifications page.'
      },
    ]
  },
  {
    id: 2,
    name: 'Blogs App',
    image: '2.jpg',
    desc: 'Blogs app where users can add, delete, edit and search blogs + add blogs with tags for searching, an admin page to control users and blogs and everything on the website.',
    link: '#',
    hasGallary: true,
    slides: [
      {
        id: 1,
        image: 'projects/blogs-site/1.png',
        text: 'Website\'s Main Page where you see blogs and users uploaded them and you can add/remove like on the blogs.'
      },
      {
        id: 2,
        image: 'projects/blogs-site/2.png',
        text: 'Adding blogs page.'
      },
      {
        id: 4,
        image: 'projects/blogs-site/4.png',
        text: 'User\'s recently added blogs, you can click edit to edit blog or delete to delete blog.'
      },
      {
        id: 5,
        image: 'projects/blogs-site/5.png',
        text: 'Blogs search page where you can search blogs by tags or by blog\'s content.'
      },
      {
        id: 6,
        image: 'projects/blogs-site/6.png',
        text: 'Profile page with alot of options to edit your profile like: 2FA.'
      },
      {
        id: 7,
        image: 'projects/blogs-site/7.png',
        text: 'The rest of the profile page.'
      },
      {
        id: 8,
        image: 'projects/blogs-site/8.png',
        text: 'Admin Main Page with users and paginations.'
      },
      {
        id: 9,
        image: 'projects/blogs-site/9.png',
        text: 'Recent blogs where you see blog details + image and you can delete it.'
      },
      {
        id: 10,
        image: 'projects/blogs-site/10.png',
        text: 'Adding admin page to add admins and show current admins and you can make actions on them.'
      },
      {
        id: 11,
        image: 'projects/blogs-site/11.png',
        text: 'Login page where you can login with google or login with normal account.'
      },
      {
        id: 12,
        image: 'projects/blogs-site/12.png',
        text: 'Google Auth.'
      },
    ]
  },
  {
    id: 3,
    name: 'Design Template',
    image: '3.jpg',
    desc: 'This is a Big Design i Made With HTML And CSS And Some Javascript That has Cool Animations and Styles.',
    link: 'https://modapro1.github.io/project_1',
    hasGallary: false
  },
  {
    id: 4,
    name: 'Arabic Restaurant',
    image: '4.jpg',
    desc: 'Restaurant template in arabic language has just dummy data inside it, made with html, css and javascript.',
    link: 'https://modapro1.github.io/project_3',
    hasGallary: false
  },
  {
    id: 5,
    name: 'Coach Finder',
    image: '5.jpg',
    desc: 'Simple Coach finder app made with vue.js, you can find coach and contact with him, register as a coach and more.',
    link: 'https://coachapp-41b17.web.app/',
    hasGallary: false
  },
  {
    id: 6,
    name: 'Kasper Template',
    image: '6.jpg',
    desc: 'Kasper Template made with HTML, CSS and javascript.',
    link: 'https://modapro1.github.io/project_2',
    hasGallary: false
  },
  {
    id: 7,
    name: 'Creative Agency',
    image: '7.jpg',
    desc: 'Creative Agency template made with HTML, CSS and Javascript.',
    link: 'https://modapro1.github.io/project_4/',
    hasGallary: false
  },
  {
    id: 8,
    name: 'Personal Portofolio',
    image: '8.jpg',
    desc: 'My old personal portofolio website made with HTML, CSS and Javascript.',
    link: 'https://modapro1.github.io/personal_portofolio/',
    hasGallary: false
  }
]

export default projects