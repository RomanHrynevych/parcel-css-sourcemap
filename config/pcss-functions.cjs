const maxWidth = 1440;
const minWidth = 768;

function ac(
	startSize,
	endSize,
	minBreakpoint = minWidth,
	maxBreakpoint = maxWidth
) {
	const startSizeFormatted = startSize.replace('px', '');
	const endSizeFormatted = endSize.replace('px', '');

	const difference = startSizeFormatted - endSizeFormatted;

	if (difference > 0) {
		return `min(max(calc(${endSize} + ${difference} * ((100vw - ${minBreakpoint}px) / ${
			maxBreakpoint - minBreakpoint
		})), ${endSize}), ${startSize})`;
	} else {
		return `min(max(calc(${endSize} + ${difference} * ((100vw - ${minBreakpoint}px) / ${
			maxBreakpoint - minBreakpoint
		})), ${startSize}), ${endSize})`;
	}
}

function rc(startSize, endSize, maxBreakpoint = maxWidth) {
	const startSizeFormatted = startSize.replace('px', '');
	const endSizeFormatted = endSize.replace('px', '');

	const difference = startSizeFormatted - endSizeFormatted;

	if (difference > 0) {
		return `max(min(${vw(
			startSizeFormatted,
			maxBreakpoint
		)}, ${startSize}), ${endSize})`;
	} else {
		return `min(max(${vw(
			startSizeFormatted,
			maxBreakpoint
		)}, ${startSize}), ${endSize})`;
	}
}

const perc = (number1, number2 = maxWidth) =>
	`${(number1 * 100) / number2}%`;

const vw = (number1, number2 = maxWidth) =>
	`${(number1 * 100) / number2}vw`;

const setTransition = (...props) => {
	if (props[0].endsWith('s')) {
		const duration = props[0];

		return props
			.map((prop, idx) => {
				if (idx > 0) return `${prop} ${duration}`;
			})
			.join(', ');
	} else {
		return props.map((prop) => `${prop} 250ms`).join(', ');
	}
};

module.exports = { ac, rc, perc, vw, setTransition };
