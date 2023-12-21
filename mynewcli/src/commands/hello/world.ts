import {Command} from '@oclif/core'
import {exec} from "child_process"

export default class World extends Command {
  static args = {}

  static description = 'Say hello world'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  async run(): Promise<void> {
    this.log('hello world! (./src/commands/hello/world.ts)')
    // this.log('mkdir assignents')
    // const terminalCommand = 'rmdir -r assignents';

    // Use child_process.exec to run the terminal command
    // exec(terminalCommand, (error:any, stdout:any, stderr:any) => {
    //   if (error) {
    //     console.error(`Error executing command: ${error.message}`);
    //     return;
    //   }

    //   if (stderr) {
    //     console.error(`Command stderr: ${stderr}`);
    //     return;
    //   }

    //   console.log(`Command output: ${stdout}`);
    // });
  }
}
