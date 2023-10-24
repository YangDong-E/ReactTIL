import React, { useState } from 'react';

const Example = () => {
    const [state, setState] = useState({ text: '' });

    const handleChange = (e) => {
        setState({ [e.target.name]: e.target.value });
    };

    // fetch로 서버에서 응답을 한 후에 코드를 동작하도록함
    const onClick = async () => {
        const textbox = {
            inText: state.text,
        };
        await fetch('http://localhost:4000/text', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(textbox),
        })
            .then((res) => {
                // console.log(res);
                // console.log(res.json);
                // return 을 쓰지않으면 undefined가 출력이 되기때문에 return 을 써주어야한다.
                return res.json();
            })
            .then((json) => {
                // console.log(json);
                setState({
                    text: json.text,
                });
            });
    };

    return (
        <div>
            <input name="text" onChange={handleChange}></input>
            <button onClick={onClick}>전송</button>
            <h3>{state.text}</h3>
        </div>
    );
};

export default Example;
