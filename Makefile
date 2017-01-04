install: 
	npm install brain-games -g

run:
	npm run babel-node -- bin/$(G)

publish:
	npm publish
