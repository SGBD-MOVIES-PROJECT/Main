import React, {useState} from 'react';
import './FilterMovies.css';
import Select from 'react-select';

const filterMovies = [
    {
    value: '2010',
    label: '2010',
    },
    {
    value: '2011',
    label: '2011',
    },{
    value: '2012',
    label: '2012',
    }];


export const FilterMovies = () => {
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = ({value}) => {
        console.log(value);
        setSelectedOption(value);
    }

    return (
        <div>
            <h1>Filter Movies</h1>
            <div className='filterMovies'>
                <p>MoviesYear: { selectedOption }</p>
                <Select
                defaultValue={{label: 'Buscador Anys...', value: 'buit'}}
                options = {filterMovies}
                onChange={handleChange}
                />
            </div>
            <h2 className='popularnow'>MOST POPULAR NOW</h2>
        </div>
            

    )
}

