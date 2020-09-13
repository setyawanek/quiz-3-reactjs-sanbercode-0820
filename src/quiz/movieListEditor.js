import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const DaftarMovie = () => {
    const[daftarMovie,setDaftarMovie]=useState(null);
    const[inputTitle,setInputTitle]=useState("")
    const[inputDescription,setInputDescription]=useState("")
    const[inputYear,setInputYear]=useState("")
    const[inputDuration,setInputDuration]=useState("")
    const[inputGenre,setInputGenre]=useState("")
    const[inputRating,setInputRating]=useState("")
    const[inputImage_url,setInputImage_url]=useState("")
    const[selectedId,setSelectedId]=useState(0)
    const[statusForm,setStatusForm]=useState("create")
    
    useEffect(()=>{
        if(daftarMovie===null){
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res=>{
                setDaftarMovie(res.data.map(el=>{return{id:el.id,title:el.title,description:el.description,year:el.year,duration:el.duration,genre:el.genre,rating:el.rating}}))
            })
        }
    },[daftarMovie])
    const handleEdit = (event) => {
        let idMovie=parseInt(event.target.value);
        let movie=daftarMovie.find(x=>x.id===idMovie)
        setInputTitle(movie.title)
        setInputDescription(movie.description)
        setInputYear(movie.year)
        setInputDuration(movie.duration)
        setInputGenre(movie.genre)
        setInputRating(movie.rating)
        setInputImage_url(movie.Image_url)
        setSelectedId(idMovie)
        setStatusForm("edit")
    }

    const handleDelete=(event) => {
        let idMovie=parseInt(event.target.value);
        let newDaftarMovie=daftarMovie.filter(el=>el.id!==idMovie)
        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
        .then(res=>{
            console.log(res);
        })
        setDaftarMovie([...newDaftarMovie]);
    }

    const handleChange1=(event)=>{
        setInputTitle(event.target.value);
    }

    const handleChange2=(event)=>{
        setInputDescription(event.target.value);
    }

    const handleChange3=(event)=>{
        setInputYear(event.target.value);
    }

    const handleChange4=(event)=>{
        setInputDuration(event.target.value);
    }

    const handleChange5=(event)=>{
        setInputGenre(event.target.value);
    }

    const handleChange6=(event)=>{
        setInputRating(event.target.value);
    }

    const handleChange7=(event)=>{
        setInputRating(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(inputTitle.replace(/\s/g,'')!==""){
            if(statusForm==="create"){
                axios.post(`http://backendexample.sanbercloud.com/api/movies`,{
                    title:inputTitle,
                    description:inputDescription,
                    year:inputYear,
                    duration:inputDuration,
                    genre:inputGenre,
                    rating:inputRating,
                    image_url:inputImage_url})
                .then(res=>{
                    setDaftarMovie([...daftarMovie,{id:res.data.id,title:inputTitle,description:inputDescription,year:inputYear,duration:inputDuration,genre:inputGenre,rating:inputRating}]);
                    console.log(res);
                })
            }
            else if(statusForm==="edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`,{
                    title:inputTitle,
                    description:inputDescription,
                    year:inputYear,
                    duration:inputDuration,
                    genre:inputGenre,
                    rating:inputRating,
                    image_url:inputImage_url
                })
                .then(res=>{
                    let dataMovie=daftarMovie.find(el=>el.id === selectedId)
                    dataMovie.title=inputTitle
                    dataMovie.description=inputDescription
                    dataMovie.year=inputYear
                    dataMovie.duration=inputDuration
                    dataMovie.genre=inputGenre
                    dataMovie.rating=inputRating
                    dataMovie.image_url=inputImage_url
                    setDaftarMovie([...daftarMovie])
                })
            }
            setStatusForm("create")
            setSelectedId(0)
            setInputTitle("")
            setInputYear("")
            setInputRating("")
            setInputGenre("")
            setInputDuration("")
            setInputDescription("")
            setInputImage_url("")
        }
    }
    return(

        <div className="FormMovie">
            <h1 style={{paddingTop:"80px"}}>Tabel Daftar Film</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Year</th>
                    <th>Duration (menit)</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Aksi</th>
                </tr>
        {
            daftarMovie!==null && daftarMovie.map((item)=>{
                return(
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.year}</td>
                        <td>{item.duration}</td>
                        <td>{item.genre}</td>
                        <td>{item.rating}</td>
                        <td>
                            <button id="edit" onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button id="delete" onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
        </table>

        
        {/* Form */}
                    <h1>Form Data Film</h1>
        <div>
            <div className="inputan">    
                <form onSubmit={handleSubmit}>
                    <label>Masukkan Title : </label>
                    <input type="text" value={inputTitle} onChange={handleChange1}/><br/><br/>

                    <label>Masukkan Description : </label><br/>
                    <textarea value={inputDescription} onChange={handleChange2}/><br/><br/>

                    <label>Masukkan Year : </label>
                    <input type="number" min="1980" value={inputYear} onChange={handleChange3} placeholder="2000" /><br/><br/>

                    <label>Masukkan Duration (dalam menit) : </label>
                    <input type="number" value={inputDuration} onChange={handleChange4}/><br/><br/>

                    <label>Masukkan Genre : </label>
                    <input type="text" value={inputGenre} onChange={handleChange5}/><br/><br/>

                    <label>Masukkan Rating : </label>
                    <input type="number" min="1" max="10" value={inputRating} onChange={handleChange6}/><br/><br/>

                    <label>Image URL:</label>
                    <textarea className="col-7" type="text" name="image_url" value={inputImage_url} onChange={handleChange7}/><br></br>

                    <button style={{marginBottom:'50px'}}>submit</button>
                </form>
            </div>
        </div>
            <footer>
                <h5>copyright © 2020 by Sanbercode</h5>
            </footer>
        </div>
    )
}
export default DaftarMovie;