let foodList = [
	'Pizza',                  'Full English Breakfast',
	'Risotto',                'Katsudon',
	'Bibimbap',               'Bak Chor Mee',
	'Hainanese Chicken Rice', 'Ginseng Chicken Soup',
	'Bingsu',                 'Tortang Talong',
	'Caesar Salad',           'Ceviche',
	'Aush Reshteh',           'Aushak',
	'Bolani',                 'Chapli Kabab',
	'Fesenjan',               'Kesme',
	'Gheimeh',                'Baklava',
	'Knafeh',                 'Baba Ghanoush',
	'Balaleet',               'Chakhchoukha',
	'Chebakia',               'Churros',
	'Frittata',               'Quiche Lorraine',
	'Faloodeh',               'Fatayer',
	'Turkish Delight'
]

let lowercasedfoodlist = foodList.map(element => {
    return element.toLowerCase();
})

const searchText = 'B';
let filtered = foodList.filter(food => {
    let lowercased = food.toLowerCase();
    if(lowercased.includes(searchText.toLowerCase())){
        return true;
    }
});
console.log(filtered);