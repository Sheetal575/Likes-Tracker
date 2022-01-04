import {  Route,  BrowserRouter ,Routes  } from 'react-router-dom'
import CreatePost from './create-post/create-post'
import AllPost from './all-post/all-post'
import AppContainer from './app-container/app-container'

export default function Routing() {
    return(
        <>
        <BrowserRouter>
                    <Routes >
                        <Route exact path="/" element={<AppContainer />} >
                           <Route exact path="/create-your-post" element={<CreatePost />} />
                           <Route exact path="/" element={<AllPost/>} />
                        </Route>
                        
                    </Routes> 
        </BrowserRouter>
        </>
    )
}