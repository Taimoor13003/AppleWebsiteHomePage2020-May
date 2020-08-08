import React, { Component } from 'react'
import './footer.css'
import Ftable from './sub-footer/subFooter'

export default class footer extends Component {

    state = {
        sub2: [
            { listHeadText: "Shop and Learn", flist: "list-up", fli1: <li><a href="/"> Mac</a> </li>, fli2: <li><a href="/"> iPad</a> </li>, fli3: <li><a href="/"> iPhone</a> </li>, fli4: <li><a href="/"> Watch</a> </li>, fli5: <li><a href="/"> Tv</a> </li>, fli6: <li><a href="/"> Music</a> </li>, fli7: <li><a href="/"> AirPods</a> </li>, fli8: <li><a href="/"> HomePod</a> </li>, fli9: <li><a href="/"> iPod touch</a> </li>, fli10: <li><a href="/"> Accessories</a> </li>, fli11: <li><a href="/"> Gift Card</a> </li>},

            {listHeadText: "Services", flist: "list-up", fli1: <li><a href="/"> Apple Music</a> </li>, fli2: <li><a href="/"> Apple News+</a> </li>, fli3: <li><a href="/"> Apple TV+</a> </li>, fli4: <li><a href="/"> Apple Archade</a> </li>, fli5: <li><a href="/"> Apple Books</a> </li>, fli6: <li><a href="/"> Apple Card</a> </li>, fli7: <li><a href="/"> iCloud</a> </li>},
            {listHeadText: "Account", flist: "list-up", fli1: <li><a href="/"> Manage Your Apple ID</a> </li>, fli2: <li><a href="/"> Apple Store Account</a> </li>, fli3: <li><a href="/"> iCloud.com</a> </li>},
            {listHeadText: "Apple Store", flist: "list-up", fli1: <li><a href="/"> FInd a Store</a> </li>, fli2: <li><a href="/"> Shop Online</a> </li>, fli3: <li><a href="/"> Genius Bar</a> </li>, fli4: <li><a href="/"> Today at Apple</a> </li>, fli5: <li><a href="/"> Apple Camp</a> </li>, fli6: <li><a href="/"> Fiels Trip</a> </li>, fli7: <li><a href="/"> Apple Store App</a> </li>, fli8: <li><a href="/"> Refurbished and Clearance</a> </li>, fli9: <li><a href="/"> Financing</a> </li>, fli10: <li><a href="/"> Apple Trade In</a> </li>, fli11: <li><a href="/"> Order Status</a> </li>,fli12:<li><a href="/"> Shopping Help</a> </li>},
            {listHeadText: "For Business", flist: "list-up", fli1: <li><a href="/"> Apple and Business</a> </li>, fli2: <li><a href="/"> Shop for Business</a> </li>},
            {listHeadText: "For Education", flist: "list-up", fli1: <li><a href="/"> Apple and Education</a> </li>, fli2: <li><a href="/"> SHop for K-12</a> </li>, fli3: <li><a href="/"> Shop for College</a> </li>},
            {listHeadText: "For Healthcare", flist: "list-up", fli1: <li><a href="/"> Apple in Healthcare</a> </li>, fli2: <li><a href="/"> Health on Apple Watch</a> </li>},
            {listHeadText: "For Government", flist: "list-up", fli1: <li><a href="/"> Shop for Government</a> </li>, fli2: <li><a href="/"> Shop for Veterans and Military</a> </li>},
            {listHeadText: "Apple Values", flist: "list-up", fli1: <li><a href="/"> Accessibility</a> </li>, fli2: <li><a href="/"> Education</a> </li>, fli3: <li><a href="/"> Environment</a> </li>, fli4: <li><a href="/"> Inclusion and Diversity</a> </li>, fli5: <li><a href="/"> Privacy</a> </li>, fli6: <li><a href="/"> Supplier Responsibility</a> </li>},
            {listHeadText: "About Apple", flist: "list-up", fli1: <li><a href="/"> Newsroom</a> </li>, fli2: <li><a href="/"> Apple Leadership</a> </li>, fli3: <li><a href="/"> Job Opportunities</a> </li>, fli4: <li><a href="/"> Investors</a> </li>, fli5: <li><a href="/"> Events</a> </li>, fli6: <li><a href="/"> Contact Apple</a> </li>}
        ]
    }



    render() {
        return (
            <div>
                <footer>
                    <div className="f-content">
                        <p>
                            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing
                            is after trade‑in of iPhone 8 Plus and iPhone X in good condition. iPhone SE
                            promotional pricing is after trade-in of iPhone 8 in good condition. Additional
                            trade‑in values require purchase of a new iPhone, subject to availability and limits.
                            Must be at least 18. Apple or its trade-in partners reserve the right to refuse
                            or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation
                            of a valid, government-issued photo ID (local law may require saving this information). Sales
                            tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in
                            partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month
                            installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T,
                            Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments
                            terms are in the Customer Agreement. Additional iPhone Payments terms are here.
                        </p>
                        <p>
                            Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group.
                            Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled.
                            Restrictions and other terms apply.
                        </p>
                        <hr className="f-hr"/>

                        <div className="f-list">
                            {this.state.sub2.map((p, index) => {
                                return (

                                    <Ftable
                                        key={index}
                                        uniqueId={index}
                                        listHeadText={p.listHeadText}
                                        flist={p.flist}
                                        fli1={p.fli1}
                                        fli2={p.fli2}
                                        fli3={p.fli3}
                                        fli4={p.fli4}
                                        fli5={p.fli5}
                                        fli6={p.fli6}
                                        fli7={p.fli7}
                                        fli8={p.fli8}
                                        fli9={p.fli9}
                                        fli10={p.fli10}
                                        fli11={p.fli11}
                                        fli12={p.fli12}
                                        fli13={p.fli13}
                                        fli14={p.fli14}
                                        fli15={p.fli15}
                                        fli16={p.fli16}
                                        fli17={p.fli17}
                                        fli18={p.fli18}
                                        fli19={p.fli19}
                                        fli20={p.fli20}
                                        />
                                )
                            })}
                        </div>

<div className="last-div">
                            <p>More ways to shop: <a href="/">Find an Apple Store</a> or <a href="/"> other retailer </a> near you. Or call 1-800-MY-APPLE.</p>

                            <p><span className="countryLogo"> </span><span className="logoText">United States </span></p>

                            <p>Copyright © 2020 Apple Inc. All rights reserved.</p>

                            <p><a href="/">Privacy Policy</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="/">Terms of Use</a> &nbsp;&nbsp;|&nbsp;&nbsp;<a href="/">Sales and Refunds</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="/">Legal</a> &nbsp;&nbsp;|&nbsp;&nbsp;<a href="/">Site Map</a> </p>
                        </div>

                    </div>
                </footer>
            </div>
        )
    }
}
