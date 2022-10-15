function listProcessor(arr) {
    let res = [];
    let commands = {
        add: (word) => res.push(word),
        remove: (word) => (res = res.filter((s) => s !== word)),
        print: () => console.log(res.join(",")),
    };

    for (const line of arr) {
        const [command, word] = line.split(" ");
        commands[command](word);
    }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
    "add pesho",
    "add george",
    "add peter",
    "remove peter",
    "print",
]);