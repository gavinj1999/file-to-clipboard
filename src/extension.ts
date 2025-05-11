import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('fileToClipboard.copy', async (uri: vscode.Uri) => {
        try {
            // Check if a valid file URI is provided
            if (!uri || uri.scheme !== 'file') {
                vscode.window.showErrorMessage('No valid file selected.');
                return;
            }

            const filePath = uri.fsPath;
            const ext = path.extname(filePath).toLowerCase();

            // Get allowed extensions from user/workspace settings
            const config = vscode.workspace.getConfiguration('fileToClipboard');
            const allowedExtensions: string[] = config.get('allowedExtensions', [
                '.txt', '.js', '.ts', '.json', '.md', '.css', '.html', '.py',
                '.java', '.cpp', '.c', '.h', '.php', '.rb', '.go', '.sh',
                '.yaml', '.yml', '.xml', '.csv'
            ]);

            // Normalize extensions to lowercase for comparison
            const normalizedExtensions = allowedExtensions.map(e => e.toLowerCase());

            // Check if the file has an allowed text extension
            if (!ext || !normalizedExtensions.includes(ext)) {
                vscode.window.showErrorMessage('This command is only supported for configured text file extensions. Check File to Clipboard settings.');
                return;
            }

            // Read the file contents
            const fileContent = fs.readFileSync(filePath, 'utf8');

            // Copy the contents to the clipboard
            await vscode.env.clipboard.writeText(fileContent);

            // Show a success message
            vscode.window.showInformationMessage(`Copied contents of ${path.basename(filePath)} to clipboard.`);
        } catch (error) {
            // Handle errors with type guard
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Failed to copy file contents: ${errorMessage}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}