import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
       axios.get('http://localhost:3001/recipe/recipes')
       .then(recipes =>{
        setRecipes(recipes.data)
       }).catch(err =>{
        console.log(err)
       })
    }, [])
    return (
        <div className='d-flex justify-content-center'>
            <h2>Recipes</h2>
            {
                recipes.map(recipe =>(
                    <div key={recipe._id} className='mt-4 p-3 border'>
                        <Link to={`/read-recipe/${recipe._id}`} className='text-decoration-none'>
                            <h3>{recipe.name}</h3>
                        </Link>
                        <img src={recipe.imgUrl} alt='recipe-pic' />
                        <p>{recipe.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
