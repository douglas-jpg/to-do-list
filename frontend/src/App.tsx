import Header from './components/Header/Header';
import AllTasks from './components/AllTasks/AllTasks';

function App() {
    return (
        <div className='min-h-screen w-full min-w-[450px] bg-blue-50 p-4 sm:p-6 lg:p-8 font-inter'>
            <div className='max-w-3xl xl:max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-5 sm:p-6 lg:p-8'>
                <Header />
                <main>
                    <AllTasks />
                </main>
            </div>
        </div>
    );
}

export default App;
