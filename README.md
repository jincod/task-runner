# Task Runner

## Configuration

Modify package.json

	"scripts": {
		"task-runner": "task-runner"
	}

Add build-config.js
	
	const clean = () => Promise.resolve();
	const build = () => Promise.resolve();

	export default {
		tasks: [
			clean,
			build
		]
	};

## Usage

### Run all tasks

	npm run task-runner

### Run one task

	npm run task-runner -- build
	npm run task-runner -- clean

#### OR

Update package.json:
	
	"scripts": {
		...
		"clean": "task-runner clean",
		"build": "task-runner build"
	}

Run

	npm run clean
	npm run build
