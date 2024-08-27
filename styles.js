const ansi = {
  // Text Styles
  reset: '\x1B[0m',
  bold: '\x1B[1m',
  dim: '\x1B[2m',
  italic: '\x1B[3m', // Not supported in all terminals
  underline: '\x1B[4m',
  inverse: '\x1B[7m',
  hidden: '\x1B[8m',
  strikethrough: '\x1B[9m', // Not supported in all terminals

  // Text Colors (Foreground)
  black: '\x1B[30m',
  red: '\x1B[31m',
  green: '\x1B[32m',
  yellow: '\x1B[33m',
  blue: '\x1B[34m',
  magenta: '\x1B[35m',
  cyan: '\x1B[36m',
  white: '\x1B[37m',
  gray: '\x1B[90m',
  brightRed: '\x1B[91m',
  brightGreen: '\x1B[92m',
  brightYellow: '\x1B[93m',
  brightBlue: '\x1B[94m',
  brightMagenta: '\x1B[95m',
  brightCyan: '\x1B[96m',
  brightWhite: '\x1B[97m',

  // Background Colors
  bgBlack: '\x1B[40m',
  bgRed: '\x1B[41m',
  bgGreen: '\x1B[42m',
  bgYellow: '\x1B[43m',
  bgBlue: '\x1B[44m',
  bgMagenta: '\x1B[45m',
  bgCyan: '\x1B[46m',
  bgWhite: '\x1B[47m',
  bgGray: '\x1B[100m',
  bgBrightRed: '\x1B[101m',
  bgBrightGreen: '\x1B[102m',
  bgBrightYellow: '\x1B[103m',
  bgBrightBlue: '\x1B[104m',
  bgBrightMagenta: '\x1B[105m',
  bgBrightCyan: '\x1B[106m',
  bgBrightWhite: '\x1B[107m'
};

// Function to apply styles
function styleText(text, ...styles) {
  const styleCodes = styles.map(style => ansi[style] || '').join('');
  return `${styleCodes}${text}${ansi.reset}`;
}

module.exports = {
  ...ansi,
  styleText
};
