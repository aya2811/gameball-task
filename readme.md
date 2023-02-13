<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://https://github.com/aya2811/gameball-task">
    <img src="https://blog.gameball.co/wp-content/uploads/2020/05/Gameball-logo-and-text.png" alt="Logo" width="1000" height="300">
  </a>

<h3 align="center">Gambeall Technical Task</h3>

 
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#Backend">Backend</a></li>
        <li><a href="#Frontend">Frontend</a></li>
      </ul>
    </li>
  </ol>
</details>



## About The Project

<img src="/images/screenshot.PNG">


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Backend: NodeJs
* DB: PostgreSQL
* RESTful: ExpressJs
* Frontend: Angular



<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* angular
  ```sh
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://https://github.com/aya2811/gameball-task
   ```
2. cd Backend
2. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env` file and enter your Database URL
   ```js
   DATABASE_URL=postgres://<username>:<password>@<Host>:<Port>/<DBname>
   ```
5. Run backend and the server will be running on `5000`
   ```sh
   nodemon server.js
   ```
6. cd ../Frontend 
7. Install NPM packages
   ```sh
   npm install
   ```
8. Run Frontend and the frontend will be running on `http://localhost:4200/`
   ```sh
   ng serve --open
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Backend

#### Structure

```
Backend
|
├── src 
|   ├── config 
|   |     ├── db.js
|   |
|   ├── controllers       
|   |       ├── category.controller.js
|   |       ├── product.controller.js
|   |       ├── sucategory.controller.js
|   |
|   ├── routes
|   |     ├── category.routes.js
|   |     ├── product.routes.js
|   |     ├── subcategory.routes.js
|   |     ├── index.js
|   ├── app.js
|       
├── server.js
```

#### Database Design

<img src="/images/DB_Schema.PNG">


#### APIs

* GET /api/categories `To get all categories`

* GET /api/subcategories `To get all subcategories`:
    Query Params Options:
    * category      `specify the category ex: Food or Electronics`

    Example:
    * `/api/subcategories?category=Electronics`

* GET /api/products `To get all products`: 
    Query Params Options:
    * category      `specify the category ex: Food or Electronics`
    * subcategory   `specify the subcategory ex: Fruits or Vegetables`
    * sortBy        `specify sorting parameter ex : price or name`
    * orderBy       `specify order direction ex: Asc or Desc`
    * limit         `specify limit of products to be retrieved ex: 10 `
    * page          `specify page number to be retrieved ex: 1 or 2` 

    Example:
    * `/api/products?category=Food&subcategory=Fruits&sortBy=price&orderBy=desc&limit=2&page=0`
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Frontend


#### Structure
```
Frontend
|
├── src 
    ├── app                             # App Component contains main, nav components
    |       ├── main Component          # Main section contains header, products
    |       ├── header Component        # Top section in main
    |       ├── products Component      # Middle section in main under the header
    |       ├── nav Component           # SideNav at the left of the main section
    |       ├── Model                   # Contains models of objects
    |               ├── category.ts
    |               ├── product.ts
    |               ├── subcategory.ts
    |        
    ├── assets                          #Contains images used
```




[product-screenshot]: /images/screenshot.png
[DB_schema]: /images/DB_Schema.png

