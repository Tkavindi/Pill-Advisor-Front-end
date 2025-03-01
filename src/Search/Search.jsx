import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';
import Loading from '../Loading/Loading';

const Search = () => {
    const [medicine, setMedicine] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!medicine.trim()) return;

        setLoading(true);
        setError('');
        setResult(null);

        try {
            await axios.post('http://localhost:3000/api/search', { name: medicine });

            // Immediately update the search count in the UI
            window.dispatchEvent(new Event("searchCompleted")); 

            const response = await axios.post('http://localhost:3000/api/medicine-info', { name: medicine });
            setResult(response.data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error retrieving information. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='search' id='search'>
            <div className='innerbox1 d-flex justify-content-center align-items-center'>
                <div className='text-center col-8 pt-5'>
                    <h1>Search <span className='green'>Medication</span></h1>
                    <form onSubmit={handleSearch} className="d-flex mt-5 justify-content-center flex-column flex-lg-row">
                        <input
                            type="text"
                            className="searchbox me-2 col-lg-8 col-sm-12"
                            placeholder="Enter name of the medicine"
                            value={medicine}
                            onChange={(e) => setMedicine(e.target.value)}
                        />
                        <button type="submit" className="subbtn rounded px-4">Search</button>
                    </form>
                </div>
            </div>

            {loading && <Loading />}
            {error && <p className="text-center mt-4 text-danger">{error}</p>}

            {result && (
                <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "90vw", margin: "auto" }}>
                                <h2 className="mb-3 text-primary text-center">Medicine Information</h2>
                                <div className="result-content">
                                    <h3 className="mt-4 fw-bold">Uses:</h3>
                                    <p>{result.uses}</p>
                                    <h3 className="mt-4 fw-bold">Precautions:</h3>
                                    <p>{result.precautions}</p>
                                    <h3 className="mt-4 fw-bold">Dosage:</h3>
                                    <p>{result.dosage}</p>
                                    <h3 className="mt-4 fw-bold">Side Effects:</h3>
                                    <p>{result.side_effects}</p>
                                    <h3 className="mt-4 fw-bold">Drug Interactions:</h3>
                                    <p>{result.drug_interactions}</p>
                                    <h3 className="mt-4 fw-bold">Other Details:</h3>
                                    <p>{result.other_details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='innerbox2 d-flex justify-content-center align-items-center pb-5'>
                <h3 className='text-center tcolor'>
                    "Wherever the art of medicine is loved, there is<br />also a love of humanity."
                    <br /><h4 className='author m-1'>- Hippocrates -</h4>
                </h3>
            </div>
        </div>
    );
};

export default Search;
