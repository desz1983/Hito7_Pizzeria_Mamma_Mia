import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [token, setToken] = useState(true);
    const [user, setUser] = useState(false);

    const logout = () => {
        setToken(false);
    };
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:5001/api/pizzas');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setPizzas(data);
                console.log('Fetched pizzas:', data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);


    useEffect(() => {
        if (pizzas.length) {
            setCart(pizzas.map(pizza => ({ ...pizza, cantidad: 0 })));
        }
    }, [pizzas]);

    const total = cart.reduce(
        (acc, pizza) => acc + (pizza.price || 0) * pizza.cantidad,
        0
    );

    const sumaPizza = (id) => {
        setCart(prevCart =>
            prevCart.map((pizza) =>
                pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
            )
        );
    };

    const restaPizza = (id) => {
        setCart(prevCart =>
            prevCart.map((pizza) =>
                pizza.id === id
                    ? { ...pizza, cantidad: Math.max(pizza.cantidad - 1, 0) }
                    : pizza
            )
        );
    };

    return (
        <MyContext.Provider value={{ cart, setCart, total, sumaPizza, restaPizza, pizzas, token, setToken, user, setUser, logout }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;
