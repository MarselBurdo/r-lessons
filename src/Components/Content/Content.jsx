import {Title} from "../Title/Title";
import {Button} from "../Button/Button";


const titleData = [
    {
        text: 'Информация о университете',
        show: true,
        unique: 1
    },
    {
        text: 'Преподаватели',
        show: true,
        unique: 2
    }, {
        text: 'Города',
        show: false,
        unique: 3
    }, {
        text: 'Факультеты',
        show: true,
        unique: 4
    },
]

export const Content = () => {
    const showTitle = true
    return <>
        <div style={{width: '100%', flexShrink: '0.5', backgroundColor: 'orange'}}>


            {titleData.map(el => (
                <Title text={el.text} show={el.show} key={`${el.text}-${el.unique}`}/>
            ))}


            {/*Collection render*/}
            <ul>
                {titleData.map(el => (<li key={el.text}>{el.text}</li>))}
            </ul>


            <Button label={'Добавить преподавателя'} type={'link'} size={10}/>

        </div>
    </>
}
