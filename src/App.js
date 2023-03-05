// import { useState } from "react";
// import "./App.css";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// import Counter from './components/Counter';
// import Fruits from "./components/Fruits";
import Listall from "./components/Listall";
// import Notes from "./components/Notes";
// import News from "./components/News";

function App() {
    // const [count, setCount] = useState(0);
    // function updateCountInParent(c) {
    //     setCount(c);
    // }
    return (
        <div>
            {/* <Fruits/> */}
            {/* <Notes/> */}
            {/* <p>Count in Parent :{count}</p>
            <Child1 ParentCount={updateCountInParent} />
            <Child2 count={count}/> */}
            <Listall/>
            {/* <News/> */}
        </div>
    );
}

export default App;
