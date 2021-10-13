export const Title = ({text, show}) => {
    return <>
        {show ?
        <h2>{text}</h2> :
        <h3>{text}</h3>}
        </>
    }
