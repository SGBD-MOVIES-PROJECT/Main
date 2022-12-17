import { useEffect, useMemo, useState } from 'react';
import './FilterMovies.css';
import Select from 'react-select';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import DisplayJson from './DisplayJson';
import { Table } from 'react-bootstrap';
import TableUrl from './TableUrl';



const year = (new Date()).getFullYear();
const years = (Array.from(new Array(124),( val, index) => year - index));

var url = 'http://127.0.0.1:8000/api/pelicula/filter/?';
const languages = [
    { value: '', label: 'Any language' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'it', label: 'Italian' },
    { value: 'sv', label: 'Swedish' },
    { value: 'zh', label: 'Chinese' },
    { value: 'de', label: 'German' },
  ];
const genres = [
    { value: '', label: 'Any genre' },
    { value: 'drama', label: 'Drama' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'action', label: 'Action' },
    { value: 'crime', label: 'Crime' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'romance', label: 'Romance' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'horror', label: 'Horror' },
    { value: 'animation', label: 'Animation' },
];
export const FilterMovies = () => {
    years.reverse();
    years.length = 125;
    years.splice(125, 1, 'Any Year');
    
    const [showPosts, setshowPosts] = useState();

    let displayData

    function url2(p){
        let url = "./createreview/";
        url += "?movie=" + p ;
        return url;
    }
    const columns = [
        { key: '1', title: 'ID' , dataIndex: 'id'},
        { key: '2', title: 'Title', dataIndex: 'original_title' },
        { key: '3', title: 'Language', dataIndex: 'original_language' },
        { key: '4', title: 'Release Date', dataIndex: 'release_date' },
        { key: '5', title: 'Budget' , dataIndex: 'budget'},
        { key: '6', title: 'Genres' , dataIndex: 'genres'}
    ];
    const [dataSource, setDataSource] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    useEffect(() => {
        setloading(true);
        url = url.substring(0, url.length - 1);
        fetch(url)
        .then(response => response.json() )
        .then(data => {
            setDataSource(data);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setloading(false);
        })
        }, [])

    function pullJson(){
        console.log("before fetch");
        console.log("hola");
        console.log(url);
        fetch(url)
        .then(response => response.json() )
        .then(responseData => {
            displayData = function(){
                let tbodyData=responseData; 
          
            
            console.log(tbodyData);
            return(
                
                // <div>
                //   <Table>
                //     loading: {loading}
                //     columns: {columns}
                //     dataSource: {dataSource}
                //     pagination: {{
                //         pageSize: pageSize,
                //         current: page,
                //         onChange: (page, pageSize) => {
                //             setPageSize(pageSize);
                //             setPage(page);
                //         }
                //     }}
                // </Table>  
                    
                
                // </div>
                
                <table>
                <thead>
                    <tr>
                        {/* <td>Id</td> */}
                        <td>Original title</td>
                        <td>Original language</td>
                        <td>Release date</td>
                        <td>Budget</td>
                    </tr>
                </thead>
                <tbody>
                    {   tbodyData.map(todo => (
                    <tr>
                        {/* <th>{todo.id}</th> */}
                        <th> <a href={url2(todo.original_title)}>{todo.original_title}</a></th>
                        <th>{todo.original_language}</th>
                        <th>{todo.release_date}</th>
                        <th>{todo.budget}</th>
                    </tr>
                    ))}
                </tbody>
            </table>
             )
        }
            setshowPosts(displayData)
        })
             
     }

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
        var d = document.getElementById("toyear");
        var value1 = d.value;
        console.log('toyear: ', value);
        url = 'http://127.0.0.1:8000/api/pelicula/filter/?';
            if(title!==""){
                url = url + 'original_title=' + title + '&';
            }
            if(budgetMin!==""){
                url = url + 'budgetMin=' + budgetMin + '&';
            }
            if(budgetMax!==""){
                url = url + 'budgetMax=' + budgetMax + '&';
            }
            if(durmin!==""){
                url = url + 'durmin=' + durmin + '&';
            }
            if(durmax!==""){
                url = url + 'durmax=' + durmax + '&';
            }
            if(genre.length!==0){
                url = url + 'genre=' + genre + '&';
            }
            if(language.length!==0){
                url = url + 'original_language=' + language + '&';
            }
            if(value!=="Any Year"){
                url = url + 'min_date=' + value + '0101'+ '&';
            }
            if(value1!=="Any Year"){
                url = url + 'max_date=' + value1 + '0101'+ '&';
            }
            url = url.substring(0, url.length - 1);
            console.log(url);

        //http://127.0.0.1:8000/api/pelicula/filter/?min_date=19930101&max_date=19940101
          
        pullJson();     
    };

            return (
                <div className='full-container'>
                    <h1> Movie Search Filters</h1>
                    <h1> ___________________________________________________________________________________________________________________</h1>
                    
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
                                <p className='filters-title2'>Minimum duration time in minutes: </p>
                                <input className='time' type="text" name="min-time" onChange={event => setMinimum(event.target.value)} value={durmin} />
                                <div className='bottom-duration' >
                                    <p className='filters-title2'>Maximum duration time in minutes: </p>
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
                        <h1> ___________________________________________________________________________________________________________________</h1>
                        {/* <TableUrl/>  */}
                    </div>
                    
                        {/* <ul>
                            {items.map(item => (
                             <li key={item.id}>
                            {item.name} {item.price}
                            </li>
                            ))}
                        </ul> */}
                        {showPosts}
                        <div>
                            
                </div>
                </div>
                
            );
        }
    
