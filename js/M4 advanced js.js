function correctMethodName() {
    return "Output message";
}

try {
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
}