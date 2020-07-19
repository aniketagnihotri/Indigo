import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class CasesData extends Component {

    render() {
        const casesUrl = "https://iu.maps.arcgis.com/apps/opsdashboard/index.html#/eae8ead25ed84f8ba2d16ed28222f34c"
        return (
            <a href={casesUrl}>
                <Button  style = {
                    {
                        margin: 20,
                        height: 40,
                        backgroundColor: "indigo",
                        color: "white",
                        borderRadius: 5,
                        textAlign: "center",
                        width: "auto",
                    }
                }>
                    Please be advised that a total of 288 COVID-19
                        cases have been reported in Marion County, IN over the last seven days.
                </Button>
            </a>
        );
    }

}

export default CasesData;