async function f() {
  await Promise.reject(new Error("Whoops!"));
}

f().catch(console.log);

let f = async () => {
  try {
    await Promise.reject(new Error("Whoops!"));
  } catch (error) {
    console.log(error);
  }
};

f();
