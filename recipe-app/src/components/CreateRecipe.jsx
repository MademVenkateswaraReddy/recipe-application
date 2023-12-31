import React, {useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'

function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        ingredients: '',
        imageUrl: '',
        userId: window.localStorage.getItem('id')
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setRecipe({...recipe, [name]: value})
    }
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/recipe/create-recipe', recipe)
        .then(result=>{
            navigate('/')
            console.log(result.data)
            alert('Recipe created')
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 border border-1 w-25'>
                <h3 className='text-danger' style={{textAlign: 'center'}}>Create Recipe</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name of Recipe</label>
                        <input type='text' className='form-control' style={{border: 'none', backgroundColor: '#999'}} placeholder='Enter Name'
                        name='name'
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='ingr'>Ingredients</label>
                        <input type='text' className='form-control' style={{border: 'none', backgroundColor: '#999'}} placeholder='Enter Ingredients'
                        name='ingredients'
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='desc'>Description</label>
                        <input type='text' className='form-control' style={{border: 'none', backgroundColor: '#999'}} placeholder='Describe Your Process'
                        name='description'
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='imageUrl'>Image URL</label>
                        <input type='text' className='form-control' style={{border: 'none', backgroundColor: '#999'}} placeholder='Enter Name'
                        name='imageUrl'
                        onChange={handleChange}/>
                    </div>
                    <button className='btn btn-success mt-4 w-100'>Submit</button>
                </form>
            </div>            
        </div>
    )
}

export default CreateRecipe
