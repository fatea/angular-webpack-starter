# babel-webpack-gulp-starter

**(take Angular as an example)**

Probably **the only config** that guides you to **write ES7 smoothly** (*babel*) and 
 **wrap everything** (*web pack*) including js, libs, css into a single **bundle.js**  for instance, array functions, decorators and async/await keywords.
 
In a word, you are free in the front-end and can write like this:

```js
import 'your.css'

import foo from 'bar'
foo.sleep = async (timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve();
      }, timeout);
    });
}


var wake = async () =>  {
    console.log('Do some thing, ' + new Date());
    await sleep(3000);
    console.log('Do other things, ' + new Date());
  };
  
  wake();

```

ps: Why do I say "the only tool"? I google everywhere and there are articles instead of thorough examples. **Here it is.**

## TODO

write a detailed guidance for usage of babel, web pack, and gulp.

## Getting Started

To get you started you can simply clone the this repository and install the dependencies using `npm install` && `bower install`.
