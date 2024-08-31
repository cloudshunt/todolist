function qux() {
  return Math.random();
}

async function bar() {
  let result = await qux();
  return result > 0.5;
}

function foo() {
  if (bar()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

foo();