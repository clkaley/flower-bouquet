import { createContext,useState,useContext,useEffect } from "react"; 


const basketContext=createContext();

//const defaultBasket=JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider=({children})=>{
    const [items,setItems]=useState([
        
    ]);

    const addToProduct=(product,findBasketItem)=>{
        console.log("addtoproduct",product);
        //ilk kez ekleniyorsa
        if(!findBasketItem){
            return setItems((items)=>[product,...items])
        }
        //kaldırmak için
        const filtered=items.filter((item)=>item.id !==findBasketItem.id)
        setItems(filtered)
    };

    const removeProduct=(item_id)=>{
        const filtered=items.filter((item)=>item.id !==item_id)
        setItems(filtered)
    }
/*
    const removeProduct=()=>{
        const filtered=items.filter((item)=>item.id !==item.id)
        setItems(filtered)
    }
*/
    const values={
        items,
        setItems,
        addToProduct,
        removeProduct,
    }

    

    return(
        <basketContext.Provider value={values}>
            {children}
        </basketContext.Provider>
    )

}

const useBasket=()=>useContext(basketContext)

export {
    BasketProvider,
    useBasket
};