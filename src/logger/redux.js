const colors = [
  ["red", 1],
  ["green", 2],
  ["blue", 4],
  ["white", 7],
  ["cyan", 6],
  ["magenta", 5],
  ["yellow", 3],
  ["grey", 0],
].reduce(
  (cols, col) => ({
    ...cols,
    [col[0]]: (f) => `\x1b[3${col[1]}m${f}\x1b[0m`,
  }),
  {}
);

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

// gets top level keys and prints them in format
const topLevel = (obj, rightArrow) => {
  let formatted = "";
  Object.keys(obj).forEach((key) => {
    if (key.length > 0) {
      formatted += `${rightArrow} ${key} `;
    }
    if (obj.hasOwnProperty(key)) {
      formatted += `${truncate(
        JSON.stringify(obj[key], (key, val) =>
          val && val.constructor && val.call && val.apply ? "function() {}" : val
        ),
        500
      )}\n`;
    }
  });

  return formatted;
};

const renderToConsole = (obj, rightArrow) => {
  try {
    return topLevel(obj, rightArrow);
  } catch (e) {
    return obj;
  }
};

export default function createCLILogger(options) {
  const {
    downArrow = "▼",
    rightArrow = "▶",
    messageColor = "red",
    prevColor = "grey",
    actionColor = "blue",
    nextColor = "yellow",
    predicate = null,
    log = console.log,
    stateTransformer = (x) => x,
    actionTransformer = (x) => x,
  } = options;

  return (store) => (next) => (action) => {
    const { getState } = store;

    if (predicate && !predicate(getState, action)) {
      return next(action);
    }

    if (typeof console === "undefined") {
      return next(action);
    }

    const prevState = renderToConsole(stateTransformer(getState()), rightArrow);
    const actionDisplay = renderToConsole(actionTransformer(action), rightArrow);
    const returnValue = next(action);
    const nextState = renderToConsole(stateTransformer(getState()), rightArrow);
    const time = new Date();

    const h = padLeft(time.getHours(), 2, "0");
    const m = padLeft(time.getMinutes(), 2, "0");
    const s = padLeft(time.getSeconds(), 2, "0");
    const message = `${downArrow} action ${action.type} @ ${h}:${m}:${s}`;

    const output =
      `\n${colors[messageColor](truncate(message, 100))}\n` +
      // `  ${colors[prevColor](`prev state\n${prevState}`)}` +
      // `  ${colors[actionColor](`action\n${actionDisplay}`)}` +
      `${colors[nextColor](`state\n${nextState}`)}`;

    log(output);
    return returnValue;
  };
}

function padLeft(input, len, filler) {
  var output = "" + input;
  while (output.length < len) {
    output = filler + output;
  }
  return output;
}
