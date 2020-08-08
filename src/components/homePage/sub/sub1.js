import React from 'react';
import '../home.css'
import { RiArrowDropRightLine } from 'react-icons/ri';
import { FaApple} from "react-icons/fa";
import { AiFillPlayCircle} from "react-icons/ai";

const sub1 = (props) => {
    return (
                <div className="sub-section4">
                    <div>
                        <div className={props.fullImg}>
                            <div className={props.img}>


                                <h1 className={props.linkPos}>
                                    <span className={props.linkStyle1}>
                                        <a href="/" >{props.linkText1}
                                  <RiArrowDropRightLine className={props.linkLogo1} />
                                  <AiFillPlayCircle className={props.link1Logo2} />
                                        </a>
                                        <a href="/" className={props.linkStyle2}>
                                        {props.linkText2}
                                      <RiArrowDropRightLine className={props.linkLogo2} />
                                        </a>
                                    </span>
                                </h1>

                                <h1>
                                    <a href="/" className={props.tag} >
                                        <span className={props.classText1} > <FaApple className={props.appleLogo}/> {props.Text1} </span>
                                        <span className={props.classText2} ><span className={props.dee}>D</span>{props.Text2} </span>
                                        <span className={props.classText3} >{props.Text3} </span>
                                        <span className={props.classText4} >{props.Text4}</span>
                                        <span className={props.classText5} >{props.Text5}</span>
                                        <span className={props.classText6} >{props.Text6}</span>
                                    </a>

                                </h1>
                            </div>

                        </div>

                    </div>
                </div>

    )
}

export default sub1;

