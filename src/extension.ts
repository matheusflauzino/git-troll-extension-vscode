// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import EvilGitMerge from './util/EvilGitMerge';
import EvilGitMergeController from './util/EvilGitMergeController';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const evilGitMerge = new EvilGitMerge()
	const evilGitMergeController = new EvilGitMergeController(evilGitMerge)
	evilGitMergeController.activate()

}

// this method is called when your extension is deactivated
export function deactivate() {}
