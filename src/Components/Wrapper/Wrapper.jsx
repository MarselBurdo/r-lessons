import {Content} from "../Content/Content";
import {Sidebar} from "../Sidebar/Sidebar";

export const Wrapper = () => {

    const isView = false
    return <>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%',height:'70%'}}>

            {isView ? <Sidebar/>:<div>1</div>}
            <Content/>
        </div>
    </>
}
