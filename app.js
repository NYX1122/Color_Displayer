import chalk from 'chalk';

export default function (colors) {
  for (const color of colors) {
    if (color.includes('#')) {
      const coloredBoldChalk = chalk.hex(color).bold(color);
      console.log(coloredBoldChalk);
    } else {
      console.log('Unsupported color format.');
    }
  }
}
