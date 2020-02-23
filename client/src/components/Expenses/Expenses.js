import React from 'react';
import store from '../../redux/store'
import axios from 'axios'
// import { expensesClicked } from '../../redux/ducks/productActions'
import { getProducts } from '../../redux/ducks/productActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Expenses.css'


class Expenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            monthlyDisplay: false,
            yearlyDisplay: true,
            active: false,
            // expensesClicked: false,
            yearlySelected: null,
            filter: null
        };
        this.year = (new Date()).getFullYear() - 20;
        this.years = Array.from(new Array(21), (val, index) => index + this.year);
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];
    }

    componentDidUpdate() {
        if (this.state.yearlySelected === 'all') {
            axios.get("http://localhost:8000/api/v1/products/?sort=date:desc",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {
                    store.dispatch(getProducts(res.data));
                })
                .catch(err => {
                    console.log(err);
                })
        } else if (this.state.yearlySelected != null && this.state.yearlySelected.length === 4 && !this.state.monthlyDisplay ) {
            let dateFrom = new Date(`${this.state.yearlySelected}-01-01 00:00:00.000`).getTime()
            let dateTo = new Date(`${this.state.yearlySelected}-12-31 23:59:59.000`).getTime()
            axios.get(`http://localhost:8000/api/v1/products/?date_from=${dateFrom}&date_to=${dateTo}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {
                    store.dispatch(getProducts(res.data))
                })
                .catch(err => console.log(err));
        } else if (this.state.filter != null && this.state.yearlySelected != null && this.state.monthlyDisplay) {
            var monthNum;
            for(let i = 0; i < this.months.length; i++) {
                if(this.state.filter === this.months[i]) {
                    monthNum = i + 1;
                    if(i.toString().length === 1) {
                        monthNum = "0" + monthNum.toString();;
                    }
                }
            }
            let dateFrom = new Date(`${this.state.yearlySelected}-${monthNum}-01 00:00:00.000`).getTime()
            let dateTo = new Date(`${this.state.yearlySelected}-${monthNum}-31 23:59:59.000`).getTime()
            axios.get(`http://localhost:8000/api/v1/products/?date_from=${dateFrom}&date_to=${dateTo}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                })
                .then(res => {
                    store.dispatch(getProducts(res.data))
                })
                .catch(err => console.log(err));
        }
    }

    // expensesClicked = () => {
    //     store.dispatch(expensesClicked(!this.state.expensesClicked))
    // }

    // productsClicked = () => {
    //     store.dispatch(expensesClicked(this.state.expensesClicked))
    // }

    monthlySelect = () => {
        this.setState({ yearlyDisplay: false, monthlyDisplay: true, active: true, filter: null, yearlySelected: 'all' })

    }

    yearlySelect = () => {
        this.setState({ monthlyDisplay: false, yearlyDisplay: true, active: false, filter: null, yearlySelected: 'all' })
    }

    yearlySelectHandler = (event) => {
        this.setState({ yearlySelected: event.target.value })
    }
    monthlySelectHandler = (event) => {
        this.setState({ filter: event.target.value })
    }
    render() {

                let yearly =
            <select name="year-select" className="month-select" onChange={this.yearlySelectHandler}>
                <option defaultChecked value='all' > ALL</option>
                {this.years.map((year, index) => {
                    return <option key={`year${index}`} value={year}>{year}</option>
                })}
            </select>;

        

        let monthly = (
            <select name="month-select" className="month-select select-box" onChange={this.monthlySelectHandler}>
                <option defaultChecked>Month</option>
                {this.months.map((month, index) => {
                    return <option key={`month${index}`} value={month}>{month}</option>
                })}
            </select>)
        
        let yearMonthly = (
            <div className="yearMonthly-div">
            {monthly}
            {yearly}
            </div>
        )
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
                            {this.state.monthlyDisplay ? <label htmlFor="month-select">Choose Month</label> : <label htmlFor="year-select"></label>}
                                {this.state.monthlyDisplay ? yearMonthly : yearly} 
                        </div>
                    </div>
                </div>
                <this.props.table />

                <div className="transparent-div">
                    <p>Total spent: <span>{this.props.totalPrice}</span> den. </p>
                </div>



            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
        totalPrice: state.reducer.totalPrice
    }
}

export default connect (mapStateToProps)(Expenses)