import { BrowserRouter } from 'react-router-dom'
import Blog from './components/Blog'

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                 <Blog />
            </div>
        </BrowserRouter>
    )
}

export default App
