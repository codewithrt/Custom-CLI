import {Args, Command,Flags} from '@oclif/core'
import {exec} from "child_process"
// import { main } from '../../controller/file/index.js'

export default class File extends Command {
  static args = {
FileName:Args.string({description:"File name over which command to execute",required:true})
}

  static description = `Commands to be Executed Over file
   AddFile [Filename] -e [extension]
   Delete [Filename]
   AddFolder [Foldername]
   Delete [Foldername]
   ReadFile [Filename]
   WriteFile [Filename] -e [extension] -s [Sentence]
  `

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {
    extension: Flags.string({char: 'e', description: 'File Extension'}),
    sentence: Flags.string({char: 's', description: 'File Content'}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(File)
    console.log(args,flags );
   
    // this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
