
import PropTypes from "prop-types";
import {ReactComponent as PlusIcon} from './icon.svg'
import './styles.scss'

export const Button= ({label,size})=>{

    
    return<button  className={'btn__usecase'}><PlusIcon/>{label}</button>
}

Button.propTypes={
    label: PropTypes.string.isRequired,
    size: PropTypes.number,

}
