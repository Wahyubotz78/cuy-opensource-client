import React from "react";
import { connect } from "react-redux";
import { FooterContainer } from '../../styled/dashboardStyle';

const DashboardFooter = () => {

    const getYear = () => {
        let year = new Date()
        return year.getFullYear()
    }

    return (
        <FooterContainer>&copy; {getYear()} deacourse</FooterContainer>
    );
}

export default DashboardFooter;