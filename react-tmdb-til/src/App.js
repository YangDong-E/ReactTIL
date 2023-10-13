import Moive from './components/Moive';
import { dummy } from './movieDummy';

function App() {
    return (
        <div>
            {/* jsx문법안에서 js를 사용하려면 {}를 사용하여야한다. */}
            <div className="app-container">
                {/* movieDummy파일에 있는 dummy에서 results부분을 불러온 후 Moive컴포넌트를 사용하여 뿌려준다. */}
                {dummy.results.map((item) => {
                    return <Moive title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} />;
                })}
            </div>
        </div>
    );
}

export default App;
