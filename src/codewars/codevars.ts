const isMerge = (s: string, part1: string, part2: string): boolean => {
	if (!s) {
		return !part1 && !part2;
	}

	let fromPart1 = false;
	let fromPart2 = false;

	if (part1 && s[0] === part1[0]) {
		fromPart1 = isMerge(s.slice(1), part1.slice(1), part2);
	}

	if (part2 && s[0] === part2[0]) {
		fromPart2 = isMerge(s.slice(1), part1, part2.slice(1));
	}

	return fromPart1 || fromPart2;
};

const isMerge2 = (s: string, part1: string, part2: string): boolean => {
	return !s
		? !(part1 || part2)
		: (s[0] == part1[0] && isMerge2(s.slice(1), part1.slice(1), part2)) ||
				(s[0] == part2[0] && isMerge2(s.slice(1), part1, part2.slice(1)));
};
isMerge("Wordpress", "Wrdp", "oress"); //?
isMerge2("Wordpress", "Wrdp", "oress"); //?
