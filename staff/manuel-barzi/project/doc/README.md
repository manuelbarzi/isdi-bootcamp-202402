# Pepe App

## Intro

Manage food & drinks orders in restaurants ...

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTkydXNpY2c4cnIxdTNjczUxMTgxN3prb3QwampmeHV4M3Zianp5NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9VvburUVlHpuvOQ7ph/giphy.gif)

## Functional

- find places (map)
- choose a place (in map)
- list food & drinks (in place)
- choose food & drinks (add to cart)
- checkout cart (create order)
- check order status
- list orders
- rate place

v0.1
- share place

### UI Design

[Figma](https://www.figma.com/file/cw8K38zpv36iQkjQA5fVXC/App?type=design&node-id=0-1&mode=design&t=RHFOp1rBhBeRDwEs-0)

## Technical

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- TypeScript
- React
- Express
- Node
- Tailwind
- Mongo
- ...

### Data Model

User
- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- username (string, required)
- password (string, required)
- avatar (string, optional)

Place
- id (required)
- title (string, required)
- address (string, required)
- coords ([number, number])

Product
- id (required)
- place (Place.id, required)
- title (string, required)
- image (string, required)
- description (string, required)
- price (number, required)

Order
- id (required)
- user (User.id, required)
- place (Place.id, required)
- payed (boolean, required, default false)
- products ([Product.id])
- date (date, required)

Review
- id (required)
- place (Place.id, required)
- user (User.id, required)
- rate (number, required, enum: 1|2|3|4|5)
- comment (string, optional)
- date (date, required)

