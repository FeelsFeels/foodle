class Food {
    constructor(foodName, ingredients, origin, method, description){
        this.foodName = foodName;
        this.ingredients = ingredients;
        this.origin = origin;
        this.method = method;
        this.description = description;
    }
}

var newFood;
let newFoodLinks;

function GetRandomFood(){
	let chosenFood = foodList[Math.floor(foodList.length * Math.random())];
	// chosenFood = 'Full English Breakfast';
	newFood = new Food(chosenFood, foodObjectList[chosenFood][0], foodObjectList[chosenFood][1], foodObjectList[chosenFood][2], foodObjectList[chosenFood][3]);
	newFoodLinks = ['src/food_pictures/' + foodLinks[chosenFood][0], 'https://' + foodLinks[chosenFood][1]];
	console.log(newFoodLinks);

	foodList.sort();
}

function GetDailyfood(){
	Shuffle(foodList, 1337);

	let day = GetDayDifference();
	let chosenFood = foodList[day % foodList.length];
	newFood = new Food(chosenFood, foodObjectList[chosenFood][0], foodObjectList[chosenFood][1], foodObjectList[chosenFood][2]);
	newFoodLinks = ['src/food_pictures/' + foodLinks[chosenFood][0], 'https://' + foodLinks[chosenFood][1]];
	console.log(newFoodLinks);

	document.getElementById('day-counter').textContent = 'DAY ' + day;

	foodList.sort();
}

function Shuffle(array, seed) {
	let m = array.length;
	let i;
	let j;

	while (m) {
		i = Math.floor(Random(seed) * m--);

		j = array[m];
		array[m] = array[i];
		array[i] = j;
		++seed;
	}
	return array;
}
function Random(seed){
	let x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}
function GetDayDifference(){
	let myDate = new Date('2023/02/12');
	let yourDate = new Date();
	let diffTime = Math.abs(yourDate - myDate);
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}




let foodList = ['Pizza','Full English Breakfast','Risotto','Katsudon','Bibimbap','Bak Chor Mee','Hainanese Chicken Rice','Ginseng Chicken Soup','Bingsu','Tortang Talong','Caesar Salad','Ceviche','Aush Reshteh','Aushak','Bolani','Chapli Kabab','Fesenjan','Kesme','Gheimeh','Baklava','Knafeh','Baba Ghanoush','Balaleet','Chakhchoukha','Chebakia','Churros','Frittata','Quiche Lorraine','Faloodeh','Fatayer','Turkish Delight','Australian Meat Pie','Egg Drop Soup','Eiernockerl','Gnocchi','Frankenburger Bratknodel','Goulash','Tafelspitz','Apple Strudel','Apple Pie','Kaiserschmarrn','Germknodel','Kasespatzle','Wiener Schnitzel','Mezzelune','Kuku Sabzi','Dovga','Khachapuri','Ajapsandali','Ghapama','Bangers And Mash','Cauliflower Cheese','Chicken Tikka Masala','Chicken Tikka','Butter Chicken','Coronation Chicken','Devilled Kidneys','Deviled Eggs','Eton Mess','Fish And Chips','Platinum Pudding','Potato Salad','Black Pudding','Kitchener Bun','Palmier','Empanada','Locro','Zabaione','Sorrentinos','Sandwiches De Miga','Lasagna','Moussaka','Tave Kosi','Waterzooi','Chocolate Mousse','Ema Datshi','Feijoada','Ambuyat','Shopska Salad','Fish Amok','Num Banhchok','Samlar Kako','Poutine','Butter Tart','Pastel De Choclo','Stegt Flaesk','Encebollado','Guatitas','Lohikeitto','Beef Bourguignon','Blanquette De Veau','Steak Frites','Chilli Crab','Laksa','Char Kway Teow','Hokkien Mee','Fish Head Curry','Banmian','Mee Rebus','Ayam Penyet','Bak Kut Teh','Chai Tow Kway','Hainanese Curry Rice','Duck Rice','Nasi Goreng','Rojak','Pig Organ Soup','Roti John','Roti Canai','Satay','Sliced Fish Soup','Ais Kacang','Kaya Toast','Chwee Kueh','Pulut Hitam','Nasi Lemak','Banh Mi','Egg Coffee','Pho','Popiah','Pad Thai','Green Curry','Tom Yum','Oyster Meesua','Rosti']


let foodObjectList = 
{
  Pizza: [
    [ 'Cheese', 'Flour', 'Dough', 'Tomato' ],
    [ 'Italy' ],
    [ 'Baking' ],
    'Pizza is a flatbread topped with cheese, tomato sauce and various ingredients, baked in an oven.'
  ],
  'Full English Breakfast': [
    [
      'Bacon',    'Sausage',
      'Egg',      'Tomato',
      'Mushroom', 'Bread',
      'Beans'
    ],
    [ 'England', 'United Kingdom' ],
    [ 'Frying' ],
    'Full English breakfast is a traditional dish consisting of eggs, bacon, sausages, tomatoes, mushrooms, baked beans and toast, often served with black pudding and tea.'
  ],
  Risotto: [
    [
      'Rice',
      'Stock',
      'Broth',
      'Bouillon',
      'Butter',
      'Onion',
      'Cheese',
      'White Wine'
    ],
    [ 'Italy' ],
    [ 'Simmering' ],
    'Risotto is a creamy rice dish from Italy that is cooked with stock and flavored with cheese, herbs and other ingredients.'
  ],
  Katsudon: [
    [
      'Rice',
      'Pork',
      'Chicken',
      'Breadcrumbs',
      'Egg',
      'Soy Sauce',
      'Onion'
    ],
    [ 'Japan' ],
    [ 'Deep Frying' ],
    'Katsudon is a Japanese rice bowl dish topped with a fried pork or Chicken cutlet, eggs and onions cooked in a sweet and salty sauce.'
  ],
  Bibimbap: [
    [
      'Rice',   'Gochujang',
      'Chilli', 'Soy Sauce',
      'Egg',    'Beef',
      'Carrot', 'Cucumber',
      'Kimchi'
    ],
    [ 'Korea' ],
    [ 'Mixing' ],
    'Bibimbap is a Korean dish of rice topped with various vegetables, meat, egg and spicy sauce(gochujang) that are mixed together before eating.'
  ],
  'Bak Chor Mee': [
    [ 'Noodles', 'Minced Meat', 'Chilli', 'Oil', 'Vinegar', 'Pork' ],
    [ 'Singapore' ],
    [ 'Boiling' ],
    'Bak Chor Mee is a Singaporean noodle dish with minced pork, fish'
  ],
  'Hainanese Chicken Rice': [
    [ 'Rice', 'Chicken', 'Stock', 'Ginger', 'Sesame Oil', 'Chilli' ],
    [ 'Singapore', 'Malaysia', 'Thailand' ],
    [ 'Steaming' ],
    'Hainanese Chicken Rice is a Singaporean dish of poached chicken and seasoned rice cooked with chicken fat and broth.'
  ],
  'Ginseng Chicken Soup': [
    [ 'Chicken', 'Ginseng', 'Garlic', 'Rice' ],
    [ 'Korea' ],
    [ 'Boiling' ],
    'Ginseng chicken soup is a Korean soup of a whole chicken stuffed with rice, ginseng, garlic, and other medicinal ingredients.'
  ],
  Bingsu: [
    [ 'Ice', 'Red Bean', 'Condensed Milk', 'Syrup' ],
    [ 'Korea' ],
    [ 'Freezing', 'Assembling' ],
    'Bingsu is a Korean shaved ice dessert with milk-based toppings such as fruit, condensed milk, or red beans.'
  ],
  'Tortang Talong': [
    [ 'Egg', 'Eggplant', 'Salt' ],
    [ 'Philippines' ],
    [ 'Grilling', 'Frying' ],
    'Tortang Talong is a simple Filipino dish of grilled eggplants coated with eggs and fried until golden brown.'
  ],
  'Caesar Salad': [
    [
      'Lettuce',
      'Croutons',
      'Lemon',
      'Olive Oil',
      'Egg',
      'Worcestershire Sauce',
      'Anchovies',
      'Garlic',
      'Mustard',
      'Cheese',
      'Pepper'
    ],
    [ 'Mexico' ],
    [ 'Mixing' ],
    'Caesar Salad is made with romaine lettuce, croutons, cheese, and a dressing made with anchovies, garlic, lemon juice, and egg yolks.'
  ],
  Ceviche: [
    [ 'Fish', 'Lime', 'Lemon', 'Chilli', 'Onion', 'Coriander' ],
    [ 'Peru', 'Costa Rica' ],
    [ 'Curing', 'Assembling' ],
    'Ceviche is a Latin American specialty dish of raw fish or shrimp marinated in citrus juice and seasoned with herbs and spices.'
  ],
  'Aush Reshteh': [
    [ 'Beans', 'Lentils', 'Noodles', 'Tumeric', 'Broth', 'Yogurt' ],
    [ 'Iran', 'Afghanistan' ],
    [ 'Simmering', 'Stewing' ],
    'Aush reshteh is a traditional Persian soup made with noodles, beans, herbs and kashk, a yogurt whey product.'
  ],
  Aushak: [
    [ 'Pasta', 'Chives', 'Tomato', 'Yogurt', 'Mint' ],
    [ 'Afghanistan' ],
    [ 'Boiling' ],
    'Aushak are Afghan dumplings stuffed with chives or leeks and served with a tomato-based sauce, yogurt and dried mint.'
  ],
  Bolani: [
    [ 'Flour', 'Potato', 'Scallion', 'Coriander' ],
    [ 'Afghanistan' ],
    [ 'Frying' ],
    'Bolani is a half-moon shaped flatbread from Afghanistan that can be filled with potatoes, leeks, pumpkin, lentils or meat.'
  ],
  'Chapli Kabab': [
    [ 'Minced Meat', 'Beef', 'Mutton', 'Flour', 'Chilli', 'Coriander' ],
    [ 'Afghanistan', 'Pakistan', 'India', 'Bangladesh' ],
    [ 'Frying', 'Deep Frying' ],
    'Chapli Kabab is a popular street food in South'
  ],
  Fesenjan: [
    [
      'Pomegranate',
      'Walnut',
      'Duck',
      'Chicken',
      'Onion',
      'Tumeric',
      'Cinnamon'
    ],
    [ 'Iran' ],
    [ 'Stewing' ],
    'Fesenjan is a Persian stew made with walnuts, pomegranate molasses, poultry and spices. It has a sweet and sour taste and is usually served over rice.'
  ],
  Kesme: [
    [
      'Noodles', 'Flour',
      'Egg',     'Broth',
      'Potato',  'Meat',
      'Tomato'
    ],
    [ 'Turkey' ],
    [ 'Simmering', 'Boiling' ],
    'Kesme is a type of egg noodle that is sliced from dough and used in various Central Asian soups.'
  ],
  Gheimeh: [
    [ 'Mutton', 'Tomato', 'Peas', 'Onion', 'Lime', 'Potato' ],
    [ 'Iran' ],
    [ 'Stewing' ],
    'Gheimeh is a Persian stew of diced meat, split peas, tomato paste and dried lime, topped with crispy potatoes and served with rice.'
  ],
  Baklava: [
    [ 'Dough', 'Syrup', 'Honey', 'Pistachio', 'Walnut', 'Butter' ],
    [ 'Turkey' ],
    [ 'Baking' ],
    'Baklava is a sweet pastry of Ottoman origin made of thin layers of filo dough filled with chopped nuts and soaked in syrup or honey.'
  ],
  Knafeh: [
    [
      'Dough',
      'Cheese',
      'Almonds',
      'Pistachio',
      'Rose Water',
      'Syrup'
    ],
    [ 'Turkey', 'Iran', 'Iraq', 'Saudi Arabia' ],
    [ 'Baking' ],
    'Knafeh is a Middle Eastern dessert of shredded pastry soaked in syrup, filled with cheese and topped with nuts.'
  ],
  'Baba Ghanoush': [
    [ 'Eggplant', 'Olive Oil', 'Lemon', 'Tahini' ],
    [ 'Israel', 'Jordan', 'Lebanon', 'Palestine', 'Syria' ],
    [ 'Baking', 'Broiling', 'Mixing' ],
    'Baba ghanoush is a smoky eggplant dip with tahini, olive oil, lemon juice and seasonings.'
  ],
  Balaleet: [
    [ 'Noodles', 'Cardamom', 'Rose Water', 'Saffron', 'Egg' ],
    [ 'Iraq', 'Saudi Arabia', 'UAE' ],
    [ 'Frying' ],
    'Balaleet is a sweet and savoury breakfast dish of vermicelli noodles flavoured with sugar, cardamom, saffron and rose water, topped with an omelette.'
  ],
  Chakhchoukha: [
    [ 'Bread', 'Chickpea', 'Tomato', 'Onion', 'Garlic', 'Mutton' ],
    [ 'Algeria' ],
    [ 'Stewing' ],
    'Chakhchouka is a festive Algerian dish of small torn pieces of flatbread mixed with a spicy tomato stew.'
  ],
  Chebakia: [
    [ 'Dough', 'Honey', 'Orange Blossom Water', 'Sesame' ],
    [ 'Algeria', 'Libya', 'Morocco', 'Tunisia', 'Mauritania' ],
    [ 'Deep Frying' ],
    'Chebakia is a crispy and sweet sesame cookie that is dipped in honey and flavored with orange blossom water. It is a popular treat during celebrations.'
  ],
  Churros: [
    [ 'Dough', 'Cinnamon', 'Sugar' ],
    [ 'Spain', 'Portugal' ],
    [ 'Deep Frying' ],
    'A churro is a crispy and fluffy deep-fried pastry stick from Spanish and Portuguese cuisine. It is often topped with cinnamon and sugar.'
  ],
  Frittata: [
    [ 'Egg', 'Meat', 'Cheese', 'Vegetables' ],
    [ 'Italy' ],
    [ 'Frying' ],
    'Frittata is an Italian dish similar to a thick omelette or a crustless quiche. It made with eggs mixed with various ingredients such as cheese, meat, or vegetables.'
  ],
  'Quiche Lorraine': [
    [ 'Pastry', 'Egg', 'Cheese', 'Bacon', 'Cream' ],
    [ 'France' ],
    [ 'Baking' ],
    'Quiche lorraine is a French savory pie made of a pastry crust filled with eggs, cream, cheese, and bacon.'
  ],
  Faloodeh: [
    [ 'Noodles', 'Syrup', 'Sugar', 'Rose Water', 'Lime' ],
    [ 'Iran' ],
    [ 'Mixing', 'Freezing' ],
    'Faloodeh is an Iranian cold dessert similar to a sorbet, made of frozen rice noodles in a sugar and rose water syrup.'
  ],
  Fatayer: [
    [ 'Dough', 'Minced Meat', 'Spinach', 'Cheese' ],
    [ 'Egypt', 'Iraq', 'Lebanon' ],
    [ 'Baking' ],
    'Fatayer is a Middle Eastern meat pie filled with cheese, meat and spinach.'
  ],
  'Turkish Delight': [
    [ 'Starch', 'Sugar', 'Pistachio', 'Dates', 'Rose Water' ],
    [ 'Turkey', 'Iran' ],
    [ 'Boiling', 'Mixing' ],
    'Turkish Delight is a soft and chewy sweet from Turkey made of starch and sugar gel, flavored with rosewater and topped with nuts.'
  ],
  'Australian Meat Pie': [
    [ 'Dough', 'Minced Meat', 'Gravy' ],
    [ 'Australia', 'New Zealand' ],
    [ 'Baking' ],
    'Australian Meat Pie is a popular dish in Australia and New Zealand that consists of a flaky crust and a meat filling, usually served hot with ketchup.'
  ],
  'Egg Drop Soup': [
    [ 'Egg', 'Broth', 'Scallion', 'Tofu' ],
    [ 'China' ],
    [ 'Boiling' ],
    'Egg Drop Soup is a classic Chinese dish that features wispy strands of egg cooked in a savory broth.'
  ],
  Eiernockerl: [
    [ 'Flour', 'Egg', 'Milk', 'Butter' ],
    [ 'Austria' ],
    [ 'Boiling', 'Frying' ],
    'Eiernockerl are egg dumplings that are popular in Viennese cuisine. It can be made with leftover nockerl(small dumplings) or fresh dough.'
  ],
  Gnocchi: [
    [ 'Potato', 'Flour', 'Egg', 'Butter' ],
    [ 'Italy' ],
    [ 'Boiling', 'Frying' ],
    'Gnocchi are soft, pillowy potato dumplings that can be cooked in various ways and paired with different sauces.'
  ],
  'Frankenburger Bratknodel': [
    [ 'Dough', 'Minced Meat', 'Paprika', 'Onion', 'Garlic', 'Lard' ],
    [ 'Austria' ],
    [ 'Boiling' ],
    'Frankeburger Bratknödel are an Austrian speciality of knödel(dumplings) filled with onion, garlic, minced meat, core fat, and seasonings.'
  ],
  Goulash: [
    [ 'Meat', 'Stock', 'Vegetables', 'Paprika', 'Potato' ],
    [ 'Hungary' ],
    [ 'Boiling' ],
    'Goulash is a traditional Hungarian stew of meat and vegetables simmered in a rich paprika sauce.'
  ],
  Tafelspitz: [
    [ 'Beef', 'Apple', 'Horseradish', 'Broth' ],
    [ 'Austria', 'Germany' ],
    [ 'Boiling' ],
    'Tafelspitz is a traditional Viennese dish of beef boiled in broth, accompanied with a tangy apple-horseradish sauce.'
  ],
  'Apple Strudel': [
    [ 'Flour', 'Oil', 'Butter', 'Apple', 'Cinnamon' ],
    [ 'Austria' ],
    [ 'Baking' ],
    'Apple Strudel is a traditional dessert from Austria. It is a crispy, flaky pastry with a juicy apple filling, dusted with powdered sugar to finish.'
  ],
  'Apple Pie': [
    [ 'Apple', 'Flour', 'Sugar', 'Milk', 'Cinnamon', 'Butter' ],
    [ 'England' ],
    [ 'Baking' ],
    'Apple Pie is a classic English dessert made with flaky pastry and a spiced apple filling.'
  ],
  Kaiserschmarrn: [
    [ 'Flour', 'Egg', 'Sugar', 'Milk', 'Butter' ],
    [ 'Austria', 'Hungary' ],
    [ 'Frying' ],
    'Kaiserschmarrn is a fluffy and sweet pancake that is torn into pieces and served with powdered sugar and fruit sauce. It is a traditional Austrian dessert that was named after Emperor Franz Joseph I.'
  ],
  Germknodel: [
    [ 'Dough', 'Sugar', 'Butter', 'Poppy Seeds', 'Jam' ],
    [ 'Austria', 'Germany' ],
    [ 'Steaming' ],
    'Germknödel is a Austrian steamed yeast dough dumpling filled with plum jam and topped with butter and poppy seeds.'
  ],
  Kasespatzle: [
    [ 'Noodles', 'Cheese', 'Onion' ],
    [ 'Germany' ],
    [ 'Baked' ],
    'Kasespatzle is a German dish of homemade egg noodles baked in the oven with butter and cheese, garnished with fried onions.'
  ],
  'Wiener Schnitzel': [
    [ 'Veal', 'Breadcrumbs' ],
    [ 'Germany', 'Austria' ],
    [ 'Deep Frying' ],
    'Wiener Schnitzel is a thin veal cutlet that is coated with flour, eggs and breadcrumbs and fried until crisp. It is one of the national dishes of Austria.'
  ],
  Mezzelune: [
    [ 'Dough', 'Egg', 'Olive Oil', 'Cheese', 'Spinach', 'Mushroom' ],
    [ 'Italy', 'Austria' ],
    [ 'Boiling' ],
    'Mezzelune is a half-moon shaped pasta that is stuffed with cheese, mushrooms or spinach.'
  ],
  'Kuku Sabzi': [
    [ 'Egg', 'Coriander', 'Scallion', 'Cranberry', 'Walnut' ],
    [ 'Iran' ],
    [ 'Frying', 'Steaming' ],
    'Kuku Sabzi is a Persian egg dish consisting of eggs mixed with lots of fresh greens and herbs.'
  ],
  Dovga: [
    [
      'Yogurt',    'Flour',
      'Rice',      'Egg',
      'Spinach',   'Dill',
      'Coriander', 'Mint'
    ],
    [ 'Azerbaijan' ],
    [ 'Simmering' ],
    'Dovga is a creamy Azerbaijani yogurt-based soup combined with various herbs.'
  ],
  Khachapuri: [
    [ 'Bread', 'Cheese', 'Egg', 'Flour' ],
    [ 'Georgia' ],
    [ 'Baking' ],
    'Khachapuri is a Georgian dish of cheese-filled bread that is shaped like a boat and baked with an egg in the center.'
  ],
  Ajapsandali: [
    [ 'Eggplant', 'Onion', 'Garlic', 'Tomato', 'Bell Pepper' ],
    [ 'Georgia', 'Armenia' ],
    [ 'Stewing' ],
    'Ajapsandali is a traditional Georgian and Armenian stew that is made with eggplant, potatoes, tomatoes, bell peppers and herbs.'
  ],
  Ghapama: [
    [ 'Pumpkin', 'Rice', 'Almonds', 'Apple', 'Raisins', 'Dates' ],
    [ 'Armenia' ],
    [ 'Baking' ],
    'Ghapama is an Armenian dish that is made with a pumpkin stuffed with rice and dried fruits. It is a traditional Armenian christmas dish.'
  ],
  'Bangers And Mash': [
    [ 'Sausage', 'Potato', 'Onion', 'Gravy', 'Peas' ],
    [ 'United Kingdom' ],
    [ 'Boiling', 'Frying' ],
    'Sausage and Potato. A classic British pub dish. Yay Britain!'
  ],
  'Cauliflower Cheese': [
    [ 'Cauliflower', 'Cheese' ],
    [ 'Britain', 'United Kingdom' ],
    [ 'Boiling', 'Baking' ],
    'Baked cauliflower with creamy cheese sauce topped with more cheese.'
  ],
  'Chicken Tikka Masala': [
    [ 'Chicken', 'Yogurt', 'Cream', 'Tomato', 'Chilli' ],
    [ 'India', 'United Kingdom' ],
    [ 'Boiling' ],
    'Chicken Tikka Masala was popularised by cooks from India living in Great Britain. It consists of roasted chicken pieces in a spicy and creamy tomato-based sauce.'
  ],
  'Chicken Tikka': [
    [ 'Chicken', 'Yogurt', 'Chilli', 'Ginger', 'Garlic', 'Lemon' ],
    [ 'India', 'Bangladesh', 'Pakistan' ],
    [ 'Baking', 'Grilling' ],
    'A classic Indian appetizer, Chicken Tikka is a grilled dish of chicken pieces marinated in yogurt and spices, served on skewers or with a sauce.'
  ],
  'Butter Chicken': [
    [ 'Chicken', 'Butter', 'Yogurt', 'Cream', 'Tomato' ],
    [ 'India' ],
    [ 'Boiling' ],
    'Butter chicken is a rich and creamy dish of chicken pieces cooked in a tomato-based sauce with butter and cream.'
  ],
  'Coronation Chicken': [
    [ 'Chicken', 'Mayonnaise', 'Curry Powder' ],
    [ 'United Kingdom' ],
    [ 'Mixing' ],
    'Coronation Chicken is dish of cooked chicken mixed with a mayonnaise-based sauce flavoured with curry powder. It is served cold.'
  ],
  'Devilled Kidneys': [
    [ 'Lamb', 'Worcestershire Sauce', 'Mustard', 'Butter', 'Pepper' ],
    [ 'United Kingdom' ],
    [ 'Frying' ],
    'Devilled kidneys are a traditional British dish of lamb kidneys cooked in a spiced sauce, served on toast.'
  ],
  'Deviled Eggs': [
    [ 'Egg', 'Mayonnaise', 'Mustard' ],
    [ 'Italy', 'Spain', 'United States' ],
    [ 'Boiling' ],
    'Deviled Eggs are a popular appetizer made from hard-boiled eggs filled with a creamy mixture of egg yolks, mayonnaise and mustard.'
  ],
  'Eton Mess': [
    [ 'Berries', 'Meringue', 'Cream', 'Strawberry' ],
    [ 'United Kingdom' ],
    [ 'Baking', 'Mixing' ],
    'Eton Mess is a British dessert made by mixing strawberries, meringue, and whipped cream.'
  ],
  'Fish And Chips': [
    [ 'Fish', 'Potato', 'Lemon', 'Mayonnaise' ],
    [ 'United Kingdom', 'England' ],
    [ 'Frying', 'Deep Frying' ],
    'Fish and chips is a traditional British dish of deep-fried fish coated in batter and served with crispy potato fries.'
  ],
  'Platinum Pudding': [
    [ 'Lemon', 'Orange', 'Biscuits', 'Jelly', 'Custard' ],
    [ 'United Kingdom' ],
    [ 'Baking' ],
    "Platinum pudding was invented for a competition to celebrate the Queen's 70th year on the throne. It is a lemon and amaretti trifle."
  ],
  'Potato Salad': [
    [ 'Potato', 'Egg', 'Mayonnaise', 'Onion' ],
    [ 'Germany' ],
    [ 'Boiling', 'Mixing' ],
    'Potato Salad is a cold dish of cooked potatoes mixed with mayonnaise, onion, and other ingrredients.'
  ],
  'Black Pudding': [
    [ 'Blood', 'Fat', 'Oats', 'Barley' ],
    [ 'United Kingdom', 'Ireland' ],
    [ 'Mixing' ],
    'Black Pudding is a type of blood sausage originating from UK and Ireland. It is made with pork'
  ],
  'Kitchener Bun': [
    [ 'Dough', 'Jam', 'Cream' ],
    [ 'Australia' ],
    [ 'Baking', 'Deep Frying' ],
    'A kitchener bun is a fried or baked pastry filled with jam and cream and dusted with powdered sugar. It is a traditional dessert from South Australia.'
  ],
  Palmier: [
    [ 'Pastry', 'Butter', 'Sugar' ],
    [ 'France' ],
    [ 'Baking' ],
    'A palmier is a French pastry that was invented in the early 20th century with a distinct palm leaf or butterfly shape. It is made of puff pastry sprinkled with sugar.'
  ],
  Empanada: [
    [ 'Dough', 'Meat', 'Cheese', 'Corn', 'Tomato' ],
    [ 'Spain' ],
    [ 'Baking', 'Frying' ],
    'An empanada is a baked or fried pastry filled with ingredients such as meat, cheese, vegetables and fruits. It is popular in Spanish and Latin American cultures.'
  ],
  Locro: [
    [ 'Squash', 'Corn', 'Potato', 'Beef' ],
    [ 'Argentina' ],
    [ 'Boiling' ],
    'Locro is a thick squash stew originating from South America. It is made with squash, corn, meat, and vegetables.'
  ],
  Zabaione: [
    [ 'Egg', 'Sugar', 'Wine', 'Custard' ],
    [ 'Italy' ],
    [ 'Simmering', 'Mixing' ],
    'Zabaione is an Italian dessert. It is a sweet and frothy custard creame made with egg yolks, sugar, and wine.'
  ],
  Sorrentinos: [
    [ 'Dough', 'Cheese', 'Ham', 'Spinach' ],
    [ 'Argentina' ],
    [ 'Boiling' ],
    'Sorrentinos are like ravioli, but bigger and more circular. They originated from Argentina and are filled with ham and mozzarella cheese.'
  ],
  'Sandwiches De Miga': [
    [
      'Bread',
      'Ham',
      'Egg',
      'Cheese',
      'Tomato',
      'Bell Pepper',
      'Tuna',
      'Lettuce'
    ],
    [ 'Argentina', 'Uruguay' ],
    [ 'Assembling', 'Toasting' ],
    'Argentine crustless 7-11 sandwiches?'
  ],
  Lasagna: [
    [ 'Pasta', 'Minced Meat', 'Tomato', 'Bechamel', 'Cheese' ],
    [ 'Italy' ],
    [ 'Baking' ],
    'Lasagna is a baked pasta dish consisting of layers of noodles, cheese, sauce, meat, and vegetables. It is a classic Italian comfort food.'
  ],
  Moussaka: [
    [ 'Eggplant', 'Potato', 'Minced Meat', 'Tomato', 'Bechamel' ],
    [ 'Egypt', 'Greece' ],
    [ 'Baking', 'Frying' ],
    'Moussaka is a traditional Greek eggplant and potato casserole. It has a rich tomato-based sauce and a thick layer of bechamel sauce on top.'
  ],
  'Tave Kosi': [
    [ 'Lamb', 'Yogurt', 'Egg', 'Roux', 'Rice' ],
    [ 'Albania' ],
    [ 'Baking' ],
    'Tave kosi is a traditional Albanian dish that consists of lamb and rice baked in a creamy sauce made with yogurt, eggs, flour and butter.'
  ],
  Waterzooi: [
    [ 'Fish', 'Chicken', 'Broth', 'Egg', 'Cream', 'Vegetables' ],
    [ 'Belgium' ],
    [ 'Boiling' ],
    'Waterzooi is a Belgian stew or soup made with fish or chicken. It has a creamy broth that is thickened with egg yolks and cream.'
  ],
  'Chocolate Mousse': [
    [ 'Egg', 'Cream', 'Chocolate' ],
    [ 'France' ],
    [ 'Freezing', 'Mixing' ],
    'Chocolate mousse is a classic French dessert made with chocolate, butter, eggs, and cream.'
  ],
  'Ema Datshi': [
    [ 'Cheese', 'Chilli', 'Butter' ],
    [ 'Bhutan' ],
    [ 'Simmering' ],
    'Ema Datshi is considered the national dish of Bhutan. It is made with chilli peppers and cheese, often served with rice.'
  ],
  Feijoada: [
    [ 'Beans', 'Beef', 'Pork', 'Sausage' ],
    [ 'Brazil', 'Portugal' ],
    [ 'Boiling' ],
    'Feijoada is a bean stew with beef and pork that is widely prepared in the Portuguese-speaking world.'
  ],
  Ambuyat: [
    [ 'Sago' ],
    [ 'Brunei' ],
    [],
    'Ambuyat is a starchy, sticky dish made from the sago palm. It is eaten with a bamboo chopstick, and dipped into a sauce.'
  ],
  'Shopska Salad': [
    [ 'Tomato', 'Cucumber', 'Onion', 'Bell Pepper', 'Cheese' ],
    [ 'Bulgaria' ],
    [ 'Mixing' ],
    'Shopska Salad is a traditional Bulgarian salad of tomatoes, cucumbers, peppers, onion and cheese.'
  ],
  'Fish Amok': [
    [ 'Fish', 'Coconut Milk', 'Egg', 'Curry', 'Kroeung' ],
    [ 'Cambodia' ],
    [ 'Steaming' ],
    'Fish Amok is a Cambodian dish of steamed fish curry with a mousse-like texture, flavored with lemongrass and coconut milk.'
  ],
  'Num Banhchok': [
    [ 'Noodles', 'Kroeung', 'Fish', 'Coconut Milk', 'Bean Sprouts' ],
    [ 'Cambodia' ],
    [ 'Boiling' ],
    'Num Banhchok are Cambodian rice noodles that are lightly fermented and served with various sauces and toppings, such as coconut milk, fish curry, herbs and vegetables.'
  ],
  'Samlar Kako': [
    [ 'Kroeung', 'Fish', 'Rice', 'Vegetables', 'Meat' ],
    [ 'Cambodia' ],
    [ 'Boiling' ],
    'Samlar kako is a spicy soup made with fish, green kroeung, and fish paste. It can be served with rice or eaten on its own.'
  ],
  Poutine: [
    [ 'Potato', 'Gravy', 'Cheese' ],
    [ 'Canada' ],
    [ 'Deep Frying' ],
    'Poutine is a Canadian dish consisting of french fries and cheese curds covered with brown gravy.'
  ],
  'Butter Tart': [
    [ 'Pastry', 'Butter', 'Sugar', 'Syrup', 'Egg' ],
    [ 'Canada' ],
    [ 'Baking' ],
    'Butter tart is a Canadian pastry that consists of a flaky crust filled with a sweet mixture of butter, sugar, eggs and sometimes raisins or nuts.'
  ],
  'Pastel De Choclo': [
    [ 'Corn', 'Minced Meat', 'Raisins', 'Olives', 'Onion' ],
    [ 'Chile' ],
    [ 'Baking' ],
    'Pastel de Choclo is a Chilean corn pie. It is made of a corn pudding layer on top of a meat filling layer.'
  ],
  'Stegt Flaesk': [
    [ 'Potato', 'Pork', 'Coriander', 'Cream' ],
    [ 'Denmark' ],
    [ 'Frying' ],
    'Stegt Flæsk is a Danish dish of fried pork belly served with potatoes and parsley sauce.'
  ],
  Encebollado: [
    [ 'Fish', 'Cassava', 'Onion' ],
    [ 'Ecuador' ],
    [ 'Boiling' ],
    "Encebollado is a fish stew regarded as Ecuador's national dish. It is made with fish served with boiled cassava and pickled red onion rings."
  ],
  Guatitas: [
    [ 'Tripe', 'Peanut', 'Potato', 'Lemon' ],
    [ 'Ecuador' ],
    [ 'Boiling', 'Brining' ],
    'Guatitas is a stew of tripe and potatoes in a peanut sauce, considered a national dish in Ecuador. The dish is considered an acquired taste because of its strong taste.'
  ],
  Lohikeitto: [
    [ 'Salmon', 'Potato', 'Leek', 'Cream' ],
    [ 'Finland' ],
    [ 'Boiling' ],
    'Lohikeitto is a creamy salmon soup with potatoes, carrots and leeks, served with dill. It is common in Finland and other Nordic countries.'
  ],
  'Beef Bourguignon': [
    [ 'Beef', 'Wine', 'Stock', 'Lard', 'Onion', 'Mushroom' ],
    [ 'France' ],
    [ 'Stewing' ],
    'Beef Bourguignon is a French dish of beef braised in red wine, stock, and herbs.'
  ],
  'Blanquette De Veau': [
    [ 'Veal', 'Stock', 'Mirepoix', 'Butter', 'Flour' ],
    [ 'France' ],
    [ 'Boiling' ],
    'A classic dish of French cuisine, Blanquette de Veau consists of veal simmered in broth with vegetables and then thickened with butter and flour.'
  ],
  'Steak Frites': [
    [ 'Beef', 'Potato', 'Hollandaise Sauce' ],
    [ 'Belgium', 'France' ],
    [ 'Frying' ],
    'Steak and fries. Belgium. 2 positives make a super positive.'
  ],
  'Chilli Crab': [
    [ 'Crab', 'Tomato', 'Chilli', 'Egg' ],
    [ 'Singapore' ],
    [ 'Frying', 'Boiling' ],
    'A signature Singaporean dish. Chilli Crab features stir-fried mud crabs in a spicy and tangy tomato-based sauce.'
  ],
  Laksa: [
    [ 'Noodles', 'Coconut Milk', 'Chicken', 'Prawn', 'Chilli' ],
    [ 'Singapore', 'Malaysia' ],
    [ 'Boiling' ],
    'Laksa is a popular Southeast Asian dish featuring thick rice noodles with chicken, prawn, or fish in a spicy coconut broth.'
  ],
  'Char Kway Teow': [
    [
      'Noodles',
      'Soy Sauce',
      'Chilli',
      'Prawn',
      'Cockles',
      'Bean Sprouts'
    ],
    [ 'China', 'Singapore', 'Malaysia' ],
    [ 'Frying' ],
    'Char kway teow is a dish of flat rice noodles stir-fried with soy sauce, egg, bean sprouts and seafood or meat.'
  ],
  'Hokkien Mee': [
    [ 'Noodles', 'Egg', 'Prawn', 'Pork', 'Squid', 'Chilli' ],
    [ 'Singapore', 'Malaysia' ],
    [ 'Frying' ],
    'A popular dish in Malaysia and Singapore, hokkien mee consists of egg noodles and rice noodles stir-fried with egg, pork slices, prawns and squid in a flavourful prawn and pork stock.'
  ],
  'Fish Head Curry': [
    [ 'Fish', 'Curry', 'Eggplant', 'Okra' ],
    [ 'Singapore' ],
    [ 'Boiling' ],
    'A Singaporean dish with Indian and Chinese influences, fish head curry features a large fish head cooked in a rich curry sauce with various vegetables, eaten with rice or bread.'
  ],
  Banmian: [
    [ 'Noodles', 'Vegetables', 'Anchovies', 'Egg', 'Minced Meat' ],
    [ 'Singapore', 'Malaysia' ],
    [ 'Boiling' ],
    'A Chinese noodle dish with various regional variations, Banmian consists of handmade flat noodles served in a broth with various ingredients.'
  ],
  'Mee Rebus': [
    [ 'Noodles', 'Lime', 'Shrimp', 'Tofu', 'Egg' ],
    [ 'Indonesia', 'Malaysia', 'Singapore' ],
    [ 'Boiling' ],
    'A popular dish in Indonesia, Malaysia and Singapore, mee rebus consists of boiled yellow noodles served in a sweet and spicy gravy with toppings such as eggs, tofu, vegetables and lime.'
  ],
  'Ayam Penyet': [
    [ 'Chicken', 'Chilli', 'Tomato' ],
    [ 'Indonesia' ],
    [ 'Deep Frying' ],
    '???'
  ],
  'Bak Kut Teh': [
    [ 'Pork', 'Broth' ],
    [ 'China', 'Malaysia', 'Singapore' ],
    [ 'Boiling' ],
    '???'
  ],
  'Chai Tow Kway': [
    [ 'Radish', 'Egg', 'Flour' ],
    [ 'China' ],
    [ 'Steaming', 'Frying' ],
    '???'
  ],
  'Hainanese Curry Rice': [
    [ 'Rice', 'Curry', 'Gravy', 'Egg', 'Chicken' ],
    [ 'Singapore' ],
    [ 'Frying', 'Braising' ],
    '???'
  ],
  'Duck Rice': [
    [ 'Duck', 'Rice' ],
    [ 'Singapore' ],
    [ 'Braising', 'Roasting' ],
    '???'
  ],
  'Nasi Goreng': [
    [ 'Rice', 'Meat', 'Vegetables', 'Soy Sauce', 'Egg' ],
    [ 'Indonesia' ],
    [ 'Frying' ],
    '???'
  ],
  Rojak: [
    [ 'Pineapple', 'Cucumber', 'Sugar', 'Chilli' ],
    [ 'Indonesia' ],
    [ 'Mixing' ],
    '???'
  ],
  'Pig Organ Soup': [
    [ 'Pork', 'Vegetables', 'Pepper', 'Broth' ],
    [ 'Malaysia', 'Singapore' ],
    [ 'Boiling' ],
    '???'
  ],
  'Roti John': [
    [ 'Bread', 'Minced Meat', 'Onion', 'Egg', 'Chilli', 'Mayonnaise' ],
    [ 'Singapore' ],
    [ 'Frying' ],
    '???'
  ],
  'Roti Canai': [ [ 'Dough', 'Flour' ], [ 'India' ], [ 'Frying' ], '???' ],
  Satay: [ [ 'Meat', 'Peanut' ], [ 'Indonesia' ], [ 'Grilling' ], '???' ],
  'Sliced Fish Soup': [
    [ 'Fish', 'Vegetables', 'Tomato', 'Seaweed' ],
    [ 'Singapore' ],
    [ 'Boiling' ],
    '???'
  ],
  'Ais Kacang': [
    [ 'Ice', 'Red Bean', 'Syrup' ],
    [ 'Malaysia' ],
    [ 'Freezing' ],
    '???'
  ],
  'Kaya Toast': [
    [ 'Bread', 'Coconut', 'Butter' ],
    [ 'Singapore' ],
    [ 'Toasting' ],
    '???'
  ],
  'Chwee Kueh': [
    [ 'Radish', 'Flour' ],
    [ 'Singapore', 'China' ],
    [ 'Steaming' ],
    '???'
  ],
  'Pulut Hitam': [
    [ 'Rice', 'Coconut Milk', 'Sugar' ],
    [ 'Malaysia' ],
    [ 'Boiling' ],
    '???'
  ],
  'Nasi Lemak': [
    [ 'Rice', 'Coconut Milk', 'Pandan', 'Chilli', 'Anchovies' ],
    [ 'Malaysia' ],
    [ 'Boiling' ],
    '???'
  ],
  'Banh Mi': [
    [ 'Bread', 'Pork', 'Meat', 'Vegetables' ],
    [ 'Vietnam' ],
    [ 'Assembling' ],
    '???'
  ],
  'Egg Coffee': [
    [ 'Coffee', 'Condensed Milk', 'Butter', 'Egg' ],
    [ 'Vietnam' ],
    [ 'Mixing' ],
    '???'
  ],
  Pho: [
    [ 'Noodles', 'Beef', 'Broth' ],
    [ 'Vietnam' ],
    [ 'Boiling' ],
    '???'
  ],
  Popiah: [
    [ 'Flour', 'Vegetables', 'Peanut', 'Soy Sauce' ],
    [ 'China' ],
    [ 'Assembling' ],
    '???'
  ],
  'Pad Thai': [
    [
      'Noodles',
      'Egg',
      'Tamarind',
      'Fish Sauce',
      'Prawn',
      'Lime',
      'Bean Sprouts',
      'Peanut',
      'Chilli'
    ],
    [ 'Thailand' ],
    [ 'Frying' ],
    '???'
  ],
  'Green Curry': [
    [ 'Coconut Milk', 'Curry', 'Fish Sauce', 'Basil' ],
    [ 'Thailand' ],
    [ 'Boiling' ],
    '???'
  ],
  'Tom Yum': [
    [ 'Broth', 'Lemongrass', 'Lime', 'Fish Sauce', 'Chilli' ],
    [ 'Thailand' ],
    [ 'Boiling' ],
    '???'
  ],
  'Oyster Meesua': [
    [ 'Oyster', 'Noodles', 'Flour' ],
    [ 'Taiwan' ],
    [ 'Boiling' ],
    '???'
  ],
  Rosti: [ [ 'Potato', 'Butter' ], [ 'Switzerland' ], [ 'Frying' ], '???' ]
}






let ingredientList = ['Cheese','Flour','Dough','Tomato','Bacon','Sausage','Egg','Mushroom','Bread','Beans','Rice','Stock','Broth','Bouillon','Butter','Onion','White Wine','Pork','Chicken','Breadcrumbs','Soy Sauce','Gochujang','Chilli','Beef','Carrot','Cucumber','Kimchi','Noodles','Minced Meat','Oil','Vinegar','Ginger','Sesame Oil','Ginseng','Garlic','Ice','Red Bean','Condensed Milk','Syrup','Eggplant','Salt','Lettuce','Croutons','Lemon','Olive Oil','Worcestershire Sauce','Anchovies','Mustard','Pepper','Fish','Lime','Coriander','Lentils','Tumeric','Yogurt','Pasta','Chives','Mint','Potato','Scallion','Mutton','Pomegranate','Walnut','Duck','Cinnamon','Meat','Peas','Honey','Pistachio','Almonds','Rose Water','Tahini','Cardamom','Saffron','Chickpea','Orange Blossom Water','Sesame','Sugar','Vegetables','Pastry','Cream','Spinach','Starch','Dates','Gravy','Tofu','Milk','Paprika','Lard','Apple','Horseradish','Poppy Seeds','Jam','Veal','Cranberry','Dill','Bell Pepper','Pumpkin','Raisins','Cauliflower','Mayonnaise','Curry Powder','Lamb','Berries','Meringue','Strawberry','Orange','Biscuits','Jelly','Custard','Blood','Fat','Oats','Barley','Corn','Squash','Wine','Ham','Tuna','Bechamel','Roux','Chocolate','Sago','Coconut Milk','Curry','Kroeung','Bean Sprouts','Olives','Cassava','Tripe','Peanut','Salmon','Leek','Mirepoix','Hollandaise Sauce','Crab','Prawn','Cockles','Squid','Okra','Shrimp','Radish','Pineapple','Seaweed','Coconut','Pandan','Coffee','Tamarind','Fish Sauce','Basil','Lemongrass','Oyster'];

let originList = [
  'Italy',       'England',       'United Kingdom', 'Japan',
  'Korea',       'Singapore',     'Malaysia',       'Thailand',
  'Philippines', 'Mexico',        'Peru',           'Costa Rica',
  'Iran',        'Afghanistan',   'Pakistan',       'India',
  'Bangladesh',  'Turkey',        'Iraq',           'Saudi Arabia',
  'Israel',      'Jordan',        'Lebanon',        'Palestine',
  'Syria',       'UAE',           'Algeria',        'Libya',
  'Morocco',     'Tunisia',       'Mauritania',     'Spain',
  'Portugal',    'France',        'Egypt',          'Australia',
  'New Zealand', 'China',         'Austria',        'Hungary',
  'Germany',     'Azerbaijan',    'Georgia',        'Armenia',
  'Britain',     'United States', 'Ireland',        'Argentina',
  'Uruguay',     'Greece',        'Albania',        'Belgium',
  'Bhutan',      'Brazil',        'Brunei',         'Bulgaria',
  'Cambodia',    'Canada',        'Chile',          'Denmark',
  'Ecuador',     'Finland',       'Indonesia',      'Vietnam',
  'Taiwan',      'Switzerland'
]



let methodList = [
  'Baking',     'Frying',
  'Simmering',  'Deep Frying',
  'Mixing',     'Boiling',
  'Steaming',   'Freezing',
  'Assembling', 'Grilling',
  'Curing',     'Stewing',
  'Broiling',   'Baked',
  'Toasting',   'Brining',
  'Braising',   'Roasting'
]


let courseList = 
[
  'Entree',    'Breakfast',
  'Soup',      'Dessert',
  'Side Dish', 'Appetiser',
  'Salad',     'Stew',
  'Pastry',    'Confection',
  'Dumpling',  'Pie'
]

