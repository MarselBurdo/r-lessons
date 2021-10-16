const styles={
    fontSize: '18px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'

}

export const Title = ({text, show, icon}) => {
    return <>
        {icon ?
        <h2 style={styles}>{icon}{text}</h2> :
        <h3 >{text}</h3>}
        </>
    }
