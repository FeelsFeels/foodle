class Food {
    constructor(foodName, ingredients, origin, method, course){
        this.foodName = foodName;
        this.ingredients = ingredients;
        this.origin = origin;
        this.method = method;
        this.course = course;
    }

}

let foodList = [
    'Pizza',
    'Beef Wellington',
    'English Breakfast',
    'Tang Yuan',
    'Shao Bing'
]

let ingredientList = [
    'Apple',
    'Blueberry',
    'Cranberry',
    'Durian',
    'Egg',
    'Flour',
    'Grapes',
    'Honey',
    'Icelandmakelinelongwrapppppppppppppppp',
    'Tomato',
    'Cheese',
    'Mozzarella'
]

let originList = [
    'America',
    'Brazil',
    'Canada',
    'Denmark',
    'Italy'
]

let methodList = [
    'Baking',
    'Broiling',
    'Grilling',
    'Roasting',
    'Stewing',
    'Steaming',
    'Deep Frying',
    'Sauteing',
    'Pan Frying'
]

let courseList = [
    'Entree',
    'Appetiser',
    'Dessert',
    'Cookie',
    'Confectionary',
    'Pudding',
    'Salad',
    'Soup',
    'Stew'
]

let newFood = new Food('Pizza', ['Cheese', 'Flour', 'Tomato', 'Mozzarella'], ['Italy'], ['Baking'], ['Entree']);