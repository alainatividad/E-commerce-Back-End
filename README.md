# E-commerce Back End

## Description

This application is an Express.js API that interacts with a MySQL database that serves as a back end server for an e-commerce site. The application is connected to a MySQL database using the MySQL2 and Sequelize packages. With this application, a user can get information about the categories, tag, and products the site offers. 

### Database Models

The database contains the following four models:

- `Category`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `category_name`

    - String.

    - Doesn't allow null values.

- `Product`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `product_name`

    - String.

    - Doesn't allow null values.

  - `price`

    - Decimal.

    - Doesn't allow null values.

    - Validates that the value is a decimal.

  - `stock`

    - Integer.

    - Doesn't allow null values.

    - Set a default value of `10`.

    - Validates that the value is numeric.

  - `category_id`

    - Integer.

    - References the `Category` model's `id`.

- `Tag`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `tag_name`

    - String.

- `ProductTag`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `product_id`

    - Integer.

    - References the `Product` model's `id`.

  - `tag_id`

    - Integer.

    - References the `Tag` model's `id`.

### Associations

- `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

- `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

## Demonstration of the Application

The following videos show the application's database setup, seeding, and functionality:

### Database Setup, Seeding, and Starting of the Application's Server

https://user-images.githubusercontent.com/99376802/169817970-96874f12-e795-424d-90d3-94b04a2fe455.mp4


### Testing of all Category Routes (GET ALL, GET by ID, POST, PUT, and DELETE) in Insomnia



https://user-images.githubusercontent.com/99376802/169818085-bac58438-0346-4496-bbe2-01ccb9e082dc.mp4


### Testing of all Tag Routes (GET ALL, GET by ID, POST, PUT, and DELETE) in Insomnia



https://user-images.githubusercontent.com/99376802/169818125-b6ed23e7-aed6-4b33-aee1-fadff7dcf21d.mp4


### Testing of all Product Routes (GET ALL, GET by ID, POST, PUT, and DELETE) in Insomnia


https://user-images.githubusercontent.com/99376802/169818141-8003f323-c7db-45ea-b88d-c7c094a10eb9.mp4



## Installation

After forking the project, run the code below to install the modules needed to run this program:

```
npm install
```

Run the following in MySQL to create the database and also seed the database with sample records.

```
mysql -u root -p
source ./db/schema.sql
```

Run the code below to seed the database:

```
npm run seed
```

## Usage

To run the program, run the code below:

```
npm start
```
