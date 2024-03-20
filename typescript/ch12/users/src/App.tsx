import React, { useEffect, useState } from 'react';  // JSX 코드가 있는 파일은 반드시 첫 줄에 React라는 심벌을 import문으로 불러오는 코드가 있어야 한다.
import { getDataPromise } from './getDataPromise';
import { IUser } from './IUser';
import { Card } from './Card';
import "./App.css";

const App: React.FC = () => {
  const limit = 1
  const [skip,setSkip] =useState(0)
  const [users,setUsers] = useState<IUser[]>([]) // useState의 입력 매개변수인 빈 배열[]은 users에 초깃값으로 사용
  const onClick = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])
    })(skip,limit)
  }
  useEffect(onClick,[])
  return(
    <div className="App">
      {users.map((user: IUser, key: number) => (
        <Card click={onClick} user={user} key={key.toString()} />
      ))}
    </div>
  )
}
export default App;
