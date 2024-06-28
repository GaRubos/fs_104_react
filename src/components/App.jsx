import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Message from "./Message/Message";
import '../index.css'

function App() {

    const isOnline = false;

    return (
        <main>
            <Header />

            <div>

                <Message author='Stepan' message="Розробник" value={ 25+2} />

            <Message author= 'Ruslan'  />

            <Message author='Pavlo' message='Директор' status={ isOnline ? <span> <b>online</b></span>:<span>offline</span> } />

            </div>

            
            

            <Footer/>
        </main>
    ) 
}

export default App;