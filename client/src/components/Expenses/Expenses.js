import React from 'react';

import { Link } from 'react-router-dom'
import './Expenses.css'


class Expenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            monthlyDisplay: false,
            yearlyDisplay: true,
            active: true,

        };
    }

    monthlySelect = () => {
        this.setState({ yearlyDisplay: false, monthlyDisplay: true, active: !this.state.active })

    }

    yearlySelect = () => {
        this.setState({ monthlyDisplay: false, yearlyDisplay: true, active: !this.state.active })
    }
    render() {
        return (
            <React.Fragment>
                <this.props.header />

                <div className="products">
                    <div className="products-div">
                        <h3>Expenses</h3>
                    </div>

                    <div className="tabs-div">
                        <Link to="#"><button id="month-button" className={!this.state.active ? "active-btn select-btns" : "select-btns"}
                            onClick={this.monthlySelect}>Monthly</button></Link>
                        <Link to="#"><button id="year-button" className={this.state.active ? "active-btn select-btns" : "select-btns"}
                            onClick={this.yearlySelect}>Yearly</button></Link>

                        <div className="option-select-div">
                            {/* {this.state.monthlyDisplay ? <label htmlFor="month-select">Choose Month</label> : <label htmlFor="year-select"></label>}
                            {this.state.monthlyDisplay ? yearMonthly : yearly} */}
                        </div>
                    </div>
                </div>
                <this.props.table />

                <div className="transparent-div">
                    <p>Total spent: </p>
                </div>



            </React.Fragment>
        )
    }
}

export default Expenses