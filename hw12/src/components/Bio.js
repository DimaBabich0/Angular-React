const portraitStyle =
{
    width: '300px',
};

export function PersonInfo ()
{
    return (
        <div>
            <h2>Великий человек</h2>
            <ul>
                <li>Имя: 1</li>
                <li>Фамилия: 2</li>
                <li>Возраст: 3</li>
                <li>Биография: 4</li>
            </ul>
        </div>
    );
}

export function PersonPortrait ()
{
    return (
        <div>
            <h2>Портрет: </h2>
            <img style={portraitStyle} src="https://cdn-icons-png.flaticon.com/512/10942/10942081.png"/>
        </div>
    );
}