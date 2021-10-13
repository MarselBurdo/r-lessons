import PropTypes from "prop-types";

export const Button= ({label,size})=>{
    return<button  style={{padding:`${size}px`}}>{label}</button>
}

Button.propTypes={
    label: PropTypes.string.isRequired,
    size: PropTypes.number,

}
