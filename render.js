/* const elemnet = <h1>Hello, World!</h1>
ReactDOM.render(
    element,
    document.getElementById('example')
); */

function tick(){
    const element = (
        <div>
            <h1>
                Hello, World!
            </h1>
            <h2>现在是{new Data().toLocaleTimeString()}.</h2>

        </div>
    );
}