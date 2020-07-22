import React from "react";
import { Button } from "react-bootstrap"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

/*
 * UpdatesModal is a modal that is present in the website-wide header in the Updates tab.
 * UpdatesModal encompasses the "Indigo Weekly" and is present when first launching
 * Indigo.
 */
function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 15,
        outline: 0,
        padding: theme.spacing(4, 4, 4),
    },
}));

export default function UpdatesModal(props) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
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
                        Welcome to Indigo, your center for all things COVID-19 in Indianapolis, IN.<br /><br />
                    </p>

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
                            Make sure to include pictures where possible.</li>
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