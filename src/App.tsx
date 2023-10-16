import { Chessboard } from 'react-chessboard';
import { SidebarFactory } from './components/sidebar-factory/SidebarFactory.tsx';

export function App() {
  return (
    <div className={'container mx-auto p-2 w-screen'}>
      <h1 className="text-xl my-1 sm:my-3 sm:text-3xl font-bold text-center">
        Chess Openings Trainer
      </h1>

      <div className={'md:flex md:justify-between'}>
        <div className={'w-full md:w-[60vw]'}>
          <Chessboard id={'chessboard'} />
        </div>
        <div
          className={'w-full mt-2 md:mt-0 md:w-[40vw] md:ml-2 border-green-700 border-solid border'}
        >
          <SidebarFactory />
        </div>
      </div>
    </div>
  );
}
