import Header from './components/Header/Header';
import AllTasks from './components/AllTasks/AllTasks';

function App() {
    return (
        <div className='min-h-screen bg-blue-50 p-4 sm:p-6 font-inter'>
            <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-5'>
                <Header />
                <main>
                    <AllTasks />
                </main>
            </div>
        </div>
    );
}

export default App;
