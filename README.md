[![Deploy static content to Pages](https://github.com/DrRuski/noroff-auction-house/actions/workflows/deploy_website.yml/badge.svg)](https://github.com/DrRuski/noroff-auction-house/actions/workflows/deploy_website.yml)

# Noroff Auction House - Semester Project 2


### Table of Contents

1. Brief.
2. Website Demo.
3. External Development.

## 1.Brief

An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

### 1.1 User Stories

1. A user with a `stud.noroff.no` email may register. - ✔️
2. A registered user may login. - ✔️
3. A registered user may logout. - ✔️
4. A registered user may update their avatar. - ✔️
5. A registered user may view their total credit. - ✔️
6. A registered user may create a `Listing` with a title, deadline date, media gallery and description. - ✔️
7. A registered user may add a `Bid` to another user’s `Listing`. - ✔️
8. A registered user may view `Bids` made on a `Listing`. - ✔️
9. An unregistered user may search through `Listings`. - ✔️

### 1.2 Technical restrictions

1. Must use an approved `CSS Framework` - ![Bootstrap](./assets/readmeAssets/Bootstrap.svg)

2. Must be hosted on an approved `Static Host` - ![Github](./assets/readmeAssets/Github.svg)

3. Must use an approved `Planning Application` - ![Github](./assets/readmeAssets/Github.svg)

4. Must use an approved `Design Application` - ![Figma](./assets/readmeAssets/Figma.svg)


## 2. Website Demo

Live Version:
```
https://noroffauctionhouse.imdev.no/
```

Email:
```
DemoEmail123@stud.noroff.no
```

Password:
```
DemoPassword123
```

You may also want to checkout "Proceed as guest" to see the difference.

## 3. External Development

1. Clone the repo through github website or CLI command:

```
git clone https://github.com/DrRuski/noroff-auction-house.git
```

2. Run `npm install` to install all dependencies.
3. Run `npm run watch` to start the SCSS compiler.
4. Go live with your preferred live server.
