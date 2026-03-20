"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useCartStore } from  "../store/useCartStore"
export default function Home() {
  const { cart, addItem, decrementItem } = useCartStore();

  // HYDRATION FIX: Ensures client-side data matches server-side initial render
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Chicken Dum Biryani",
      description:
        "Fragrant basmati rice layered with tender, spiced marinated chicken, slow-cooked to perfection and served with refreshing raita.",
      price: "Rs 590",
      image: "/food/Chicken.jpg",
    },
    {
      id: 2,
      name: "Royal Mutton Biryani",
      description:
        "Aromatic basmati rice layered with tender, slow-cooked mutton and rich spices, infused with deep flavors and served with refreshing raita..",
      price: "Rs 850",
      image: "/food/Mutton.jpg",
    },
    {
      id: 3,
      name: "Paneer Biryani",
      description:
        "Fragrant basmati rice layered with soft, spiced paneer cubes and aromatic herbs, slow-cooked for rich flavor and served with refreshing raita.",
      price: "Rs 590",
      image: "/food/Panner.jpg",
    },
        {
      id: 4,
      name: "Chicken Steam Momo",
      description:
      "Soft dumplings filled with spiced chicken, steamed to perfection.", 
      price: "Rs 220",
      Serving: "Best for 1–2 persons",
      image: "/food/chicken-steam-momo.jpg",
    },
 
  
  {
      id: 5,
      name: "Chicken Fried Momo",
      description:
      "Soft Crispy dumplings filled with spiced chicken, deep-fried to golden perfection. ", 
      price: "Rs 270",
      image: "/food/chicken-fried-momo.jpg",
    },


     {
      id: 6,
      name: "Chicken Chilly Momo",
      description:
      "Steamed or fried dumplings tossed in a spicy, tangy chili sauce with tender chicken filling. ", 
      price: "Rs 300",
      image: "/food/chicken-chilly-momo.jpg",
    },


        {
      id: 7,
      name: "Veg. Steam Momo",
      description:
      "Soft dumplings stuffed with fresh, spiced vegetables, steamed to perfection. ", 
      price: "Rs 180",
      image: "/food/veg-steam-momo.jpg",
    },

    {
      id: 8,
      name: "Veg Fried Momo",
      description:
      "Crispy dumplings filled with fresh vegetables and spices, deep-fried to golden perfection. ", 
      price: "Rs 230",
      image: "/food/veg-fried-momo.jpg",
    },

      {
      id: 9,
      name: "Paneer Steam Momo",
      description:
      "Soft dumplings stuffed with spiced paneer, steamed to perfection.", 
      price: "Rs 300",
      image: "/food/paneer-steam-momo.jpg",
    },


    
      {
      id: 10,
      name: "Paneer Fried Momo",
      description:
      "Crispy dumplings stuffed with spiced paneer, deep-fried to golden perfection. ", 
      price: "Rs 320",
      image: "/food/paneer-friend-momo.jpg",
    },


        {
      id: 11,
      name: "Classic Chicken Cheese Burger",
      description:
      "Juicy grilled chicken patty topped with  cheese, fresh lettuce, mayonnaise  sauce, served in a soft toasted bun.", 
      price: "Rs 295",
      image: "/food/classic-chicken-cheese-burger.jpg",
    },
    

      {
      id: 12,
      name: "Crunchy Spicy Cheesy Chicken Burger",
      description:
      "Crispy fried chicken fillet with spicy sauce,  cheese, and fresh lettuce in a soft toasted bun.", 
      price: "Rs 360",
      image: "/food/crunchy-spicy-cheesy-chicken-burger.jpg",
    },


    {
      id: 13,
      name: "Crunchy Cheesy Chicken Burger",
      description:
      "Crispy fried chicken fillet topped with cheese and fresh lettuce, served in a soft toasted bun. ", 
      price: "Rs 325",
      image: "/food/crunchy-cheesy-chicken-burger.jpg",
    },

    
    {
      id: 14,
      name: "Veggie Cheese Burger",
      description:
      "Fresh vegetable patty topped with  cheese, lettuce, mayonnaise sauce, served in a soft toasted bun.", 
      price: "Rs 250",
      image: "/food/veggie-cheese-burger.jpg",
    },


        {
      id: 15,
      name: "Chicken Keema Noodles",
      description:
      "Stir-fried noodles tossed with spiced minced chicken, fresh vegetables, and aromatic sauces.", 
      price: "Rs 295",
      image: "/food/chicken-keema-noodles.jpg",
    },


    {
      id: 16,
      name: "Veg Keema Noodles",
      description:
      "Stir-fried noodles tossed with spiced minced vegetables and aromatic sauces.", 
      price: "Rs 275",
      image: "/food/veg-keema-noodles.jpg",
    },


    
    {
      id: 17,
      name: "Aalu Paratha",
      description:
      "Soft, flaky flatbread stuffed with spiced mashed potatoes, served hot.", 
      price: "Rs 220",
      image: "/food/aalu-paratha.jpg",
    },


      {
      id: 18,
      name: "Chicken Keema Paratha",
      description:
      "Soft, flaky flatbread stuffed with spiced minced chicken.", 
      price: "Rs 275",
      image: "/food/chicken-keema-paratha.jpg",
    },


    {
      id: 19,
      name: "Chicken Keema Paratha",
      description:
      "Soft, flaky flatbread stuffed with spiced minced chicken.", 
      price: "Rs 275",
      image: "/food/chicken-keema-paratha.jpg",
    },


       {
      id: 20,
      name: "Veg Fry Rice",
      description:
      "Stir-fried long-grain rice with fresh vegetables and light soy-based seasoning.", 
      price: "Rs 280",
      image: "/food/veg-fry-rice.jpg",
    },

     {
      id: 21,
      name: "Mixed Fry Rice",
      description:
      "Stir-fried long-grain rice with a mix of vegetables and chicken, lightly seasoned for a flavorful taste.", 
      price: "Rs 350",
      image: "/food/mixed-fry-rice.jpg",
    },


     {
      id: 22,
      name: "Chicken Fry Rice",
      description:
      "Stir-fried long-grain rice with tender chicken pieces, fresh vegetables, and light seasoning.", 
      price: "Rs 330",
      image: "/food/chicken-fry-rice.jpg",
    },

    {
      id: 23,
      name: "Plain Rice",
      description:
      "Steamed long-grain rice, fluffy and perfect as a side or base for curries.", 
      price: "Rs 190",
      image: "/food/plain-rice.jpg",
    },


 {
      id: 26,
      name: "Aalu Curry",
      description:
      "Tender potatoes cooked in a rich, aromatic curry with traditional spices.", 
      price: "Rs 300",
      image: "/food/aalu-curry.jpg",
    },

     {
      id: 27,
      name: "Veg Curry",
      description:
      "Fresh seasonal vegetables cooked in a flavorful, aromatic curry with traditional spices.", 
      price: "Rs 350",
      image: "/food/veg-curry.jpg",
    },


 {
      id: 28,
      name: "Egg Curry",
      description:
      "Boiled eggs simmered in a rich and aromatic spiced gravy.", 
      price: "Rs 450",
      image: "/food/egg-curry.jpg",
    },


{
      id: 29,
      name: "Paneer Curry",
      description:
      "Soft paneer cubes cooked in a rich and creamy spiced gravy.", 
      price: "Rs 550",
      image: "/food/paneer-curry.jpg",
    },


    {
      id: 30,
      name: "Chicken Curry",
      description:
      "Tender chicken pieces cooked in a rich, aromatic spiced gravy.", 
      price: "Rs 550",
      image: "/food/chicken-curry.jpg",
    },
    
  ];

  return (
    <div className="pb-32">
      {/* HERO SECTION */}
      {/* <div className="px-6 pt-6">
        <div className="relative h-48 rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
           <Image 
             src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop" 
             alt="Offer" fill className="object-cover" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg w-fit mb-2 uppercase tracking-wide">
                Today's Special
              </span>
              <h2 className="text-white text-xl font-semibold">Free Raita & Fresh Salad</h2>
           </div>
        </div>
      </div> */}

      {/* MENU SECTION */}
      <div className="px-6 mt-10">
        <div className="mb-6 text-center">
  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
    Our Menu
  </h3>
  <a
    href="https://wa.me/9763681946"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[0.7rem] text-red-600 font-medium mt-1 inline-block"
  >
    Call or WhatsApp: 9763681946
  </a>
</div>

        <div className="space-y-8">
          {menuItems.map((item) => {
            // Check quantity safely after mounting
            const quantity = mounted
              ? cart.find((i) => i.id === item.id)?.quantity || 0
              : 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm"
              >
                {/* 1. IMAGE AT TOP */}
                <div className="relative h-52 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  {/* 2. TITLE */}
                  <h4 className=" font-kanit font-semibold text-lg text-gray-800 ">
                    {item.name}
                  </h4>

                  {/* 3. LESS DESCRIPTION */}
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>

                  {/* 4. PRICE & ADD BUTTON (FLEX ROW) */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-50">
                    <span className="font-semibold text-md text-gray-700">
                      {item.price}
                    </span>

                    <div className="flex items-center bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden h-10">
                      {quantity > 0 ? (
                        <>
                          <button
                            onClick={() => decrementItem(item.id)}
                            className="px-3 h-full text-orange-600 hover:bg-zinc-100 transition-colors"
                          >
                            <Minus size={16} strokeWidth={2.5} />
                          </button>
                          <span className="px-2 font-bold text-slate-800 text-sm">
                            {quantity}
                          </span>
                          <button
                            onClick={() => addItem(item)}
                            className="px-3 h-full text-orange-600 hover:bg-zinc-100 transition-colors"
                          >
                            <Plus size={16} strokeWidth={2.5} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addItem(item)}
                          className="px-6 h-full font-bold text-orange-600 text-xs uppercase tracking-wider hover:bg-orange-50 transition-colors"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
