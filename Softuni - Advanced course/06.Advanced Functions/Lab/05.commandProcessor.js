function createCommander () {
    let content = '';

    return { 
        append: (s) => content += s,
        removeStart: (n) => content = content.substring(n),
        removeEnd: (n) => content = content.substring(0, content.length - n),
        print: () => console.log(content)
    };

}

let commander = createCommander();

commander.append('Sharo');
commander.append('Kotka');
commander.removeStart(3);
commander.print();