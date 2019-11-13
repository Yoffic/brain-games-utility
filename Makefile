install:
	npm install

even:
	npx babel-node src/bin/brain-even.js

calc:
	npx babel-node src/bin/brain-calc.js

gcd:
	npx babel-node src/bin/brain-gcd.js

prime:
	npx babel-node src/bin/brain-prime.js

progression:
	npx babel-node src/bin/brain-progression.js

lint:
	npx eslint .

publish:
	npm publish --dry-run