import React, { Component } from 'react'
import './home.css'
import Sub1 from './sub/sub1'
import { RiArrowDropRightLine } from 'react-icons/ri';
export default class home extends Component {

    state = {
        sub1: [
            { img: "pic-4-1", id: "1", fullImg: "fullImg4-1", Text1: "Apple's approach to", Text2: "reopening our stores", Text3: "", Text4: "", Text5: "", Text6: "", classText1: "t1-style1", classText2: "t1-style2", classText3: "", classText4: "", classText5: "", classText6: "", tag: "sub-img-tag1", linkPos: "linkPos1", linkStyle1: "link1Style1", linkStyle2: "", linkLogo1: "", linkLogo2: "d-none", linkText1: "Read the letter", linkText2: "", appleLogo: "d-none", link1Logo2: "d-none", dee: "d-none" },
            { img: "pic-4-2", id: "2", fullImg: "fullImg4-2", Text1: "WATCH", Text2: "SERIES 5", Text3: "With the Always-On Retina Display.", Text4: "You've never seen a watch like this.", Text5: "", Text6: "", classText1: "t2-style1", classText2: "t2-style2", classText3: "t2-style3", classText4: "t2-style4", classText5: "", classText6: "", tag: "sub-img-tag2", linkPos: "linkPos2", linkStyle1: "link2Style1", linkStyle2: "", linkLogo1: "", linkLogo2: "", linkText1: "Learn more", linkText2: "Buy", appleLogo: "appleLogoStyle1", link1Logo2: "d-none", dee: "d-none" },
            { img: "pic-4-3", id: "3", fullImg: "fullImg4-3", Text1: "Make them yours.", Text2: "Personalize your AirPods with free engraving.Only at Apple.", Text3: "", Text4: "", Text5: "", Text6: "", classText1: "t3-style1", classText2: "t3-style2", classText3: "", classText4: "", classText5: "", classText6: "", tag: "sub-img-tag3", linkPos: "linkPos3", linkStyle1: "link3Style1", linkStyle2: "", linkLogo1: "", linkLogo2: "", linkText1: "Learn more", linkText2: "Buy", appleLogo: "d-none", link1Logo2: "d-none", dee: "d-none" },
            { img: "pic-4-4", id: "4", fullImg: "fullImg4-4", Text1: "tv+", Text2: "ear...", Text3: "One person's story can", Text4: "change the world.", Text5: "", Text6: "", classText1: "t4-style1", classText2: "t4-style2", classText3: "t4-style3", classText4: "t4-style4", classText5: "", classText6: "", tag: "sub-img-tag4", linkPos: "linkPos4", linkStyle1: "link4Style1", linkStyle2: "", linkLogo1: "d-none", linkLogo2: "d-none", linkText1: "Watch the complete series", linkText2: "", appleLogo: "appleLogoStyle2", link1Logo2: "playLogo", dee: "dee" },
            { img: "pic-4-5", id: "5", fullImg: "fullImg4-5", Text1: "Buy a Mac or iPad for college. Get AirPods.", Text2: "", Text3: "", Text4: "", Text5: "", Text6: "", classText1: "t5-style1", classText2: "t5-style2", classText3: "t5-style3", classText4: "", classText5: "", classText6: "", tag: "sub-img-tag5", linkPos: "linkPos5", linkStyle1: "link5Style1", linkStyle2: "d-none", linkLogo1: "", linkLogo2: "", linkText1: "Shop", linkText2: "", appleLogo: "d-none", link1Logo2: "d-none", dee: "d-none" },
            { img: "pic-4-6", id: "6", fullImg: "fullImg4-6", Text1: "Apple Card", Text2: "Monthly", Text3: "Installments", Text4: "Pay for your new Apple products over time, intrest-free with Apple Card.", Text5: "", Text6: "", classText1: "t6-style1", classText2: "t6-style2", classText3: "t6-style3", classText4: "t6-style4", classText5: "", classText6: "", tag: "sub-img-tag6", linkPos: "linkPos6", linkStyle1: "link6Style1", linkStyle2: "", linkLogo1: "", linkLogo2: "d-none", linkText1: "Learn more", linkText2: "", appleLogo: "d-none", link1Logo2: "d-none", dee: "d-none" },
        ]
    }

    render() {



        return (
            <div>

                <section>
                    <div className="section1">
                        <h2 className="sec1h2"><a href="/">Evaluate COVID-19 symptoms and understand next steps<RiArrowDropRightLine className="arrow" /></a></h2>
                        <h2 className="sec1h22"><a href="/">Shop online</a>&nbsp; and get free, no-contact delievery, Specialist help and more.</h2>
                        <div>
                            <div className="full-img">
                                <div className="pic-1-2">
                                    <h1 className="bam">
                                        <span className="fifth-text">
                                            <a href="/" >Learn more
                                   <RiArrowDropRightLine className="arrow2" />
                                            </a>
                                            <a href="/" >
                                                Buy
                                       <RiArrowDropRightLine className="arrow2" />
                                            </a>
                                        </span>
                                    </h1>
                                    <h1>
                                        <a href="/" className="full-img-tag" >
                                            <span className="first-text" >iPhone SE</span>
                                            <span className="second-text" >Lots to Love.Less to spend.</span>
                                            <span className="third-text" >Starting at$399.</span>
                                            <span className="fourth-text" >From $9.54/mo. or $299 with trade-in.<sup className="sup-one">1</sup></span>
                                        </a>

                                    </h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="section2">
                        <div>
                            <div className="full-img2">
                                <div className="pic-2-2">


                                    <h1 className="bam2">
                                        <span className="fifth-text2">
                                            <a href="/" >Learn more
                                   <RiArrowDropRightLine className="arrow2" />
                                            </a>
                                            <a href="/" >
                                                Buy
                                       <RiArrowDropRightLine className="arrow2" />
                                            </a>
                                        </span>
                                    </h1>
                                    <h1>
                                        <a href="/" className="full-img-tag2" >
                                            <span className="first-text2" >iPhone <span className="eleven">11</span></span>
                                            <span className="second-text2" >Just the right amount of everything.</span>
                                            <span className="fourth-text2" >From $18.70/mo. or $449 with trade-in.<sup className="sup-one">1</sup></span>
                                        </a>

                                    </h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="section3">
                        <div>
                            <div className="full-img3">
                                <div className="pic-3-2">


                                    <h1 className="bam3">
                                        <span className="fifth-text2">
                                            <a href="/" >Learn more
                                   <RiArrowDropRightLine className="arrow2" />
                                            </a>
                                            <a href="/" >
                                                Buy
                                       <RiArrowDropRightLine className="arrow2" />
                                            </a>
                                        </span>
                                    </h1>
                                    <h1>
                                        <a href="/" className="full-img-tag3" >
                                            <span className="first-text3" >iPad Pro </span>
                                            <span className="second-text3" >Your next computer is not a computer.</span>
                                        </a>

                                    </h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="section4">
                        <div className="section4-grid">


                            {this.state.sub1.map((p) => {
                                return (

                                    <div key={p.id}>
                                        <Sub1 img={p.img}
                                            fullImg={p.fullImg}
                                            Text1={p.Text1}
                                            Text2={p.Text2}
                                            Text3={p.Text3}
                                            Text4={p.Text4}
                                            Text5={p.Text5}
                                            Text6={p.Text6}
                                            classText1={p.classText1}
                                            classText2={p.classText2}
                                            classText3={p.classText3}
                                            classText4={p.classText4}
                                            classText5={p.classText5}
                                            classText6={p.classText6}
                                            tag={p.tag}

                                            linkPos={p.linkPos}
                                            linkStyle1={p.linkStyle1}
                                            linkStyle2={p.linkStyle2}
                                            linkLogo1={p.linkLogo1}
                                            linkLogo2={p.linkLogo2}
                                            linkText1={p.linkText1}
                                            linkText2={p.linkText2}

                                            appleLogo={p.appleLogo}
                                            link1Logo2={p.link1Logo2}
                                            dee={p.dee}



                                        />

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
