import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReadRecipe() {
    const {id} = useParams()
    const userId = window.localStorage.getItem('id')
    const [recipe, setRecipe] = useState([])
    const [savedRecipes, setSavedRecipes] = useState([])
    useEffect(()=>{
        const getRecipe = ()=>{
            axios.get('http://localhost:3001/recipe/recipe-by-id/'+id)
        .then(result=>{
            setRecipe(result.data)
        }).catch(err=>console.log(err))
        }

        const fetchSavedRecipes = () =>{
            axios.get('http://localhost:3001/recipe/recipe-by-id/'+userId)
        .then(result=>{
            setSavedRecipes(result.data.savedRecipes)
        }).catch(err=>console.log(err))
        }
        fetchSavedRecipes()
        getRecipe()
    },[])
    const savedRecipe = (recipeId)=>{
        axios.put('http://localhost:3001/recipe', {userId, recipeId})
        .then(result =>(
            setSavedRecipes(result.data.savedRecipes)
        )).catch(err => console.log(err))
    }
    const isRecipeSaved = (id)=> savedRecipes.includes(id)
    return (
        <div className='d-flex justify-content-center container mt-3'>
            <div className='p-2'>
                <img src={recipe.imageUrl} alt='recipe-pic' className='w-100 h-50' />
            </div>
            <div className='p-2'>
                <h1>{recipe.name}</h1>
                <button className='btn btn-warning' onClick={()=>savedRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}>{isRecipeSaved(recipe._id) ? 'saved' : 'save'}</button>
                <h3>Description</h3>
                <p>{recipe.description}</p>
                <h3>Ingredients</h3>
                <p>{recipe.ingredients}</p>                
            </div>
        </div>
    )
}

export default ReadRecipe
