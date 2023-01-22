.PHONY: install start build lint test

install:
	npm install

start:
	npm run dev

build:
	make git-log
	npm run build

lint:
	npm run lint

test:
	npm run test:unit

git-log:
	npm run git-log
