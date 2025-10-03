import Fooditem from "./Models/Fooditem.js"
const food_items=[
   {
        "foodId": 1,
        "name": "Margherita Pizza",
        "image": "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
        "category": "Pizza",
        "price":300,
        "type": "Veg",
        "description": "Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil."
    },
    {
        "foodId": 2,
        "name": "Pepperoni Pizza",
        "image": "https://plus.unsplash.com/premium_photo-1733259709671-9dbf22bf02cc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pizza",
        "price":400,
        "type": "Non-Veg",
        "description": "Pizza topped with mozzarella cheese and spicy pepperoni slices."
    },
    {
        "foodId": 3,
        "name": "Farmhouse Pizza",
        "image": "https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pizza",
        "price":200,
        "type": "Veg",
        "description": "Loaded with farm-fresh vegetables like capsicum, tomato, and mushrooms."
    },
    {
        "foodId": 4,
        "name": "BBQ Chicken Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pizza",
        "price":350,
        "type": "Non-Veg",
        "description": "Pizza topped with BBQ chicken, onions, and mozzarella cheese."
    },
    {
        "foodId": 5,
        "name": "Paneer Tikka Pizza",
        "image": "https://images.unsplash.com/photo-1672928225999-a7c3899a7661?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pizza",
        "price":250,
        "type": "Veg",
        "description": "Indian twist on pizza with marinated paneer cubes and veggies."
    },
    {
        "foodId": 6,
        "name": "Chicken Biryani",
        "image": "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
        "category": "Biryani",
        "price":250,
        "type": "Non-Veg",
        "description": "Fragrant rice dish cooked with marinated chicken, spices, and herbs."
    },
    {
        "foodId": 7,
        "name": "Mutton Biryani",
        "image": "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Biryani",
        "price":350,
        "type": "Non-Veg",
        "description": "Aromatic biryani with tender mutton pieces and saffron rice."
    },
    {
        "foodId": 8,
        "name": "Veg Biryani",
        "image": "https://plus.unsplash.com/premium_photo-1695029502961-f57f307bd0c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Biryani",
        "price":200,
        "type": "Veg",
        "description": "Rice cooked with fresh vegetables and aromatic spices."
    },
    {
        "foodId": 9,
        "name": "Egg Biryani",
        "image": "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Biryani",
        "price":200,
        "type": "Non-Veg",
        "description": "Biryani with boiled eggs and flavorful spices."
    },
    {
        "foodId": 10,
        "name": "Hyderabadi Dum Biryani",
        "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Biryani",
        "price":200,
        "type": "Non-Veg",
        "description": "Slow-cooked biryani with layered rice and meat."
    },
    {
        "foodId": 11,
        "name": "Classic Veg Burger",
        "image": "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
        "category": "Burger",
        "price":150,
        "type": "Veg",
        "description": "Crispy vegetable patty with lettuce, tomato, and cheese in a bun."
    },
    {
        "foodId": 12,
        "name": "Cheeseburger",
        "image": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Burger",
        "price":170,
        "type": "Non-Veg",
        "description": "Beef patty topped with melted cheese, lettuce, and tomato."
    },
    {
        "foodId": 13,
        "name": "Chicken Burger",
        "image": "https://images.unsplash.com/photo-1692737349870-e3bfc704ebf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Burger",
        "price":180,
        "type": "Non-Veg",
        "description": "Grilled chicken patty with fresh veggies and sauce."
    },
    {
        "foodId": 14,
        "name": "Paneer Burger",
        "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Burger",
        "price":170,
        "type": "Veg",
        "description": "Grilled paneer with lettuce, tomato, and special sauce."
    },
    {
        "foodId": 15,
        "name": "Double Patty Burger",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Burger",
        "price":200,
        "type": "Non-Veg",
        "description": "Burger with double meat patties and cheese slices."
    },
    {
        "foodId": 16,
        "name": "Spaghetti Carbonara",
        "image": "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pasta",
        "price":300,
        "type": "Non-Veg",
        "description": "Classic Italian pasta with bacon, eggs, and cheese."
    },
    {
        "foodId": 17,
        "name": "Penne Arrabbiata",
        "image": "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pasta",
        "price":320,
        "type": "Veg",
        "description": "Penne pasta in a spicy tomato sauce."
    },
    {
        "foodId": 18,
        "name": "Fettuccine Alfredo",
        "image": "https://images.unsplash.com/photo-1674456720401-1557c76bf72c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pasta",
        "price":350,
        "type": "Veg",
        "description": "Creamy Alfredo sauce with fettuccine pasta."
    },
    {
        "foodId": 19,
        "name": "Chicken Pesto Pasta",
        "image": "https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Pasta",
        "price":280,
        "type": "Non-Veg",
        "description": "Grilled chicken with pasta in a basil pesto sauce."
    },
    {
        "foodId": 20,
        "name": "Lasagna",
        "image": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        "category": "Pasta",
        "price":300,
        "type": "Non-Veg",
        "description": "Layered pasta with meat, cheese, and tomato sauce."
    },
    {
        "foodId": 21,
        "name": "Veg Fried Rice",
        "image": "https://images.unsplash.com/photo-1630914441929-0d8ea69f95e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Chinese",
        "price":180,
        "type": "Veg",
        "description": "Fried rice with mixed vegetables and soy sauce."
    },
    {
        "foodId": 22,
        "name": "Chicken Fried Rice",
        "image": "https://images.unsplash.com/photo-1578160112054-954a67602b88?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Chinese",
        "price":200,
        "type": "Non-Veg",
        "description": "Fried rice with chicken pieces and egg."
    },
    {
        "foodId": 23,
        "name": "Veg Manchurian",
        "image": "https://images.unsplash.com/photo-1682622110433-65513a55d7da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Chinese",
        "price":180,
        "type": "Veg",
        "description": "Fried vegetable balls in a tangy Manchurian sauce."
    },
    {
        "foodId": 24,
        "name": "Chicken Manchurian",
        "image": "https://images.unsplash.com/photo-1714569730595-8db9da7b2860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Chinese",
        "price":210,
        "type": "Non-Veg",
        "description": "Fried chicken pieces in spicy Manchurian gravy."
    },
    {
        "foodId": 25,
        "name": "Hakka Noodles",
        "image": "https://www.themealdb.com/images/media/meals/1529443236.jpg",
        "category": "Chinese",
        "price":250,
        "type": "Veg",
        "description": "Stir-fried noodles with vegetables and sauces."
    },
    {
        "foodId": 26,
        "name": "Chocolate Cake",
        "image": "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Dessert",
        "price":350,
        "type": "Veg",
        "description": "Rich chocolate sponge cake with creamy frosting."
    },
    {
        "foodId": 27,
        "name": "Ice Cream Sundae",
        "image": "https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Dessert",
        "price":200,
        "type": "Veg",
        "description": "Vanilla ice cream topped with chocolate syrup and nuts."
    },
    {
        "foodId": 28,
        "name": "Cheesecake",
        "image": "https://images.unsplash.com/photo-1551879400-111a9087cd86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Dessert",
        "price":200,
        "type": "Veg",
        "description": "Creamy cheesecake with a biscuit base and fruit topping."
    },
    {
        "foodId": 29,
        "name": "Gulab Jamun",
        "image": "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Dessert",
        "price":150,
        "type": "Veg",
        "description": "Soft milk-solid dumplings soaked in sugar syrup."
    },
    {
        "foodId": 30,
        "name": "Brownie",
        "image": "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
        "category": "Dessert",
        "price":200,
        "type": "Veg",
        "description": "Fudgy chocolate brownie squares."
    }
     
]
async function pushAllFoodItems(){
    try{
    const result1 =await Fooditem.deleteMany({})    
    const result2 =await Fooditem.insertMany([...food_items])

    }catch(error){
        console.log(`error from mongodb id ${error}`)
    }
}

export {pushAllFoodItems}