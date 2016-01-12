all: js

init:
	bower install almond requirejs jQuery

js:
	r.js -o yawik.build.js