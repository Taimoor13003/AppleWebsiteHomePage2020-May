import React, { Component } from 'react'
import './navbar.css'
import { FaApple, FaUserCircle } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FiHeart, FiBox } from "react-icons/fi";
import { GiGearHammer } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import ReactResizeDetector from 'react-resize-detector';
export default class navbar extends Component {
    state = {
        buttonBar: false,
        searchBtn: false,
        bagBtn: false,
        firstLine: "none",
        one: "btn-one clr",
        two: "btn-two clr",
        onex: "btn-one one clrr",
        twox: "btn-two two clrr",
        searchOne: "menu",
        length: "navi",
        elem: "uli",
        elemli1: "start",
        elemli12: "wn12 fly",
        elemli6: "wn6 fly6",
        elemli7: "wn7 fly7",
        elemli8: "wn8 fly8",
        elemli9: "wn9 fly9",
        elemli10: "wn10 fly10",
        elemli11: "wn11 fly11",
        elemli2: "wn2 fly2 elibef2",
        el2: "wn2",
        elemli13: "wn13",
        el13: "zone",
        elemli4: "fly4 d-none",
        elemli3: "no-dec-btn fly3",
        elemli5: "wn5 fly5",
        eleman: "elemdesbef",
        elemfil: "eleminpbef",
        sir: "sirbef",
        cancel: "cancelbef",
        options: "optbef d-none",
        ea3: "menu-item no-dec-btn",
        ea4: "",
        ea5: "menu-item wn5 wow",
        ea6: "menu-item wn6 wow",
        ea7: "menu-item wn7 wow",
        ea8: "menu-item wn8 wow",
        ea9: "menu-item wn9 wow",
        ea10: "menu-item wn10 wow",
        ea11: "menu-item wn11 wow",
        el12: "",
        see: true,
        boo: "",
        bag: "bag d-none",
        point: "point d-none",
        diver: "diver d-none"
    }
    onclickHandler = () => {
        
        if (this.state.bagBtn) {
            this.setState({ bag: "bag d-none", point: "point d-none", bagBtn: false,diver :"diver d-none"})
        }
        if (this.state.buttonBar === false) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            this.setState({
                one: 'btn-one one hov-clr', two: 'btn-two two hov-clr', length: "navi navi-length", elem: 'elem', elemli: "lii",
                elemli6: "lii6", elemli7: "lii7", elemli8: "lii8", elemli9: "lii9", elemli10: "lii10", elemli11: "lii11",
                elemli2: "wn2 lii2 elibef2", elemli4: "lii4", elemli5: "lii5", elemli3: "no-dec-btn fly3 lii3", eleman: "elemdesaft",
                elemfil: "eleminpaft", sir: "siraft", buttonBar: true, searchBtn: "", options: "optbef"
            })
        } else {
            this.setState({
                one: 'btn-one no-one hov-clr', two: 'btn-two no-two hov-clr',
                length: 'navi', elem: 'uli', elemli: 'fly',
                elemli6: "wn6 fly6", elemli7: "wn7 fly7", elemli8: "wn8 fly8", elemli9: "wn9 fly9",
                elemli10: "wn10 fly10", elemli11: "wn11 fly11",
                elemli2: 'wn2 fly2 elibef2',
                elemli4: 'wn4 fly4', elemli5: 'wn5 fly5', elemli3: 'fly3',
                eleman: 'elemdesbef',
                elemfil: 'eleminpbef',
                sir: 'sirbef', cancel: 'cancelbef', buttonBar: false, boo: false
            })
        }
    }

    searchHandler = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y); };



        let input = document.getElementById("tag")
        input.select()
        this.setState({
            searchBtn: true,
            ea5: "menu-item wi5 wow",
            ea6: "menu-item wi6 wow",
            ea7: "menu-item wi7 wow",
            ea8: "menu-item wi8 wow",
            ea9: "menu-item wi9 wow",
            ea10: "menu-item wi10 wow",
            ea11: "menu-item wi11 wow",
            elemli12: "wi12 fly",
            el2: "wi2",
            el13: "zone-dis w-0",
            length: "navi",
            elemli4: "lii4",
            cancel: "cancelbef",
            options: "optaft",
            diver: "diver"
        })
        if (this.state.xcel === "Cancel") {
            this.setState({ xcel: <span className="pos" onMouseEnter={this.clrrHovHandler} onMouseLeave={this.clrrHandler}><button className={this.state.onex}>|</button><button className={this.state.twox}>|</button></span> })
        }
        if (this.state.bagBtn) {
            this.setState({ bag: "bag d-none", point: "point d-none", bagBtn: false })
        }
    }

    searchOpHandler = () => {

        window.onscroll = function () { };
        this.setState({
            searchBtn: false,
            // el2: "w2",
            ea5: "menu-item w5 wow",
            ea6: "menu-item w6 wow ",
            ea7: "menu-item w7 wow ",
            ea8: "menu-item w8 wow ",
            ea9: "menu-item w9 wow ",
            ea10: "menu-item w10 wow",
            ea11: "menu-item w11 wow",
            elemli12: "w12 fly",
            el2: "w2",
            length: "navi",
            el13: "zone-back",
            cancel: "cancelbef",
            options: "optbef",
            elemli4: "fly4 d-none",
            diver: "diver d-none"
        })
    }

    cancelAftHandler = () => {
        if (window.innerWidth < 767) {

            this.setState({
                cancel: "cancelaft", elemli1: "start up1aft",
                elemli4: "lii4aft", elemli2: "wn2 lii2 eliaft2", elemli6: "lii6 downaft",
                elemli7: "lii7 downaft", elemli8: "lii8 downaft", elemli9: "lii9 downaft",
                elemli10: "lii10 downaft", elemli11: "lii11 downaft", elemli5: "lii5 downaft",
                options: "optaft", elemfil: "eleminpaft heloaft",
            })
            let input = document.getElementById("tag")
            input.select()
        }
    }
    cancelBefHandler = () => {
        if (window.innerWidth < 767) {

            this.setState({
                cancel: "cancelbef", elemli1: "start up1bef",
                elemli4: "lii4bef", elemli2: "wn2 lii2 elibef2", elemli6: "lii6 downbef"
                , elemli7: "lii7 downbef", elemli8: "lii8 downbef", elemli9: "lii9 downbef"
                , elemli10: "lii10 downbef", elemli11: "lii11 downbef", elemli5: "lii5 downbef",
                options: "optbef", elemfil: "eleminpaft helobef",
            })
        }
        else if (window.innerWidth > 767) {
            this.searchOpHandler()

        }
    }
    onResize = () => {
        if(window.innerWidth > 767 && !this.state.buttonBar){
            this.setState({
                buttonBar: false,
                firstLine: "none",
                one: "btn-one clr",
                two: "btn-two clr",
                onex: "btn-one one clrr",
                twox: "btn-two two clrr",
                
            })
        }
        if (window.innerWidth > 767 && this.state.buttonBar) {
            this.setState({
                ...this.state,
                bagBtn: false,
                searchBtn: false,
                buttonBar: false,
        firstLine: "none",
        one: "btn-one clr",
        two: "btn-two clr",
        onex: "btn-one one clrr",
        twox: "btn-two two clrr",
        searchOne: "menu",
        length: "navi",
        elem: "uli",
        elemli1: "start",
        elemli12: "wn12 fly",
        elemli6: "wn6 fly6",
        elemli7: "wn7 fly7",
        elemli8: "wn8 fly8",
        elemli9: "wn9 fly9",
        elemli10: "wn10 fly10",
        elemli11: "wn11 fly11",
        elemli2: "wn2 fly2 elibef2",
        el2: "wn2",
        elemli13: "wn13",
        el13: "zone",
        elemli4: "fly4 d-none",
        elemli3: "no-dec-btn fly3",
        elemli5: "wn5 fly5",
        eleman: "elemdesbef",
        elemfil: "eleminpbef",
        sir: "sirbef",
        cancel: "cancelbef",
        xcel: "Cancel",
        options: "optbef d-none",
        ea3: "menu-item no-dec-btn",
        ea4: "",
        ea5: "menu-item wn5 wow",
        ea6: "menu-item wn6 wow",
        ea7: "menu-item wn7 wow",
        ea8: "menu-item wn8 wow",
        ea9: "menu-item wn9 wow",
        ea10: "menu-item wn10 wow",
        ea11: "menu-item wn11 wow",
        el12: "",
        see: true,
        boo: "",
        bag: "bag d-none",
        point: "point d-none",
        diver: "diver d-none"
            })
        }
        if (window.innerWidth > 767 && this.state.buttonBar === false && !this.state.boo) {
            this.setState({ elemli4: "fly4 d-none", boo: true })
        }
        if (!this.state.see && this.state.searchBtn) {
            this.setState({ options: "optbef d-none" })
        }
        if (window.innerWidth < 768 && (this.state.ea5 === "menu-item w5 wow" || this.state.ea5 === "menu-item wi5 wow")) {
            this.setState({
                el2: "wn2",
                ea5: "menu-item wn5 wow",
                ea6: "menu-item wn6 wow ",
                ea7: "menu-item wn7 wow ",
                ea8: "menu-item wn8 wow ",
                ea9: "menu-item wn9 wow ",
                ea10: "menu-item wn10 wow",
                ea11: "menu-item wn11 wow",
                elemli12: "wn12 fly",
                el13:"zone",
                elemli13: "wn13",
                cancel: "cancelbef",
                options: "optbef d-none",
                elemli4: "fly4",
                diver: "diver d-none"
            })
        }
        if (window.innerWidth > 767 && !this.state.searchBtn && this.state.options === "optbef") {
            this.setState({
                options: "optbef d-none"
            })
        }
        if (this.state.bagBtn && window.innerWidth < 767) {
            this.setState({ diver: "diver", length: "navi" })
        }
        if (this.state.bagBtn && window.innerWidth > 767) {
            this.setState({ diver: "diver d-none" })
        }

    }
    clrHandler = () => {
        if (this.state.one === 'btn-one hov-clr' && this.state.two === 'btn-two hov-clr') {
            this.setState({ one: 'btn-one clr', two: 'btn-two clr' })
        } else if (this.state.one === 'btn-one one hov-clr' && this.state.two === 'btn-two two hov-clr') {
            this.setState({ one: 'btn-one one clr', two: 'btn-two two clr' })
        } else if (this.state.one === 'btn-one no-one hov-clr' && this.state.two === 'btn-two no-two hov-clr') {
            this.setState({ one: 'btn-one no-one clr', two: 'btn-two no-two clr' })
        }
    }
    clrHovHandler = () => {
        if (this.state.one === 'btn-one clr' && this.state.two === 'btn-two clr') {
            this.setState({ one: 'btn-one hov-clr', two: 'btn-two hov-clr' })
        } else if (this.state.one === 'btn-one one clr' && this.state.two === 'btn-two two clr') {
            this.setState({ one: 'btn-one one hov-clr', two: 'btn-two two hov-clr' })
        } else if (this.state.one === 'btn-one no-one clr' && this.state.two === 'btn-two no-two clr') {
            this.setState({ one: 'btn-one no-one hov-clr', two: 'btn-two no-two hov-clr' })
        }
    }



    clrrHandler = () => {
        if (this.state.onex === "btn-one one clrr-hov" && window.innerWidth > 767) {
            this.setState({ onex: "btn-one one clrr", twox: "btn-two two clrr" })
        }
    }
    clrrHovHandler = () => {
        if (this.state.onex === "btn-one one clrr" && window.innerWidth > 767) {
            this.setState({ onex: "btn-one one clrr-hov", twox: "btn-two two clrr-hov" })
        }
    }



    
    
        bagHandler = () => {
            if (this.state.bag === "bag d-none" && window.innerWidth > 767) {
                this.setState({ bag: "bag", point: "point", bagBtn: true })
            } else if (this.state.bag === "bag d-none" && window.innerWidth < 768) {
                this.setState({ bag: "bag", point: "point", bagBtn: true, diver: "diver" })
            }
            else if (this.state.bag === "bag") {
                this.setState({ bag: "bag d-none", point: "point d-none", bagBtn: false, diver: "diver d-none" })
            }
            if (this.state.searchBtn) {
                this.searchOpHandler()
            }
        }
    diverHandler=()=>{
        if(this.state.searchBtn){
            this.searchOpHandler()
        }
        if(this.state.bagBtn){
            this.setState({
                point: "point d-none", bagBtn: false, diver: "diver d-none",bag:"bag d-none",ea5: "menu-item wow",})
        }
    }
    
    render() {
        return (
            <div className="full" >
                <div onClick={this.diverHandler} className={this.state.diver}></div>
                <ReactResizeDetector handleWidth handleHeight onResize={() => this.onResize()} />
                <nav className={this.state.length}>
                    <div className={this.state.searchOne}>
                        <ul className={this.state.elem} >
                            <li className={this.state.elemli1} onMouseEnter={this.clrHovHandler} onMouseLeave={this.clrHandler} onClick={this.onclickHandler} ><button className={this.state.one}>|</button><button className={this.state.two}>|</button></li>
                            <li className={this.state.elemli2}  ><a href="/" className="menu-item apple-position"><FaApple className={this.state.el2} /> </a></li>
                            <li className={this.state.elemli3}>
                                <button className={this.state.ea3} onClick={this.bagHandler}> <BsBag  className="" />
                                    <div className={this.state.point}></div>
                                </button>
                            </li>
                            <li className={this.state.elemli4} style={{ zIndex: "1000" }}>
                                <div className="input-group">
                                    <div className="boi"
                                    >
                                        <span
                                            onClick={() => this.cancelAftHandler()}
                                            className={this.state.eleman}
                                        >
                                            <GoSearch className={this.state.sir} />
                                        </span>

                                        <input type="text" onClick={this.cancelAftHandler}
                                            className={this.state.elemfil}
                                            placeholder="Search apple.com"
                                            id="tag"
                                        />
                                        <span className={this.state.cancel} onMouseEnter={this.clrrHovHandler} onMouseLeave={this.clrrHandler} onClick={() => this.cancelBefHandler()} >
                                            <span className="canceltxt">
                                                {!this.state.searchBtn ? <button className="canceltxt no-dec-btn hmm" style={{ zIndex: "1000" }} >Cancel</button> : <span className="pos"  ><button className={this.state.onex}>|</button><button className={this.state.twox}>|</button></span>}
                                            </span>
                                        </span>

                                    </div>
                                </div>
                            </li>


                            <li className={this.state.elemli5}  ><a href="/" className={this.state.ea5}> Mac</a></li>
                            <li className={this.state.elemli6}  ><a href="/" className={this.state.ea6}> iPad</a></li>
                            <li className={this.state.elemli7}  ><a href="/" className={this.state.ea7}> iPhone</a></li>
                            <li className={this.state.elemli8}  ><a href="/" className={this.state.ea8}> Watch</a></li>
                            <li className={this.state.elemli9}  ><a href="/" className={this.state.ea9}> TV</a></li>
                            <li className={this.state.elemli10} ><a href="/" className={this.state.ea10}> Music</a></li>
                            <li className={this.state.elemli11} ><a href="/" className={this.state.ea11}> Support</a></li>
                            <li className={this.state.elemli12}><button className="menu-item no-dec-btn" onClick={() => this.searchHandler()}
                            > <GoSearch className={this.state.el12} /></button></li>
                            <li className={this.state.elemli13}>
                                <button onClick={this.bagHandler} className="menu-item no-dec-btn"> <BsBag className={this.state.el13} />
                                    <div className={this.state.point}></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ul className={this.state.options}>
                        <li className="bogo" >QUICK LINKS </li>
                        <li><a className="mub" href="/">COVID-19 Information</a></li>
                        <li><a className="mub" href="/">Apple Store Closure FAQ</a></li>
                        <li><a className="mub" href="/">Shop Apple Store Online</a></li>
                        <li><a className="mub" href="/">Accessories</a></li>
                        <li><a className="mub" href="/">AirPods</a></li>
                    </ul>
                    <div className="boomba">
                        <ul className={this.state.bag} >
                            <li className="bag-head"><h6>Your Bag is empty.</h6></li>
                            <li className="lets"><a href="/" className="und"><BsBag className="bagg-logo" />&nbsp;&nbsp;&nbsp;Bag </a></li>
                            <li className="lets"><a href="/" className="und"><FiHeart className="bagg-logo" />&nbsp;&nbsp;&nbsp;Favorites </a></li>
                            <li className="lets"><a href="/" className="und"><FiBox className="bagg-logo" />&nbsp;&nbsp;&nbsp;Orders </a></li>
                            <li className="lets"><a href="/" className="und"> <GiGearHammer className="bagg-logo" />&nbsp;&nbsp;&nbsp;Account </a></li>
                            <li className="lets"><a href="/" className="und"> <FaUserCircle className="bagg-logo" />&nbsp;&nbsp;&nbsp;Sign in </a></li>
                        </ul>
                    </div>
                    <div className="back">
                    </div>
                </nav>
            </div>
        )
    }
}
