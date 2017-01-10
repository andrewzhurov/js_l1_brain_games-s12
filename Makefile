install: 
	npm install

run:
	npm run babel-node -- bin/$(G)

publish:
	npm publish

lint:
	npm run eslint -- src test

build:
	rm -rf dist
	npm run build

auto_publish: install build publish
