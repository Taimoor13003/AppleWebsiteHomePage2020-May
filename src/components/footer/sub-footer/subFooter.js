import React from 'react';
let check=true
function toogleHandler(uniqueId){
    let a=uniqueId
    if(check){
        document.getElementById(a+"q").className="list-down"
        document.getElementById((a+"p")).className+=" f-plusRotate"
        check=false
    }else{
        document.getElementById(a+"q").className="list-up"
        document.getElementById((a+"p")).className="f-plus"
        check=true
    }
}
const subFooter = (props) => {

    let uniqueId=(props.uniqueId)

    return (
        <div>

        <div className="list-div">
                <h3 className="list-head" onClick={()=>toogleHandler(uniqueId)}>
                        {props.listHeadText}
                        <span id={uniqueId+"p"} className="f-plus">+</span>

                </h3>
                <ul id={uniqueId +"q"} className={props.flist}>
                    {props.fli1}
                    {props.fli2}
                    {props.fli3}
                    {props.fli4}
                    {props.fli5}
                    {props.fli6}
                    {props.fli7}
                    {props.fli8}
                    {props.fli9}
                    {props.fli10}
                    {props.fli11}
                    {props.fli12}
                    {props.fli13}
                    {props.fli14}
                    {props.fli15}
                    {props.fli16}
                    {props.fli17}
                    {props.fli18}
                    {props.fli19}
                    {props.fli20}
                </ul>
        </div>
        </div>
    );
};

export default subFooter;