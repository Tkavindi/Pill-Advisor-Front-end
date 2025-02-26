import React from 'react'
import './Search.css'

const Search = () => (
    <>
        <div className='search ' id='search'>
            <div className='innerbox1 d-flex justify-content-center align-items-center'>
                <div className='text-center col-8 pt-5'>
                    <h1 className>Search <span className='green'>Medication</span></h1>
                    <form className="d-flex mt-5 justify-content-center flex-column flex-lg-row ">
                        <input
                            type="text"
                            className="searchbox me-2 col-lg-8 col-sm-12 "
                            placeholder="Enter name of the medicine" /> 

                        <button type="submit" className="subbtn rounded px-4  ">Search</button>
                    </form>
                </div>

            </div>
            <div className='innerbox2 d-flex justify-content-center align-items-center pb-5'>
                <h3 className='text-center tcolor'>"Wherever the art of medicine is loved,there is<br></br>also a love of humanity."<br /><h4 className='author m-1'>-Hippocrates-</h4> </h3>
            </div>
        </div>
    </>
)

export default Search