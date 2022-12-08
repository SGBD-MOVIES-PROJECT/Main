import React, {useState} from 'react';
import './FilterMovies.css';
import Select from 'react-select';




const year = (new Date()).getFullYear();
const years = (Array.from(new Array(124),( val, index) => year - index));
const languages = [
    { value: 'null', label: 'Any language' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'it', label: 'Italian' },
    { value: 'sv', label: 'Swedish' },
    { value: 'zh', label: 'Chinese' },
    { value: 'de', label: 'German' },
  ];
const genres = [
    { value: 'null', label: 'Any genre' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Action', label: 'Action' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Horror', label: 'Horror' },
];
export const FilterMovies = () => {
    years.reverse();
    years.length = 125;
    years.splice(125, 1, 'Any Year');
    
    
    const [title, setTitle] = useState('');
    const [budgetMin, setBudgetMin] = useState('');
    const [budgetMax, setBudgetMax] = useState('');
    const [durmin, setMinimum] = useState('');
    const [durmax, setMaximum] = useState('');
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    
    
    const handleClick = event => {
        
        console.log('budgetMin: ', budgetMin);
        console.log('budgetMax: ', budgetMax);
        console.log('title: ', title);
        console.log('durmin: ', durmin);
        console.log('durmax: ', durmax);
        console.log('genre: ', genre);
        console.log('language: ', language);
        var e = document.getElementById("fromyear");
        var value = e.value;
        console.log('fromyear: ', value);
        var e = document.getElementById("toyear");
        var value = e.value;
        console.log('toyear: ', value);
        
        var url = 'http://127.0.0.1:8000/api/pelicula/filter/?';
            if(title!=""){
                url = url + 'title=' + title + '&';
            }
            if(budgetMin!=""){
                url = url + 'budgetMin=' + budgetMin + '&';
            }
            if(budgetMax!=""){
                url = url + 'budgetMax=' + budgetMax + '&';
            }
            if(durmin!=""){
                url = url + 'durmin=' + durmin + '&';
            }
            if(durmax!=""){
                url = url + 'durmax=' + durmax + '&';
            }
            if(genre!=null){
                url = url + 'genre=' + genre + '&';
            }
            if(language!=null){
                url = url + 'language=' + language + '&';
            }
            if(value!="Any year"){
                url = url + 'min_date=' + value + '0101'+ '&';
            }
            if(value!="Any year"){
                url = url + 'max_date=' + value + '0101'+ '&';
            }
            url = url.substring(0, url.length - 1);
            console.log(url);

        //http://127.0.0.1:8000/api/pelicula/filter/?min_date=19930101&max_date=19940101
            fetch(url)
              .then(res => res.json())
              .then(
                (result) => {
                  this.setState({
                    items: result.items
                  });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    error
                  });
                }
              )
    };

    return (
        <div className='full-container'>
            <h1> Movie Search Filters</h1>
            
            <div className='filterMovies'>
                <div className='searchbar-container'>  
                    <p className='filters-title' id='title'>Title: </p>
                    <input className='title' type="text" name="title" onChange={event => setTitle(event.target.value)}
                            value={title}/>
                </div>
                <div className='filters-container'>
                    <div className='year-container'>
                        <div className='years-filters-container'>
                            <div className='year-title' id='year-title1'>
                                <p className='filters-title'>From year: </p>
                                <select className='year' id='fromyear'>{
                                    years.map((year, index) => {
                                        return <option key={`year${index}`} value={year}>{year}</option> 
                                    })
                                    
                                }</select>
                            </div>
                            <div className='year-title'>
                                <p className='filters-title' >To year: </p>
                                <select className='year'id='toyear'>{
                                    years.map((year, index) => {
                                        return <option key={`year${index}`} value={year}>{year}</option>
                                    })
                                }</select>
                            </div>
                        </div>  
                        <div>
                            <p className='filters-title'>Language: </p>
                                <Select className='language' 
                                    options={languages} 
                                    defaultValue={languages[0]} onChange={(choice) => setLanguage(choice.value)}
                                />
                        </div>
                    </div>
                    <div className='duration-container'>
                        <p className='filters-title'>Minimum duration time in minutes: </p>
                        <input className='time' type="text" name="min-time" onChange={event => setMinimum(event.target.value)} value={durmin} />
                        <div className='bottom-duration' >
                            <p className='filters-title'>Maximum duration time in minutes: </p>
                            <input className='time' id='bottom-duration' type="text" name="max-time" onChange={event => setMaximum(event.target.value)} value={durmax}/>      
                        </div>
                    </div>
                    <div className='budget-container'>  
                        <div className='budgets'>
                            <div className='budget-title' id='budget-title1'>
                                <p className='filters-title'>Min. budget: </p>
                                <input className='budget' type="text" name="min-budget" onChange={event => setBudgetMin(event.target.value)} value={budgetMin}/>
                            </div>
                            <div className='budget-title'>
                                <p className='filters-title'>Max. budget: </p>
                                <input className='budget' type="text" name="max-budget" onChange={event => setBudgetMax(event.target.value)} value={budgetMax}/>
                             </div>
                        </div>
                        <p className='filters-title'>Genre: </p>
                        <Select className='genre' 
                            options={genres} 
                            defaultValue={genres[0]} onChange={(choice) => setGenre(choice.value)}
                        />
                        
                    </div>
                </div>
            </div>
            <div className = 'submit-button-div'>
                <button onClick={handleClick} className='submit-button' type = 'submit'>SUBMIT</button>
            </div>
        </div>
    )
}
