import Button from '../Button/Button';
import DateComponent from '../DateComponent/DateComponent';
import PriorityFilter from '../PriorityFilter/PriorityFilter';

const Header = () => {
  return (
      <header className='mb-6'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>
              Lista de Tarefas
          </h1>
          <div className='flex justify-between items-center mb-4'>
              <DateComponent />
              <Button />
          </div>
          <PriorityFilter />
          <hr className='text-gray-500' />
      </header>
  );
}

export default Header