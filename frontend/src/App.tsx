import { useState, useEffect } from 'react';
import { ITask } from './@types/Tasks';

import Header from './components/Header/Header';
import AllTasks from './components/AllTasks/AllTasks';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setTasks([
                {
                    title: 'Add your name in the body',
                    description: '',
                    priority: 'baixa',
                    done: false,
                    createdAt: '2025-03-05T20:07:32.402Z',
                    updatedAt: '2025-03-05T20:07:32.402Z',
                    id: '67c8af0413d92c4093c1c16a',
                },
                {
                    title: 'titulo de exemplo',
                    description: 'ddescrição de exemplo',
                    priority: 'media',
                    done: false,
                    createdAt: '2025-03-05T21:03:04.976Z',
                    updatedAt: '2025-03-05T21:03:04.976Z',
                    id: '67c8bc08bfc2966fded29974',
                },
                {
                    title: 'cachorro lavado',
                    description: 'lavar o cachorro novamente',
                    done: false,
                    priority: 'alta',
                    createdAt: '2025-03-06T22:15:47.528Z',
                    updatedAt: '2025-03-10T14:07:16.382Z',
                    id: '67ca1e9307bb1e66189472e0',
                },
                {
                    title: 'dormir',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore veniam, mollitia quibusdam placeat repellendus quasi tenetur, sint incidunt sunt ipsam corporis! Fuga consequuntur quo id? Molestiae, alias ratione. Beatae, hic?',
                    done: false,
                    priority: 'baixa',
                    createdAt: '2025-03-06T22:35:33.479Z',
                    updatedAt: '2025-03-06T22:35:33.479Z',
                    id: '67ca233540fb88975c7dba0c',
                },
            ]);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className='w-screen min-h-screen bg-blue-50 p-5 font-inter'>
            <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-5'>
                <Header />

                <main>
                    <AllTasks tasks={tasks} isLoading={isLoading} />
                </main>
            </div>
        </div>
    );
}

export default App;
