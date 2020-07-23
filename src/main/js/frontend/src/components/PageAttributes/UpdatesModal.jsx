import React from "react";
import { Button } from "react-bootstrap"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

/*
 * UpdatesModal is a modal that is present in the website-wide header in the Updates tab.
 * UpdatesModal encompasses the "Indigo Weekly" and is present when first launching
 * Indigo.
 */

/*
 * Centers the modal on the page that it is rendered on.
 */
function getCenteredModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

/*
 * Sets styles for the modal.
 */
const styles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        overflow: "auto",
        height: 500,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
        outline: 0,
        padding: theme.spacing(4, 4, 4),
    },
}));

/*
 * Main function of the modal, which manages the states and when it is open.
 * It is open by default on the HomePage.
 */
export default function UpdatesModal(props) {

    const classes = styles();
    const [modalStyle] = React.useState(getCenteredModalStyle);
    let [open, setOpen] = React.useState(props.homePage);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <p onClick={handleOpen}>
                Updates
            </p>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Indigo Weekly</h2>
                    <p>(7/24/2020)</p>
                    <p>
                        Welcome to Indigo, your center for all things COVID-19 in Indianapolis, IN. Your safety is our top priority.<br /><br />
                    </p>

                    <h5>
                        Notice
                    </h5>
                    <p>
                        Indigo supports the go-to tourism site for Indianapolis, Visit Indy, as well as The Hoosier Hospitality Promise.<br /><br />
                    </p>

                    <h5>
                        Resources
                    </h5>
                    <div className={"inline-block"} style={
                        {
                            marginBottom: 10
                        }
                    }>
                        <a href="https://www.indy.gov/topic/covid"
                           rel="noopener noreferrer" target="_blank">
                            <Button style={
                                {
                                    marginRight: 20
                                }
                            }>
                                Indiana COVID-19 Guidelines
                            </Button>
                        </a>
                        <a href={"https://www.indy.gov/activity/face-coverings-for-marion-county-residents"}
                           rel="noopener noreferrer" target="_blank">
                            <Button style={
                                 {
                                     marginRight: 20
                                 }
                             }>
                                Free masks
                            </Button>
                        </a>
                        <a href={"https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html"}
                           rel="noopener noreferrer" target="_blank">
                            <Button style={
                                {
                                    marginRight: 20
                                }
                            }>
                                CDC Travel Recommendations
                            </Button>
                        </a>
                    </div>
                    <div className={"inline-block"} style={
                        {
                            marginBottom: 20
                        }
                    }>
                        <a href={"https://www.visitindy.com/indianapolis-indy-welcomes-you-back-safely#reopening"}
                           rel="noopener noreferrer" target="_blank">
                            <Button style={
                                {
                                    marginRight: 20
                                }
                            }>
                                Visit Indy Reopening Guidelines
                            </Button>
                        </a>
                        <a href={"https://www.coronavirus.in.gov/"}
                           rel="noopener noreferrer" target="_blank">
                            <Button style={
                            {
                                marginRight: 20
                            }
                            }>
                                Indiana COVID-19 Website
                            </Button>
                        </a>
                        <br />
                        <br />
                    </div>

                    <h5>
                        COVID-19 City Updates
                    </h5>
                    <ul>
                        <li>Gov. Eric Holcomb has decided to keep Indiana's current capacity limits for restaurants due to rising COVID-19 cases.</li>
                        <li>While the Indy 500 will go on, the event is limited to 25% capacity.</li>
                    </ul>

                    <br />

                    <h5>
                        Attention business owners!
                    </h5>
                    <ul>
                        <li>Descriptions of changes made to combat COVID-19 should be as descriptive as possible.
                            Make sure to include pictures when possible.</li>
                        <li>To be considered for a sponsorship, contact help.indigo04@gmail.com.</li>
                    </ul>

                    <div>
                        <Button onClick={handleClose} style={
                            {
                                marginTop: 20
                            }
                        }>
                            Close
                        </Button>
                        <p style={
                            {
                                fontSize: 12,
                            }
                        }>Sources: wthr.com and abc7chicago.com</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}