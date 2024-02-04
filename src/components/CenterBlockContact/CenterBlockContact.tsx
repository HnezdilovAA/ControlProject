import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

import './CenterBlockContact.css'

type Props = {}

const CenterBlockContact = (props: Props) => {
    return (
        <div>
            <div className="centerTextContact">
                <div className="centerTextContactText">
                    {/* <hr color="grey" /> */}
                    {/* <p> C O N T A C T</p> */}
                </div>
                <div>
                    <img src="../images/ContactPhoto.jpg" alt="" />
                </div>
                <div className="centerTextContactTextForm">
                    <p>INSPIRATION FOR TRAVEL BY REAL PEOPLE</p>
                    <br />
                    <p>BOOK SMART, TRAVEL SIMPLE</p>
                    <br />
                    <p>jen@jenniferpowell.com / meghan@sincerelyjules.com</p>
                    <br />
                    <span>Say hi to me on this form!</span>
                </div>
                {/* <div className="formContact">
                </div> */}
                <form className="form-wraper">
                    <br />
                    <h3>Please leave a review</h3>
                    <br />
                    <div>
                        <TextField label="Your name" />
                    </div>
                    <br />
                    <div>
                        <TextareaAutosize
                            className="NameBlockText"
                            minRows={5}
                        />
                    </div>
                    <Button type="submit" variant="outlined">
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default CenterBlockContact
