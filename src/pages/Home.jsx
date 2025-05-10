import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
//import Navbar from '../components/Navbar'
//import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Food Recipe</h1>
                    <h3>The Ultimate Food Recipe Resource!</h3>
                    <h5>On this platform, you can post your recipes and access a wide range of food recipes. Discover new dishes, share your favorites, and enjoy easy cooking tips. Join our community of food lover today and start cooking!</h5>
                    <h5>To get started, simply register yourself and start posting register your recipes</h5>
                    <button onClick={addRecipe}>Share your recipe</button>
                    <div className='bg'>
                <h2>All Recipes</h2>
            </div>
                </div>
                <div className='right'>
                    <img src={foodRecipe} width="300px" height="300px"></img>
                </div>
                
            </section>
            
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
            <div className='recipe'>
                <RecipeItems />
            </div>
        </>
    )
}