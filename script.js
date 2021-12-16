const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parser = (sentence) => {
    const words = sentence.split(" ");
    let parsed = [];
    words.map((w) => {
        w = w.split('');
        const first = w.splice(0, 1);
        const last = w.splice(w.length-1, 1);
        let middle = [...new Set(w)];
        parsed.push(`${first}${middle.length}${last}`);
    });
    return (parsed.join(' '));
};

rl.question("What string phrase you want to parse ? ", (sentence) => {
    console.log(parser(sentence));
    rl.close();
});

module.exports = parser;