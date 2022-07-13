# Shopping Cart
###### Add items to your shopping cart
![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/shopping-cart.gif)

## Links
- [Try Shopping Cart here!](https://tylphe.github.io/shopping-cart/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart)

## Features
- Navigate between homepage and shopping page
- Add items to your shopping cart and see its subtotal
- Update quantity or remove cards from the cart
- Filter by category or search bar

## About
Shopping Cart is an app that lets a user navigate between the homepage and shopping page by using routing via `react-router-dom`. The user should be able to add items to the cart and see its total value. Filter by category on the side or use the search function to find your favorite card.

## Challenges
### Choosing the right data for the project
I decided to create a shop based on a hit horror-themed card game called [Inscryption](https://store.steampowered.com/app/1092790/Inscryption/). In order to make my shopping cart work the way I wanted, I decided to create my own data library.

If you access my inventory.js file in the src folder, you will find an object that exports all the data needed for the website.

To create all the images seen on the project, I used Inscryption's wiki page and took screenshots, saved each of them as their own image file, and saved them into their own folder called /images/. 

I reference this inventory.js file and pull all the data from it such as the image, the cost of each card, the attack power, etc. It was also important to use inventory.js to create filter functionality on my website. More info on filtering below! 

### A state that's an array of objects not updating components
A big problem I had was that if I try to set the state of an array of objects, the component did not update. This specific example happened when I tried to update my shopping cart's state.

My shopping cart depends on an array of objects:
```javascript
const [cart, setCart] = useState([]);
```

My Cart component did not update the subtotal when I tried to update the quantity. The handleCart() looked like this:
```javascript
function handleCart (dataForCart) {
  const newCart = cart;
  newCart.qty = dataForCart.qty;
  setCart(newCart);
}
```

After some googling, I discovered this [very helpful link](https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript).

I learned that I can make a shallow copy or a deep copy of my cart array. In order for my Cart component to see state updates, I needed to create a deep copy. The below code worked for me:
```javascript
function handleCart (dataForCart) {
  const newCart = structuredClone(cart);
  newCart.qty = dataForCart.qty;
  setCart(newCart);
}
```

adding `structuredClone()` to my cart state created a deep copy for my component. Then, when I updated the quantity, the subtotal updated too! If you check the very helpful link, there's an older way to deep copy by using JSON.parse.

### Filtering
This was not a part of the assignment, but what's an online store without some filtering? Originally, I imagined filtering to work out like this:
1. Create radio buttons on the left side of the page for the user to filter.
1. Create a single state called `filter` that contains anything clicked on the radio button.
2. My component that displays all the cards will read the `filter` state and filter-out anything that does not apply.

This did not work the way I intended. My filter did not update live. What happened instead was that insects would not filter until I refreshed the page.

I managed to solve this issue by not creating a universal `filter` state. The component that displays the cards will filter with numerous if-statements:
```javascript
function shopWindow() {
  for (let i = 0; i < inventory.length; i += 1) {
    if (
      (tribe === 'All' || inventory[i].tribe === tribe) &&
      (teeth === 'All' || inventory[i].teeth === teeth) &&
      (health === 'All' || inventory[i].health === health) &&
      (power === 'All' || inventory[i].power === power) &&
      (cost === 'All' || inventory[i].cost === cost) &&
      (type === 'All' || inventory[i].type === type)
    ) {
      // return cards to display on page
    }
}
```
Note: `inventory` contains all my card data.

So what happened here is that I created a state for each category:
```javascript
const [tribe, setTribe] = useState('All');
const [teeth, setTeeth] = useState('All');
const [health, setHealth] = useState('All');
const [power, setPower] = useState('All');
const [cost, setCost] = useState('All');
const [type, setType] = useState('All');
```

the component's if-statement will run through all the cards. If the filter category says 'all', then include all cards. If, for example, the filter contains 'Insect', then display cards that belong to the insects. it kind of looks like this:
```
tribe: 'Insect',
teeth: 'All',
health: 'All',
power: 'All',
cost: 'All',
type: 'All'
```

all the `&&` in the if statement enables us to filter multiple sections at once. for example, if we want insects with 3 power, then the component will read the if-statement like this:
```
tribe: 'Insect',
teeth: 'All',
health: 'All',
power: 3,
cost: 'All',
type: 'All'
```

It's a lot to explain for an if-statement for filtering content but this was not apparent to me at first.

## Adding a search bar
Figuring out how to implement filtering functionality was a much bigger challenge to me than the search functionality. I feel like I should include it here anyway since its a reminder that the component that renders all the cards should do the filtering.

I hope you read the previous seciton to understand the below code:
```javascript
const [search, setSearch] = useState('');

function ShopWindow() {
  for (let i = 0; i < inventory.length; i += 1) {
    if (search !== '') {
      if (inventory[i].name.toLowerCase().includes(search.toLowerCase())) {
        // return cards to screen
      }
    } else if (
      (tribe === 'All' || inventory[i].tribe === tribe) &&
      (teeth === 'All' || inventory[i].teeth === teeth) &&
      (health === 'All' || inventory[i].health === health) &&
      (power === 'All' || inventory[i].power === power) &&
      (cost === 'All' || inventory[i].cost === cost) &&
      (type === 'All' || inventory[i].type === type)
    ) {
      // return cards to screen
    }
  }
}
```

the if-statement for `search` determines that if the search state is not blank, then find all names that include anything in the search bar. I need to convert both the search and my inventory to lowercase so make the search case insensitive!

## Testing Challenges
### Running the most updated version
I wanted to try the new [user-event](https://testing-library.com/docs/user-event/intro) library, which simulates user interactions. I learned that this was only available in version 14.

In order to update my project, I ran this line within my project folder: `npm install @testing-library/user-event@latest`, which updated my package.json file to the newest versions.

### History
I installed this to figure out navigation testing because it was posted in an example here:
https://testing-library.com/docs/example-react-router/

I read that React Router prefers version 4, which meant I used the following in my terminal: `npm i history@4` to install an old version.  

I'm not yet able to figure out how to utilize 'history' but I found a different solution on the next entry below, which is labeled 'Review the different Routers'.

After some research, I learned that history is not for this project and may be more helpful once I implement some back-end logic. I uninstalled it from my project using `npm uninstall history`.

### Review the different Routers
I wanted to test if my home page navigated to the shop page when clicked. I had to understand the [differences between MemoryRouter, BrowserRouter, and HashRouter](https://learnwithparam.com/blog/different-types-of-router-in-react-router/). Examples I saw used MemoryRouter but this does not change the URL. I instead used BrowserRouter to read see the proper URL once clicked.

Side note to self: The following are both the same.
```javascript
render(<Homepage />, {wrapper: BrowserRouter});

render(
  <BrowserRouter>
    <Homepage />
  </BrowserRouter>
);
```