function handleClick(callback) {
    alert('You clicked a button')
    if (callback) {
        callback();
    }
}

function doMore() {
    alert('I could process more logic here');
}

function doSomethingElse() {
    document.writeln('Test message');
}