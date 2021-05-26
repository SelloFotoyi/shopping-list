# Shopping List

A ReactJS & Bootstrap shopping list web application.\
[Demo](https://sellofotoyi-list.netlify.app/)

## `Summary`

The project was created with ReactJS and mostly styled with Bootstrap, and creates an item-tracking list with a couple of features. Its aim is to demonstrate my progress with ReactJS, as well as exploration and potential of a new skill (Bootstrap). 

### `Features`

Users can: 
* Create an item component with these properties:
  * name
  * unit price
  * quantity, which then computes the item's total using its quantity and unit price
* Edit an item's properties listed above
* Mark an item as being checked/completed/bought
* Delete an item both singualary and collectively (delete either marked or all items)

Also
* The app computes the overall total of all added items, as well as all the total number of checked items
* Items list can be sorted by either ascending or descending item's total price. 
* Browser's Local storage was incorporated for list conservation upon refresh/closing the tab by mistake. Use the "Delete All Items" feature to clear the list when done.

### `Highligts`

* This project marks my initiation of Bootstrap integration. My past projects either used pure CSS or Sass for styling.  
* State management was handled with ReactJS' contextAPI, which marks a significant progess in my knowledge in this library. The overall code became cleaner and eliminated "props carrier components", which just pass down props without using them.   

### `For Developers`

Contributions are welcome, and would most certainly be appreciated. To make a contribution, fork and clone this repo (don't foget to star it!). Make any improvements under the "update" local branch, push changes and then create a PR. I'll respond accordingly, ASAP!. 



