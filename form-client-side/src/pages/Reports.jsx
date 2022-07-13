import React from 'react';
import { useEffect, useState } from 'react';
import surveyServices from '../services/survey';
import { Audio } from "../components/Audio";
import Table from 'react-bootstrap/Table';
import {showError } from "../notifications/Toasts";
import {ToastContainer} from "react-toastify";







export const Reports = () => {
    const [surveys, setsurveys] = useState([])
    useEffect(() => {
        surveyServices.getAll()
            .then(response => {
                setsurveys(response.data)
                // console.log(response.data)
            })
            .catch(error => {
                // console.log(error)
                showError("there was an error getting the surveys reports please retry");

            }) 
    }, []);
    return (
        <div className='p-5'>
        <h1 className='fw-bold text-center fs-2 text-decoration-underline'>Surveys submission reports :</h1>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <Table striped bordered hover style = {{margin:"50px 0 0 0"}}>
            <thead>
                <tr>
                    <th>Date submitted</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Ratings</th>
                </tr>
            </thead>
            <tbody>
                {surveys.map(survey => {
                    return (
                        <tr>
                            <td>{survey.submittedAt}</td>
                            <td>{survey.name}</td>
                            <td>{survey.email}</td>
                            <td>{survey.country}</td>
                            <td>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Genre</th>
                                            <th>Track</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {survey.userRatings.map(rating => {
                                            return (rating.tracksRatings.map((track) => {
                                                return (
                                                    <tr>
                                                        <td>{track.genre}</td>
                                                        <td><Audio track ={track.soundTrack}></Audio></td>
                                                        <td>{track.rating}</td>
                                                    </tr>
                                                )
                                            })
                                            
                                            )
                                            
                                        })}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )
                }
                )}

            </tbody>
        </Table>
            </div>
        )
    }

