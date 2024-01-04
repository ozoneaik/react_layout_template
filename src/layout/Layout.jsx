// eslint-disable-next-line react/prop-types
import Sidebar from "./Sidebar.jsx";
import '../assets/style/layout.css'

export default function Layout({children}) {
    return (
        <>


            <div style={{display: "flex"}}>
                <Sidebar/>
                <div className={'content'}>
                    <div className={'Nav'}>
                        hello
                    </div>
                    <div className={'Container'}>

                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}