import Header from './components/Header/Header';
import AllTasks from './components/AllTasks/AllTasks';

function App() {
    return (
        <div className='w-screen min-h-screen bg-blue-50 p-5 font-inter'>
            <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-5'>
                <Header />

                <main>
                    <AllTasks />
                </main>
            </div>
        </div>
    );
}

export default App;
