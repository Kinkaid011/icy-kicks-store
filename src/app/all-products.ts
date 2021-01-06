import { FilterPipe } from './filter.pipe';
import { Product } from './product';

export const ALLPRODUCTS: Product[] = [
    {
        id: 1,
        name: "Black Jordans I",
        gender: "Men's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/black-jordans.jpg",
        brand: "Jordan",
        section: "other",
        gen: "male"
    },

    {
        id: 2,
        name: "Black and Red Airmax",
        gender: "Men's Shoe",
        kid: false,
        price: 170,
        image: "../../assets/images/shoe-list/black-max.jpg",
        brand: "Airmax",
        section: "Featured Items",
        gen: "male"
    },

    {
        id: 3,
        name: "Black Runners",
        gender: "Men's Shoe",
        kid: false,
        price: 120,
        image: "../../assets/images/shoe-list/black-nikes.jpg",
        brand: "Nike",
        section: "Featured Items",
        gen: "male"
    },

    {
        id: 4,
        name: "All Black Timbs",
        gender: "Men's Shoe",
        kid: false,
        price: 80,
        image: "../../assets/images/shoe-list/black-timbs.jpg",
        brand: "Timberland",
        section: "Fall Hits",
        gen: "male"
    },

    {
        id: 5,
        name: "High Top Forces",
        gender: "Women's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/black-womens-nike.jpg",
        brand: "Nike",
        section: "Members Exclusive",
        gen: "female"
    },

    {
        id: 6,
        name: "Gold Max",
        gender: "Men's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/gold-max.jpg",
        brand: "Airmax",
        section: "Most Wanted",
        gen: "male"
    },
    
    {
        id: 7,
        name: "Gold Jordan I",
        gender: "Men's Shoe",
        kid: false,
        price: 115,
        image: "../../assets/images/shoe-list/gold-jordans.jpg",
        brand: "Jordan",
        section: "Trend One",
        gen: "male"
    },
    
    {
        id: 8,
        name: "Gray Adidas",
        gender: "Women's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/gray-adidas.jpg",
        brand: "Adidas",
        section: "Members Exclusive",
        gen: "female"
    },
    
    {
        id: 9,
        name: "Green Adidas",
        gender: "Men's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/green-adidas.jpg",
        brand: "Adidas",
        section: "Featured Items",
        gen: "male"
    },
    
    {
        id: 10,
        name: "Silver Timbs",
        gender: "Women's Shoe",
        kid: false,
        price: 90,
        image: "../../assets/images/shoe-list/grey-timbs.jpg",
        brand: "Timberland",
        section: "Fall Hits",
        gen: "female"
    },
    
    {
        id: 11,
        name: "Grizzle Airmax",
        gender: "Men's Shoe",
        kid: false,
        price: 110,
        image: "../../assets/images/shoe-list/grizz-max.jpg",
        brand: "Airmax",
        section: "Featured Items",
        gen: "male"
    },
    
    {
        id: 12,
        name: "Red Checks",
        gender: "Men's Shoe",
        kid: false,
        price: 110,
        image: "../../assets/images/shoe-list/red-check-jordans.jpg",
        brand: "Nike",
        section: "Featured Items",
        gen: "male"
    },
    
    {
        id: 13,
        name: "Olive Jordans",
        gender: "Women's Shoe",
        kid: false,
        price: 100,
        image: "../../assets/images/shoe-list/olive-jordans.jpg",
        brand: "Jordan",
        section: "Members Exclusive",
        gen: "female"
    },
    
    {
        id: 14,
        name: "The Originals",
        gender: "Men's Shoe",
        kid: false,
        price: 100,
        image: "../../assets/images/shoe-list/originals.jpg",
        brand: "Adidas",
        section: "Featured Items",
        gen: "male"    
    },
    
    {
        id: 15,
        name: "Pink Airmax",
        gender: "Women's Shoe",
        kid: false,
        price: 150,
        image: "../../assets/images/shoe-list/pink-max.jpg",
        brand: "Airmax",
        section: "Most Wanted",
        gen: "female"    
    },
    
    {
        id: 16,
        name: "Purle Max",
        gender: "Women's Shoe",
        kid: false,
        price: 150,
        image: "../../assets/images/shoe-list/purple-max.jpg",
        brand: "Airmax",
        section: "Most Wanted",
        gen: "female"
        },
    
    {
        id: 17,
        name: "All Star Max",
        gender: "Men's Shoe",
        kid: false,
        price: 110,
        image: "../../assets/images/shoe-list/red-blue-max.jpg",
        brand: "Airmax",
        section: "Members Exclusive",
        gen: "male"
        },
    
    {
        id: 18,
        name: "Red Airmax",
        gender: "Men's Shoe",
        kid: false,
        price: 150,
        image: "../../assets/images/shoe-list/red-max.jpg",
        brand: "Airmax",
        section: "Members Exclusive",
        gen: "male"
        },
    
    {
        id: 19,
        name: "Red Runners",
        gender: "Men's Shoe",
        kid: true,
        price: 50,
        image: "../../assets/images/shoe-list/red-nikes.jpg",
        brand: "Nike",
        section: "Member Exclusive",
        gen: "male"
        },
    
    {
        id: 20,
        name: "Silver Max",
        gender: "Men's Shoe",
        kid: true,
        price: 50,
        image: "../../assets/images/shoe-list/silver-max.jpg",
        brand: "Airmax",
        section: "Most Wanted",
        gen: "male"
        },
    
    {
        id: 21,
        name: "Tan Forces",
        gender: "Men's Shoe",
        kid: true,
        price: 50,
        image: "../../assets/images/shoe-list/tan-forces.jpg",
        brand: "Nike",
        section: "Member Exclusive",
        gen: "male"
    },
    
    {
        id: 22,
        name: "Tan Nikes",
        gender: "Men's Shoes",
        kid: true,
        price: 50,
        image: "../../assets/images/shoe-list/tan-nikes.jpg",
        brand: "Nike",
        section: "Featured Items",
        gen: "male"
    },
    
    {
        id: 23,
        name: "Wheat Timbs",
        gender: "Men's Shoe",
        kid: true,
        price: 50,
        image: "../../assets/images/shoe-list/wheat-timbs.jpg",
        brand: "Timberland",
        section: "Fall Hits",
        gen: "male"
    },

    {
        id: 24,
        name: "Timberland Heels",
        gender: "Women's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/timb-heels.jpg",
        brand: "Jordan",
        section: "Fall Hits",
        gen: "female"
    },
    {
        id: 25,
        name: "Space Forces",
        gender: "Men's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/space-nike.jpg",
        brand: "Jordan",
        section: "Trend Two",
        gen: "male"
    },

    {
        id: 26,
        name: "White Runners",
        gender: "Men's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/white-nikes.jpg",
        brand: "Jordan",
        section: "Featured Items",
        gen: "male"
    },

    {
        id: 27,
        name: "Blue Runners",
        gender: "Men's Shoe",
        kid: false,
        price: 140,
        image: "../../assets/images/shoe-list/blue-nikes.jpg",
        brand: "Nike",
        section: "Featured Items",
        gen: "male"
    },
    
]