import React, { useState } from 'react'
import './App.css'

function App() {
  const [currMenuCatId, changeMenuCatId] = useState(1)
  const [currResMenuCatId, changeResMenuCatId] = useState(null)
  const [currGallCatId, changeGallCatId] = useState(1)
  const [menu] = useState([
    {
      catId: 1,
      catName: 'SNACKS',
      items: [
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPCIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
      ],
    },
    {
      catId: 2,
      catName: 'DESERT',
      items: [
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
      ],
    },
    {
      catId: 3,
      catName: 'DINNER',
      items: [
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
      ],
    },
    {
      catId: 4,
      catName: 'FRESHFOOD',
      items: [
        {
          itemId: 1,
          itemName: 'AppL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPEL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
        {
          itemId: 1,
          itemName: 'SPECIAL PUFF',
          itemPrice: 45,
          itemDetail: ` Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolores, voluptatum! Fuga et rem esse saepe`,
          itemImg:
            'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg',
        },
      ],
    },
  ])
  const [gallery] = useState([
    {
      id: 1,
      catName: 'DESERT',
      images: [
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
      ],
    },
    {
      id: 2,
      catName: 'LUNCH',
      images: [
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
      ],
    },
    {
      id: 3,
      catName: 'DINNER',
      images: [
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
      ],
    },
    {
      id: 4,
      catName: 'BREAKFAST',
      images: [
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
        'http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/gallery-images/thumb6@2x.jpg',
      ],
    },
  ])

  const onMenuCatClick = (catId) => {
    changeMenuCatId(catId)
  }

  const onResMenuCatClick = (catId) => {
    if (currResMenuCatId === catId) {
      changeResMenuCatId(null)
    } else {
      changeResMenuCatId(catId)
    }
  }

  const getMenuItems = (res) => {
    if (res) {
      let menuItems = menu.find((item) => item.catId === currResMenuCatId)
      return menuItems.items
    } else {
      let menuItems = menu.find((item) => item.catId === currMenuCatId)
      return menuItems.items
    }
  }

  const onGalleryCatClick = (catId) => {
    changeGallCatId(catId)
  }

  const getGalleryImages = () => {
    if (currGallCatId) {
      let item = gallery.find((item) => item.id === currGallCatId)
      return item.images
    } else {
      let images = []
      for (let i = 0; i < gallery.length; i++) {
        for (let j = 0; j < gallery[i].images.length; j++) {
          images.push(gallery[i].images[j])
        }
      }
      return images
    }
  }

  return (
    <div className="App">
      <header class="main-header">
        <nav class="nav-container">
          <div class="right">
            <img
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/logo-icon.png"
              alt="restaurant-logo"
              class="logo"
            />
          </div>
          <ul className="left">
            <li className="link">HOME</li>
            <li className="link">ABOUT US</li>
            <li className="link">OFFER</li>
            <li className="link">MENU</li>
            <li className="link">TESTIMONIALS</li>
            <li className="link">GALLERY</li>
            <li className="link">CONTACT</li>
          </ul>
          <div class="left-sm">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
      </header>
      <section class="hero">
        <div class="container">
          <div class="content">
            <div class="top">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/slider-caption-top.png"
                alt="design"
              />
            </div>
            <h2 class="sub-head style-font">Welcome to our</h2>
            <h1 class="main-head">Restaurant</h1>
            <p class="detail">The best multi cusine restaurant</p>
            <div class="actions">
              <button class="btn-primary action">
                <span class="text">Book Table</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
              <button class="btn-primary action">
                <span class="text">View Menu</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
            <div class="bottom">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/slider-caption-bottom.png"
                alt="design"
              />
            </div>
          </div>
          <div class="dots">
            <span class="dot"></span>
            <span class="dot active"></span>
            <span class="dot"></span>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="dish-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/about-elements-1.png"
            alt="dish"
          />
        </div>
        <div class="achieve-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/about-elements-2.png"
            alt="achievement"
          />
        </div>
        <div class="old-pic-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/about-elements-3.png"
            alt="old-pic"
          />
        </div>
        <div class="award-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/about-elements-4.png"
            alt="award"
          />
        </div>
        <div class="container">
          <div class="left">
            <h2 class="sub-head style-font">Our Story</h2>
            <h1 class="main-head">About us</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/slider-caption-bottom.png"
                alt="design"
              />
            </div>
            <p class="line">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit Fugiat
            </p>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad
              quae beatae libero optio magni, perspiciatis tempore consequatur
              soluta harum aliquam a dicta deserunt dolorum placeat,
              consequuntur quisquam quia maiores!
            </p>
            <div class="features">
              <div class="feature">
                <div class="upper">
                  <div class="cont">
                    <img
                      src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/feature1.png"
                      alt="feature"
                      class="icon"
                    />
                  </div>
                </div>
                <div class="lower">
                  <div class="cont">
                    <h3 class="title">
                      FREE <br />
                      DELIVERY
                    </h3>
                  </div>
                </div>
              </div>
              <div class="feature">
                <div class="upper">
                  <div class="cont">
                    <img
                      src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/feature2.png"
                      alt="feature"
                      class="icon"
                    />
                  </div>
                </div>
                <div class="lower">
                  <div class="cont">
                    <h3 class="title">
                      FRESHLY <br />
                      cooked
                    </h3>
                  </div>
                </div>
              </div>
              <div class="feature">
                <div class="upper">
                  <div class="cont">
                    <img
                      src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/feature3.png"
                      alt="feature"
                      class="icon"
                    />
                  </div>
                </div>
                <div class="lower">
                  <div class="cont">
                    <h3 class="title">
                      24 Hours <br />
                      support
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="cont">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/about-chef.png"
                alt="chef"
                class="cont-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="offers">
        <div class="container">
          <h2 class="sub-head style-font">Hot offer</h2>
          <h1 class="main-head">Special for today</h1>
          <div class="design">
            <img
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
              alt="design"
            />
          </div>
          <div class="offers-cont">
            <div class="offer">
              <div class="name">ITALIAN PIZZA</div>
              <h4 class="discount">40% Off</h4>
              <h4 class="price">$20</h4>
              <p class="detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                veritatis adipisci beatae placeat debitis architecto veritatis
                adipisci beatae placeat debitis architecto debitis architecto
                veritatis adipis
              </p>
              <button class="btn-primary action">
                <span class="text">ORDER NOW</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
            <div class="offer-img-cont">
              <img
                alt="food"
                class="food-img"
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img1.jpg"
              />
            </div>
            <div class="offer-img-cont">
              <img
                alt="food"
                class="food-img"
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/special-menu-img2.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="menu">
        <div class="menu1-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-element-1.png"
            alt="menu"
          />
        </div>
        <div class="menu2-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-element-2.png"
            alt="menu"
          />
        </div>
        <div class="container">
          <div class="upper">
            <h2 class="sub-head style-font">Yummy n tasty</h2>
            <h1 class="main-head">Delicious Menu</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
                alt="design"
              />
            </div>
            <div class="categories">
              {menu.map((item) => (
                <div
                  class={`cat ${item.catId === currMenuCatId ? 'active' : ''}`}
                  onClick={() => onMenuCatClick(item.catId)}
                >
                  {item.catName}
                </div>
              ))}
            </div>
            <div class="menu-options">
              {menu.map((item) => (
                <>
                  <div
                    onClick={() => onResMenuCatClick(item.catId)}
                    class={`option ${
                      item.catId === currResMenuCatId ? 'active' : ''
                    }`}
                  >
                    <div class="left"></div>
                    <h5 class="name">{item.catName}</h5>
                    <i
                      class={`fa ${
                        item.catId === currResMenuCatId
                          ? 'fa-arrow-up'
                          : 'fa-arrow-down'
                      }`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {item.catId === currResMenuCatId ? (
                    <div class="menu-cont menu-cont-sm">
                      <div class="showcase-img-cont">
                        <div class="shapeover"></div>
                        <img
                          src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-dish1.jpg"
                          alt="food"
                          class="showcase-img"
                        />
                      </div>
                      <div class="menu-items">
                        {getMenuItems(true).map((item) => (
                          <div class="item">
                            <div class="upper">
                              <img
                                src={item.itemImg}
                                class="item-img"
                                alt="item-img"
                              />
                            </div>
                            <div class="main-details">
                              <h5 class="left">{item.itemName}</h5>
                              <h4 class="right">${item.itemPrice}</h4>
                              <p class="sub-detail">{item.itemDetail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
              <div class="menu-cont menu-cont-lg">
                <div class="showcase-img-cont">
                  <div class="shapeover"></div>
                  <img
                    src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-dish1.jpg"
                    alt="food"
                    class="showcase-img"
                  />
                </div>
                <div class="menu-items">
                  {getMenuItems().map((item) => (
                    <div class="item">
                      <div class="upper">
                        <img
                          src={item.itemImg}
                          class="item-img"
                          alt="item-img"
                        />
                      </div>
                      <div class="main-details">
                        <h5 class="left">{item.itemName}</h5>
                        <h4 class="right">${item.itemPrice}</h4>
                        <p class="sub-detail">{item.itemDetail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="popular-dishes">
        <div class="container">
          <div class="upper">
            <h2 class="sub-head style-font">Yummy n tasty</h2>
            <h1 class="main-head">Delicious Menu</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
                alt="design"
              />
            </div>
          </div>
          <div class="main-content">
            <div class="dish">
              <div class="shapeover"></div>
              <div class="top">
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular1.jpg"
                  alt="food"
                  class="food-img"
                />
              </div>
              <div class="bottom">
                <div class="cont">
                  <h4 class="price">$40</h4>
                  <h5 class="name">Italian Pizza</h5>
                  <div class="design-cont">
                    <img
                      src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element2.png"
                      alt="design"
                      class="design"
                    />
                  </div>
                  <button class="button-inv">
                    <span class="text">ORDER NOW</span>
                    <i class="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="dish">
              <div class="shapeover"></div>
              <div class="top">
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular1.jpg"
                  alt="food"
                  class="food-img"
                />
              </div>
              <div class="bottom">
                <div class="cont">
                  <h4 class="price">$40</h4>
                  <h5 class="name">Italian Pizza</h5>
                  <div class="design-cont">
                    <img
                      src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element2.png"
                      alt="design"
                      class="design"
                    />
                  </div>
                  <button class="button-inv">
                    <span class="text">ORDER NOW</span>
                    <i class="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="dish">
              <div class="shapeover"></div>
              <div class="top">
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular1.jpg"
                  alt="food"
                  class="food-img"
                />
              </div>
              <div class="bottom">
                <div class="cont">
                  <h4 class="price">$40</h4>
                  <h5 class="name">Italian Pizza</h5>
                  <div class="design-cont">
                    <img
                      src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element2.png"
                      alt="design"
                      class="design"
                    />
                  </div>
                  <button class="button-inv">
                    <span class="text">ORDER NOW</span>
                    <i class="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="book">
        <div class="cal1-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/book-table-element-1.png"
            alt="calendar"
          />
        </div>
        <div class="cal2-cont">
          <img
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/book-table-element-2.png"
            alt="calendar"
          />
        </div>
        <div class="container">
          <div class="upper">
            <h2 class="sub-head style-font">Yummy n tasty</h2>
            <h1 class="main-head">Delicious Menu</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
                alt="design"
              />
            </div>
          </div>
          <form class="book-form">
            <div class="content">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="No. of. people" />
              <input type="text" placeholder="YY-MM-DD" />
              <button class="button-inv">
                <span class="text">Book table</span>
                <i class="fa fa-long-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section class="testi">
        <div class="container">
          <div class="upper">
            <h2 class="sub-head style-font">Yummy n tasty</h2>
            <h1 class="main-head">Delicious Menu</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
                alt="design"
              />
            </div>
          </div>
          <div class="testi-content">
            <div class="testimonial">
              <div class="img-cont">
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2@2x.png"
                  alt="human"
                  class="testi-img"
                />
              </div>
              <div class="cont">
                <p class="review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat dolorem voluptas fugit. Incidunt minus illo labore
                  expedita modi voluptate nostrum, commodi est sunt! Cumque at
                  repellendus suscipit aliquid, velit consequuntur.
                </p>
                <h4 class="name">John Doe</h4>
                <h5 class="prof">MD, Orient</h5>
              </div>
            </div>
            <div class="testimonial">
              <div class="img-cont">
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2@2x.png"
                  alt="human"
                  class="testi-img"
                />
              </div>
              <div class="cont">
                <p class="review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat dolorem voluptas fugit. Incidunt minus illo labore
                  expedita modi voluptate nostrum, commodi est sunt! Cumque at
                  repellendus suscipit aliquid, velit consequuntur.
                </p>
                <h4 class="name">John Doe</h4>
                <h5 class="prof">MD, Orient</h5>
              </div>
            </div>
            <div class="testimonial">
              <div class="img-cont">
                <img
                  src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2@2x.png"
                  alt="human"
                  class="testi-img"
                />
              </div>
              <div class="cont">
                <p class="review">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat dolorem voluptas fugit. Incidunt minus illo labore
                  expedita modi voluptate nostrum, commodi est sunt! Cumque at
                  repellendus suscipit aliquid, velit consequuntur.
                </p>
                <h4 class="name">John Doe</h4>
                <h5 class="prof">MD, Orient</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="gallery">
        <div class="container">
          <div class="upper">
            <h2 class="sub-head style-font">Yummy n tasty</h2>
            <h1 class="main-head">Delicious Menu</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
                alt="design"
              />
            </div>
          </div>
          <div class="content">
            <div class="cats">
              <div
                onClick={() => onGalleryCatClick(null)}
                class={`cat ${currGallCatId ? '' : 'active-cat'}`}
              >
                All
              </div>
              {gallery.map((item) => (
                <div
                  onClick={() => onGalleryCatClick(item.id)}
                  className={`cat ${
                    currGallCatId === item.id ? 'active-cat' : ''
                  }`}
                >
                  {item.catName}
                </div>
              ))}
            </div>
            <div class="images">
              {getGalleryImages().map((item) => (
                <div class="img-cont">
                  <img src={item} alt="food" class="img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer class="main-footer">
        <div class="container">
          <div class="upper">
            <h2 class="sub-head style-font">Yummy n tasty</h2>
            <h1 class="main-head">Delicious Menu</h1>
            <div class="design">
              <img
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/heading-element.png"
                alt="design"
              />
            </div>
          </div>
          <div class="content">
            <p class="text">
              Subscribe to our Newsletter to get first Gift voucher by
              StartLorem Ipsum is simply dummy
            </p>
            <form action="" class="newsletter">
              <input placeholder="Enter your email" type="text" />
              <button>
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
            <div class="icons">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-snapchat" aria-hidden="true"></i>
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
