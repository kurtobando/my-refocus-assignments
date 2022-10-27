// Task #1
// Create an array named “dishes” with 3 objects. Each object should represent a dish
// and have the following fields:
// “dishID”, which is a unique identifier of the dish
// “dishName”
// “dishPrice”
// “ingredients”, which is an array with ingredients to create that dish

const dishes = [
    {
        dishID: 1,
        dishName: 'Burger',
        dishPrice: 100,
        ingredients: [
            'Bread',
            'Patty',
            'Cheese',
            'Lettuce',
            'Tomato',
            'Onion',
            'Mayonnaise',
            'Ketchup',
        ],
    },
    {
        dishID: 2,
        dishName: 'Pizza',
        dishPrice: 200,
        ingredients: [
            'Dough',
            'Tomato Sauce',
            'Cheese',
            'Pepperoni',
            'Mushroom',
            'Onion',
            'Capsicum',
            'Olive',
        ],
    },
    {
        dishID: 3,
        dishName: 'Pasta',
        dishPrice: 150,
        ingredients: [
            'Pasta',
            'Tomato Sauce',
            'Cheese',
            'Bacon',
            'Mushroom',
            'Onion',
            'Capsicum',
            'Olive',
        ],
    },
];

// Task #2
// Create an object which represents a menu. It should have the following fields:
// “restaurantName”
// “dishes”, which is an array from task 1
// “displayRestaurantName”, an object method that displays the restaurant name
// “displayMenu”, an object method that displays information about each dish

const menu = {
    restaurantName: 'The Foodie',
    dishes: dishes,
    displayRestaurantName: function () {
        console.log(this.restaurantName);
    },
    displayMenu: function () {
        this.dishes.forEach((dish) => {
            console.log(`${dish.dishName}, ₱${dish.dishPrice}`);
            console.log(`Contains ${dish.ingredients.join(', ')}`);
        });
    },
};

menu.displayRestaurantName();
menu.displayMenu();
